import { jsxs as m, jsx as f } from "react/jsx-runtime";
import { Children as u } from "react";
import { StyledContentWrapper as c, StyledList as g } from "../styled-components.js";
import { defaultMapItemToNode as h, defaultMapItemToString as $ } from "../suggestions-input.utils.js";
function j({
  dataTestId: t = "suggestion-input-list",
  listRef: e,
  items: o,
  width: s,
  topEnhancer: l,
  highlightedIndex: n,
  mapItemToNode: p = h,
  mapItemToString: d = $,
  handleChange: a
}) {
  return /* @__PURE__ */ m(c, { $width: s, children: [
    l,
    /* @__PURE__ */ f(
      g,
      {
        "data-testid": `${t}__list`,
        ref: e,
        role: "list",
        children: u.toArray(
          o.map(
            (r, i) => p({
              dataTestId: `${t}-${i}`,
              item: r,
              $isActive: n === i,
              handleClick: () => a(d(r))
            })
          )
        )
      }
    )
  ] });
}
export {
  j as SuggestionsInputList
};
//# sourceMappingURL=suggestions-input-list.js.map
