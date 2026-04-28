import { jsx as t } from "react/jsx-runtime";
import { useMemo as f, useCallback as c } from "react";
import { DocumentAdd as F, FolderAdd as h } from "@carbon/icons-react";
import { Popover as x } from "../../../popover/popover.js";
import "baseui/popover";
import "baseui";
import "../../../popover/popover.styles.js";
import { StatefulMenu as b } from "../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as C } from "../../../utils/i18n/utils.js";
import { FileUploaderButton as a } from "./file-uploader-button.js";
const L = ({
  "data-testid": i,
  directorySelection: d,
  selectedFiles: m,
  onSelectionTypeChange: l,
  onClick: n,
  ...p
}) => {
  const { t: o } = C(), s = f(
    () => [
      {
        id: "files",
        label: o("fileuploader.uploadFiles"),
        startEnhancer: /* @__PURE__ */ t(F, {})
      },
      {
        id: "folder",
        label: o("fileuploader.uploadFolder"),
        startEnhancer: /* @__PURE__ */ t(h, {})
      }
    ],
    [o]
  ), u = c(
    (r, e) => {
      e(), l(r.id);
    },
    [l]
  );
  return d ? /* @__PURE__ */ t(
    x,
    {
      placement: "bottom",
      autoFocus: !1,
      content: ({ close: r }) => /* @__PURE__ */ t(
        b,
        {
          items: s,
          onItemSelect: ({ item: e }) => u(e, r)
        }
      ),
      children: /* @__PURE__ */ t("span", { children: /* @__PURE__ */ t(
        a,
        {
          "data-testid": i,
          text: o("fileuploader.selectFromPC"),
          selectedFiles: m,
          ...p
        }
      ) })
    }
  ) : /* @__PURE__ */ t(
    a,
    {
      ...p,
      "data-testid": i,
      text: o("fileuploader.selectFromPC"),
      selectedFiles: m,
      onClick: n
    }
  );
};
export {
  L as FileUploaderButtonContainer
};
//# sourceMappingURL=file-uploader-button.container.js.map
