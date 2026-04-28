import { jsxs as u, jsx as t } from "react/jsx-runtime";
import { Button as r } from "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as f } from "../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as b } from "../../../../../../utils/i18n/utils.js";
import { styles as y } from "./default-compose-submit-button.styles.js";
const O = ({
  "data-testid": i,
  isEditing: a,
  isLoading: e,
  isDisabled: m,
  localValue: n,
  onCreate: p,
  onUpdate: s,
  onCancel: c
}) => {
  const { createButtonContainerStyles: d, editButtonsContainerStyles: l } = f(y), { t: o } = b();
  return a ? /* @__PURE__ */ u("div", { className: l, children: [
    /* @__PURE__ */ t(
      r,
      {
        "data-testid": `${i}__cancel-button`,
        type: "button",
        kind: "secondary",
        onClick: () => {
          c && c();
        },
        size: "compact",
        children: o("general.cancel")
      }
    ),
    /* @__PURE__ */ t(
      r,
      {
        "data-testid": `${i}__save-button`,
        type: "button",
        kind: "primary",
        onClick: () => {
          s && s(n);
        },
        size: "compact",
        isLoading: e,
        disabled: m,
        children: o("general.save")
      }
    )
  ] }) : /* @__PURE__ */ t("div", { className: d, children: /* @__PURE__ */ t(
    r,
    {
      "data-testid": `${i}__send-button`,
      size: "compact",
      onClick: () => {
        p && p(n);
      },
      type: "button",
      isLoading: e,
      disabled: m,
      children: o("general.send")
    }
  ) });
};
export {
  O as DefaultComposerSubmitButton
};
//# sourceMappingURL=default-compose-submit-button.js.map
