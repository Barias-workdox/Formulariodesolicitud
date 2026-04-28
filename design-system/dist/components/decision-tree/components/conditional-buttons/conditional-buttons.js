import { jsx as r, jsxs as m } from "react/jsx-runtime";
import { Button as n } from "baseui/button";
import { StatefulTooltipNext as s } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../utils/i18n/utils.js";
import { StyledContainer as c, StyledInner as a, buttonOverrides as d } from "./conditional-buttons.styles.js";
const B = ({
  dataTestId: e,
  logicConnector: i,
  onUpdateLogicConnector: o
}) => {
  const { t } = p();
  return /* @__PURE__ */ r(c, { children: /* @__PURE__ */ m(a, { children: [
    /* @__PURE__ */ r(
      s,
      {
        showArrow: !0,
        zIndex: 10,
        placement: "right",
        popoverMargin: 44,
        content: t("decisionTree.orMessage"),
        children: /* @__PURE__ */ r(
          n,
          {
            "data-testid": `${e}--or-btn`,
            overrides: d({ isOrButton: !0, isActive: i === "OR" }),
            onClick: () => o("OR"),
            children: t("decisionTree.or")
          }
        )
      }
    ),
    /* @__PURE__ */ r(
      s,
      {
        showArrow: !0,
        zIndex: 10,
        placement: "right",
        popoverMargin: 12,
        content: t("decisionTree.andMessage"),
        children: /* @__PURE__ */ r(
          n,
          {
            "data-testid": `${e}--and-btn`,
            overrides: d({ isActive: i === "AND" }),
            onClick: () => o("AND"),
            children: t("decisionTree.and")
          }
        )
      }
    )
  ] }) });
};
export {
  B as ConditionalButtons
};
//# sourceMappingURL=conditional-buttons.js.map
