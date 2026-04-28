import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { memo as g } from "react";
import { Launch as y } from "@carbon/icons-react";
import { Link as b } from "../../../../../../../../../../link/link.js";
import { Text as s } from "../../../../../../../../../../text/text.js";
import { useCss as $ } from "../../../../../../../../../../utils/hooks/use-css.js";
import { usePartialQuotesRendering as C } from "../../../../../../../../../hooks/use-partial-quotes-rendering.hook.js";
import { ShowMoreButton as w } from "../../../../../../../../show-more-button/show-more-button.js";
import { StyledQuotesContainer as x } from "../../styled-components/styled-quotes-container.js";
import { StyledQuoteContainer as M } from "../../styled-components/styled-quote-container.js";
import { styles as T } from "./jurisprudential-quotes.styles.js";
import { StyledTagsContainer as k } from "./styled-components/styled-tags-container.js";
import { StyledQuoteReference as _ } from "./styled-components/styled-quote-reference.js";
const j = ({
  dataTestId: e = "jurisprudential-quotes",
  quotes: m
}) => {
  const { iconStyles: l } = $(T), { isShowMoreButtonVisible: a, onToggleShowAllQuotes: u, partialQuotes: d, showMoreQuotes: p } = C({ quotes: m });
  return /* @__PURE__ */ t(x, { children: [
    d.map(({ name: i, source: c, children: f = [], url: h }, S) => {
      const n = `${e}-${S}-${i}`;
      return /* @__PURE__ */ t(M, { children: [
        /* @__PURE__ */ t(
          s,
          {
            variant: "bodySmall",
            margin: 0,
            color: "neutralStrong",
            children: [
              /* @__PURE__ */ t(
                b,
                {
                  dataTestId: `${n}__link`,
                  href: h,
                  size: "small",
                  fontWeight: "700",
                  onClick: (r) => r.stopPropagation(),
                  children: [
                    i,
                    /* @__PURE__ */ o(y, { className: l })
                  ]
                }
              ),
              /* @__PURE__ */ o("br", {}),
              c
            ]
          }
        ),
        /* @__PURE__ */ o(k, { children: f.map(({ name: r, fatherName: Q }) => /* @__PURE__ */ o(_, { children: /* @__PURE__ */ o(
          s,
          {
            variant: "bodySmall",
            margin: 0,
            color: "brandMedium",
            children: `${r} - ${Q}`
          }
        ) }, r)) })
      ] }, n);
    }),
    a && /* @__PURE__ */ o(
      w,
      {
        dataTestId: `${e}__show-more-button`,
        onClick: u,
        isExpanded: p
      }
    )
  ] });
}, W = g(j);
export {
  W as JurisprudentialQuotes
};
//# sourceMappingURL=jurisprudential-quotes.js.map
