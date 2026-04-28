import { jsx as o, jsxs as m } from "react/jsx-runtime";
import { InformationFilled as h, CheckmarkOutline as u } from "@carbon/icons-react";
import { Alert as b } from "../../../../alert/alert.js";
import { Button as e } from "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as C } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { Drawer as D } from "../../../../drawer/drawer.js";
import { DrawerHeader as y } from "../../../../drawer/components/drawer-header.js";
import { DrawerFooter as g } from "../../../../drawer/components/drawer-footer.js";
import { DrawerBody as _ } from "../../../../drawer/components/drawer-body.js";
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
import { useTranslation as w } from "../../../../utils/i18n/utils.js";
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
import "../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import { DynamicFormControlContainer as x } from "../../../../forms/components/dynamic-form-control/dynamic-form-control.container.js";
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
import { DocumentSummary as N } from "./components/document-summary/document-summary.js";
import { styles as S } from "./document-approval-drawer.styles.js";
import { useDocumentApprovalFormContext as k } from "./document-approval-form.logic.js";
const Xo = ({
  "data-testid": t,
  document: a,
  isOpen: n,
  isLoading: p = !1,
  documentLastModificationText: l,
  onClose: i,
  onSubmit: c
}) => {
  const { t: r } = w(), { formStyles: d, theme: s } = C(S), { handleSubmit: f } = k();
  return /* @__PURE__ */ o(
    D,
    {
      onClose: i,
      isOpen: n,
      children: /* @__PURE__ */ m(
        "form",
        {
          "data-testid": `${t}__form`,
          onSubmit: f(c),
          className: d,
          children: [
            /* @__PURE__ */ o(
              y,
              {
                "data-testid": `${t}__drawer-header`,
                title: r("contractNegotiationCollaboration.approveDocument"),
                onClose: i
              }
            ),
            /* @__PURE__ */ m(_, { children: [
              /* @__PURE__ */ o(
                b,
                {
                  kind: "infoLight",
                  icon: /* @__PURE__ */ o(
                    h,
                    {
                      width: 24,
                      height: 24,
                      color: s.colors.brandSubdued
                    }
                  ),
                  children: /* @__PURE__ */ o(
                    v,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      children: r("contractNegotiationCollaboration.approvalInformation")
                    }
                  )
                }
              ),
              /* @__PURE__ */ o(
                N,
                {
                  document: a,
                  documentLastModificationText: l
                }
              ),
              /* @__PURE__ */ o(
                x,
                {
                  controlKind: "textareaControl",
                  name: "comment",
                  label: r("contractNegotiationCollaboration.forms.comments.label"),
                  placeholder: `${r("contractNegotiationCollaboration.forms.comments.placeholder")}`
                }
              )
            ] }),
            /* @__PURE__ */ m(g, { children: [
              /* @__PURE__ */ o(
                e,
                {
                  "data-testid": `${t}__cancel`,
                  type: "button",
                  kind: "secondary",
                  onClick: i,
                  children: r("general.cancel")
                }
              ),
              /* @__PURE__ */ o(
                e,
                {
                  "data-testid": `${t}__approve`,
                  type: "submit",
                  startEnhancer: /* @__PURE__ */ o(u, {}),
                  isLoading: p,
                  disabled: p,
                  children: r("contractNegotiationCollaboration.approve")
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
  Xo as DocumentApprovalDrawer
};
//# sourceMappingURL=document-approval-drawer.js.map
