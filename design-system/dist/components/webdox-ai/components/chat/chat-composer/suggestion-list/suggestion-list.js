import { jsx as r, Fragment as m, jsxs as c } from "react/jsx-runtime";
import { useCallback as p } from "react";
import { TruncatedText as l } from "../../../../../truncated-text/truncated-text.js";
import { SuggestionListItem as u } from "./suggestion-list-item.js";
import { StyledUl as g, truncateTextProps as h } from "./suggestion-list.styled.js";
const T = ({
  dataTestId: e,
  items: s,
  title: o,
  onClick: n
}) => {
  const a = p(
    (t) => {
      n(t);
    },
    [n]
  );
  return /* @__PURE__ */ r(m, { children: /* @__PURE__ */ c(g, { "data-testid": `${e}--wrapper`, children: [
    /* @__PURE__ */ r(
      l,
      {
        "data-testid": `${e}-content`,
        textProps: h,
        tooltipProps: {
          showArrow: !0,
          content: o,
          ignoreBoundary: !0
        },
        children: o
      }
    ),
    s.map((t) => {
      const { label: d, id: i } = t;
      return /* @__PURE__ */ r(
        u,
        {
          "data-testid": `{dataTestId}--item-${i}`,
          onClick: () => a(t),
          children: d
        },
        i
      );
    })
  ] }) });
};
export {
  T as SuggestionList
};
//# sourceMappingURL=suggestion-list.js.map
