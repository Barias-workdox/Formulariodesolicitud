import { jsx as i, jsxs as r, Fragment as d } from "react/jsx-runtime";
import { ParagraphXSmall as g } from "baseui/typography";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../utils/i18n/utils.js";
import { Button as e } from "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { useCss as b } from "../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
const y = {
  containerStyles: {
    backgroundColor: "rgba(0,0,0,.1)",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  boxStyles: (t) => ({
    background: "white",
    padding: `${t.spacing.spacingMd} ${t.spacing.spacing3xl}`,
    boxShadow: t.lighting.shadowDefault
  }),
  buttonsWrapperStyles: (t) => ({
    marginTop: t.spacing.spacingMd,
    display: "grid",
    gridAutoFlow: "column",
    gridColumnGap: t.spacing.spacingXs
  })
}, E = ({
  dataTestId: t = "message-delete",
  show: n,
  message: s,
  onCancel: a,
  onConfirm: p
}) => {
  const { containerStyles: l, boxStyles: m, buttonsWrapperStyles: c } = b(y), { t: o } = u();
  return n ? /* @__PURE__ */ i("div", { className: l, children: /* @__PURE__ */ r("div", { className: m, children: [
    /* @__PURE__ */ i(g, { children: o("messages.deleteTitle") }),
    /* @__PURE__ */ r("div", { className: c, children: [
      /* @__PURE__ */ i(
        e,
        {
          "data-testid": `${t}__cancel-button`,
          type: "button",
          kind: "secondary",
          onClick: a,
          size: "compact",
          children: o("general.cancel")
        }
      ),
      /* @__PURE__ */ i(
        e,
        {
          "data-testid": `${t}__confirm-button`,
          type: "button",
          kind: "primary",
          onClick: p,
          size: "compact",
          disabled: !s,
          children: o("general.delete")
        }
      )
    ] })
  ] }) }) : /* @__PURE__ */ i(d, {});
};
export {
  E as MessageDelete
};
//# sourceMappingURL=message-delete.js.map
