import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { WarningFilled as g, Upload as C } from "@carbon/icons-react";
import { Alert as x } from "../../../../alert/alert.js";
import { Button as a } from "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as _ } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { useContractNegotiationContext as y } from "../../../logic/contexts/contract-negotiation.context.js";
import { Drawer as D } from "../../../../drawer/drawer.js";
import { DrawerHeader as S } from "../../../../drawer/components/drawer-header.js";
import { DrawerFooter as F } from "../../../../drawer/components/drawer-footer.js";
import { DrawerBody as $ } from "../../../../drawer/components/drawer-body.js";
import { FileUploader as V } from "../../../../file-uploader/file-uploader.js";
import "react-hook-form";
import "baseui/form-control";
import { Text as v } from "../../../../text/text.js";
import "baseui/tooltip";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as E } from "../../../../utils/i18n/utils.js";
import "../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../select/next/components/select-dropdown-container.js";
import "../../../../select/next/components/select-optgroup-header.js";
import "../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../color-picker/next/color-picker.js";
import "../../../../checkbox/checkbox.js";
import "baseui/menu";
import "../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import { DynamicFormControlContainer as k } from "../../../../forms/components/dynamic-form-control/dynamic-form-control.container.js";
import "../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../avatar/avatar.styles.js";
import "../../../../input/input.js";
import "../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../tag/next/tag.styled-components.js";
import { useNewDocumentVersionFormContext as j } from "./new-document-version-drawer.logic.js";
import { styles as B } from "./new-document-version-drawer.styles.js";
const rr = ({
  "data-testid": t,
  selectedFiles: l,
  isLoading: e,
  isOpen: c,
  handleSelectFile: s,
  onClose: i,
  onSubmit: d
}) => {
  const { formStyles: f, spacingStyles: p, theme: n } = _(B), {
    allowedFileExtensions: { extensions: u, names: h }
  } = y(), { t: r } = E(), {
    formState: {
      errors: { document: w }
    },
    handleSubmit: N
  } = j(), b = w !== void 0 || e;
  return /* @__PURE__ */ o(
    D,
    {
      "data-testid": `${t}__drawer`,
      isOpen: c,
      onClose: i,
      children: /* @__PURE__ */ m(
        "form",
        {
          "data-testid": `${t}__form`,
          className: f,
          onSubmit: N(d),
          children: [
            /* @__PURE__ */ o(
              S,
              {
                title: r("contractNegotiationCollaboration.uploadNewVersion"),
                onClose: i
              }
            ),
            /* @__PURE__ */ m($, { children: [
              /* @__PURE__ */ o(
                x,
                {
                  kind: "warning",
                  icon: /* @__PURE__ */ o(
                    g,
                    {
                      size: "24",
                      color: n.colors.warning
                    }
                  ),
                  children: /* @__PURE__ */ o(
                    v,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: n.colors.warningStrong,
                      children: r("contractNegotiationCollaboration.loadNewVersionInfo")
                    }
                  )
                }
              ),
              /* @__PURE__ */ o("div", { className: p, children: /* @__PURE__ */ o(
                V,
                {
                  "data-testid": `${t}__file-uploader`,
                  multiple: !1,
                  selectedFiles: l,
                  accept: u,
                  acceptedExtensionsNames: h,
                  onDrop: s
                }
              ) }),
              /* @__PURE__ */ o("div", { className: p, children: /* @__PURE__ */ o(
                k,
                {
                  controlKind: "textareaControl",
                  name: "comment",
                  label: r("contractNegotiationCollaboration.forms.comments.label"),
                  placeholder: `${r(
                    "contractNegotiationCollaboration.forms.uploadNewVersion.placeholder"
                  )}`
                }
              ) })
            ] }),
            /* @__PURE__ */ m(F, { children: [
              /* @__PURE__ */ o(
                a,
                {
                  "data-testid": `${t}__cancel`,
                  type: "button",
                  kind: "secondary",
                  onClick: i,
                  children: r("general.cancel")
                }
              ),
              /* @__PURE__ */ o(
                a,
                {
                  "data-testid": `${t}__upload`,
                  type: "submit",
                  isLoading: e,
                  disabled: b,
                  startEnhancer: /* @__PURE__ */ o(C, {}),
                  children: r("contractNegotiationCollaboration.load")
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
export {
  rr as NewDocumentVersionDrawer
};
//# sourceMappingURL=new-document-version-drawer.js.map
