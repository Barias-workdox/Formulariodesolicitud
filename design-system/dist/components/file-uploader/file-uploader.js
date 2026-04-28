import { jsx as s } from "react/jsx-runtime";
import { forwardRef as b, useCallback as l } from "react";
import { FileUploaderBasic as h } from "baseui/file-uploader-basic";
import { useSyncedRef as A } from "../../hooks/use-synced-ref.hook.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../utils/i18n/utils.js";
import { DEFAULT_FILE_EXTENSIONS as w } from "../utils/constants/file.constants.js";
import { useCss as x } from "../utils/hooks/use-css.js";
import "@carbon/icons-react";
import "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "../text/text.js";
import { FileUploaderButtonContainer as R } from "./components/file-uploader-button/file-uploader-button.container.js";
import { FileUploaderMessage as N } from "./components/file-uploader-message/file-uploader-message.js";
import { fileUploaderOverrides as S } from "./file-uploader.styles.js";
import { DEFAULT_FILE_EXTENSION_NAMES as T } from "./utils/file-uploader.constants.js";
const ar = b(function({
  "data-testid": t = "file-uploader",
  accept: f = w,
  acceptedExtensionsNames: u = T,
  disabled: m = !1,
  directorySelection: o = !1,
  multiple: d = !0,
  selectedFiles: a = [],
  title: e,
  inputRef: c,
  error: E,
  ...i
}, C) {
  const { theme: F } = x(), { t: p } = g(), r = A({
    externalRef: c
  }), k = l(
    (n) => {
      r.current && (o && n === "folder" ? r.current.setAttribute("webkitdirectory", "true") : r.current.removeAttribute("webkitdirectory"), r.current.click());
    },
    [o, r]
  ), U = l(() => {
    r.current && (r.current.removeAttribute("webkitdirectory"), r.current.click());
  }, [r]);
  return /* @__PURE__ */ s(
    h,
    {
      ...i,
      accept: f,
      disabled: m,
      multiple: d,
      overrides: {
        ...S(F, { $hasError: !!E }),
        HiddenInput: {
          props: {
            "data-testid": `${t}--hidden-input`,
            ...i.name && { name: i.name },
            ref: r
          }
        },
        Root: {
          props: {
            ref: C
          }
        },
        ContentMessage: {
          component: N,
          props: {
            title: (e == null ? void 0 : e.trim()) || p("fileuploader.dragAndDropMessage"),
            subtitle: p("fileuploader.allowedExtensions", {
              allowedExtensions: u
            })
          }
        },
        ButtonComponent: {
          component: (n) => /* @__PURE__ */ s(
            R,
            {
              ...n,
              "data-testid": t,
              directorySelection: o,
              selectedFiles: a,
              onSelectionTypeChange: k,
              onClick: U
            }
          ),
          props: {
            "data-testid": t,
            disabled: m,
            text: p("fileuploader.selectFromPC"),
            selectedFiles: a
          }
        }
      }
    }
  );
});
export {
  ar as FileUploader
};
//# sourceMappingURL=file-uploader.js.map
