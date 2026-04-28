import { jsxs as C, jsx as t } from "react/jsx-runtime";
import { useState as x, useRef as S, useEffect as v } from "react";
import { useMountedState as b } from "react-use";
import { SectionedCard as M } from "../../../../../layouts/cards/sectioned-card/sectioned-card.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "../../../../../layouts/title-layout/title-layout.styles.js";
import { Markdown as w } from "../../../../../markdown/markdown.js";
import { Text as I } from "../../../../../text/text.js";
import { noop as e } from "../../../../../../utils/noop.js";
import { SUMMARY_CARD_MAX_HEIGHT as _ } from "../../../data-extraction/components/data-extraction-beta/data-extraction-beta.constants.js";
import { useSectionedCardOverrides as y } from "../../../data-extraction/data-extraction.overrides.js";
import { ContractSummaryFooter as H } from "../contract-summary-footer/contract-summary-footer.js";
import { textOverrides as R } from "./contract-summary-detail-step.styles.js";
const z = ({
  "data-testid": m,
  contractSummary: r = "",
  contractSummaryUpdatedAt: d,
  zIndex: a,
  onClickBack: s = e,
  onContractSummaryCopy: p = e,
  onSummaryScroll: l = e
}) => {
  const { getSectionedCardOverrides: f } = y(), [u, c] = x(
    void 0
  ), o = S(null), i = b();
  return v(() => {
    var n;
    if (r !== "" && o.current && i()) {
      const h = new ClipboardItem({
        "text/html": new Blob([((n = o.current) == null ? void 0 : n.outerHTML) || ""], { type: "text/html" })
      });
      c(h);
    }
  }, [i, r]), /* @__PURE__ */ C(M, { overrides: f({ maxHeight: _ }), children: [
    /* @__PURE__ */ t(
      I,
      {
        variant: "bodySmall",
        color: "neutralSubdued",
        overflow: "auto",
        margin: 0,
        as: "span",
        overrides: R({
          dataTestId: `${m}--contract-summary-text`,
          onScroll: l
        }),
        children: /* @__PURE__ */ t("span", { ref: o, children: /* @__PURE__ */ t(
          w,
          {
            extraComponents: {
              h1: /* @__PURE__ */ t("h4", {}),
              h2: /* @__PURE__ */ t("h4", {}),
              h3: /* @__PURE__ */ t("h4", {})
            },
            children: r
          }
        ) })
      }
    ),
    /* @__PURE__ */ t(
      H,
      {
        summaryClipboardItem: u,
        contractSummary: r,
        contractSummaryUpdatedAt: d,
        "data-testid": `${m}__footer`,
        zIndex: a,
        onContractSummaryCopy: p,
        onClickBack: s
      }
    )
  ] });
};
export {
  z as ContractSummaryDetailStep
};
//# sourceMappingURL=contract-summary-detail-step.js.map
