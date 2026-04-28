import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { memo as x } from "react";
import { Pen as C, Launch as T } from "@carbon/icons-react";
import { BackgroundIcon as k } from "../../../../../../../../../../background-icon/background-icon.js";
import { Link as w } from "../../../../../../../../../../link/link.js";
import { Text as e } from "../../../../../../../../../../text/text.js";
import { useCss as A } from "../../../../../../../../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as I } from "../../../../../../../../../../utils/hooks/use-date-util-with-locale.js";
import { usePartialQuotesRendering as M } from "../../../../../../../../../hooks/use-partial-quotes-rendering.hook.js";
import { ShowMoreButton as _ } from "../../../../../../../../show-more-button/show-more-button.js";
import { StyledQuotesContainer as z } from "../../styled-components/styled-quotes-container.js";
import { StyledQuoteContainer as B } from "../../styled-components/styled-quote-container.js";
import { styles as D } from "./administrative-quotes.styles.js";
import { StyledQuoteHeader as L } from "./styled-components/styled-quote-header.js";
import { StyledQuoteHeaderTitle as P } from "./styled-components/styled-quote-header-title.js";
const W = ({
  dataTestId: r = "administrative-quotes",
  quotes: m
}) => {
  const { iconStyles: l, theme: c } = A(D), { isShowMoreButtonVisible: d, onToggleShowAllQuotes: p, partialQuotes: u, showMoreQuotes: f } = M({ quotes: m }), { formatDateAsText: h } = I();
  return /* @__PURE__ */ t(z, { children: [
    u.map(({ name: i, source: g, text: S, url: n = "", date: Q = "" }, y) => {
      const a = `${r}-${y}-${i}`, b = n !== "", s = `${i}, ${g}.`, $ = h(Q);
      return /* @__PURE__ */ t(
        B,
        {
          $gap: c.spacing.spacingXs,
          children: [
            /* @__PURE__ */ t(L, { children: [
              /* @__PURE__ */ o(
                k,
                {
                  Icon: C,
                  backgroundColor: "peaceSubtle",
                  iconColor: "peace",
                  size: "24px"
                }
              ),
              /* @__PURE__ */ t(P, { children: [
                /* @__PURE__ */ o(
                  e,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutral",
                    fontWeight: 700,
                    children: b ? /* @__PURE__ */ t(
                      w,
                      {
                        dataTestId: `${a}__link`,
                        href: n,
                        size: "small",
                        fontWeight: "700",
                        onClick: (v) => v.stopPropagation(),
                        children: [
                          s,
                          /* @__PURE__ */ o(T, { className: l })
                        ]
                      }
                    ) : s
                  }
                ),
                /* @__PURE__ */ o(
                  e,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutral",
                    children: $
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ o(
              e,
              {
                variant: "bodySmall",
                margin: 0,
                color: "neutralStrong",
                children: S
              }
            )
          ]
        },
        a
      );
    }),
    d && /* @__PURE__ */ o(
      _,
      {
        dataTestId: `${r}__show-more-button`,
        onClick: p,
        isExpanded: f
      }
    )
  ] });
}, Z = x(W);
export {
  Z as AdministrativeQuotes
};
//# sourceMappingURL=administrative-quotes.js.map
