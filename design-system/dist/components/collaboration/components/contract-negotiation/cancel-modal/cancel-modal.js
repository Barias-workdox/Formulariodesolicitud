import { jsx as o, jsxs as a } from "react/jsx-runtime";
import { InformationFilled as h, CloseOutline as f } from "@carbon/icons-react";
import { Alert as u } from "../../../../alert/alert.js";
import { Button as m } from "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as C } from "../../../../utils/hooks/use-css.js";
import { Modal as S } from "../../../../modal/modal.js";
import "../../../../modal/regular-modal.js";
import { SectionedModalHeader as y, SectionedModalBody as M, SectionedModalFooter as N } from "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "react-hook-form";
import "react";
import "baseui/form-control";
import "baseui";
import { Text as i } from "../../../../text/text.js";
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
import { useTranslation as v } from "../../../../utils/i18n/utils.js";
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
import { useCancelCollaborationFormContext as F } from "./cancel-modal.logic.js";
import { styles as _ } from "./cancel-modal.styles.js";
const Po = ({
  "data-testid": n = "cancel-modal",
  isOpen: c,
  isLoading: e,
  onClose: l,
  onSubmit: p
}) => {
  const { mainContainerStyles: d, theme: r } = C(_), { t } = v(), {
    handleSubmit: s,
    formState: {
      errors: { message: g }
    }
  } = F(), b = e || g !== void 0;
  return /* @__PURE__ */ o(
    S,
    {
      isOpen: c,
      onClose: l,
      children: /* @__PURE__ */ a(
        "form",
        {
          "data-testid": `${n}__form`,
          onSubmit: s(p),
          children: [
            /* @__PURE__ */ o(y, { children: t("contractNegotiationCollaboration.cancel") }),
            /* @__PURE__ */ a(M, { children: [
              /* @__PURE__ */ o(
                u,
                {
                  kind: "warning",
                  icon: /* @__PURE__ */ o(
                    h,
                    {
                      color: r.colors.warning,
                      size: "32"
                    }
                  ),
                  children: /* @__PURE__ */ o(
                    i,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: r.colors.warningStrong,
                      children: t("contractNegotiationCollaboration.cancelModal.alert")
                    }
                  )
                }
              ),
              /* @__PURE__ */ a("div", { className: d, children: [
                /* @__PURE__ */ o(
                  i,
                  {
                    variant: "body",
                    margin: 0,
                    fontWeight: "500",
                    children: t("contractNegotiationCollaboration.cancelModal.stepTitle")
                  }
                ),
                /* @__PURE__ */ o(
                  i,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    fontWeight: "400",
                    color: r.colors.neutralSubdued,
                    paddingTop: r.spacing.spacingXs,
                    children: t("contractNegotiationCollaboration.cancelModal.step1")
                  }
                ),
                /* @__PURE__ */ o(
                  i,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    fontWeight: "400",
                    color: r.colors.neutralSubdued,
                    paddingTop: r.spacing.spacingXs,
                    children: t("contractNegotiationCollaboration.cancelModal.step2")
                  }
                ),
                /* @__PURE__ */ o(
                  i,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    fontWeight: "400",
                    color: r.colors.neutralSubdued,
                    paddingTop: r.spacing.spacingXs,
                    children: t("contractNegotiationCollaboration.cancelModal.step3")
                  }
                )
              ] }),
              /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
                x,
                {
                  controlKind: "textareaControl",
                  name: "message",
                  label: t("contractNegotiationCollaboration.cancelModal.cancelationReason"),
                  placeholder: `${t(
                    "contractNegotiationCollaboration.cancelModal.cancelationReasonPlaceholder"
                  )}`
                }
              ) })
            ] }),
            /* @__PURE__ */ a(N, { children: [
              /* @__PURE__ */ o(
                m,
                {
                  "data-testid": `${n}__cancel`,
                  type: "button",
                  kind: "secondary",
                  onClick: l,
                  children: t("general.cancel")
                }
              ),
              /* @__PURE__ */ o(
                m,
                {
                  "data-testid": `${n}__cancel-collaboration`,
                  type: "submit",
                  isLoading: e,
                  disabled: b,
                  startEnhancer: /* @__PURE__ */ o(f, {}),
                  children: t("contractNegotiationCollaboration.cancel")
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
  Po as CancelModal
};
//# sourceMappingURL=cancel-modal.js.map
