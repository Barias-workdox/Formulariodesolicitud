import { jsxs as o, Fragment as a, jsx as l } from "react/jsx-runtime";
import { ParagraphSmall as p } from "baseui/typography";
import { useCss as g } from "../../utils/hooks/use-css.js";
const h = {
  barStyles: (s, { barColor: r }) => ({
    width: s.spacing.spacing2xs,
    height: s.spacing.spacingXl,
    marginRight: s.spacing.spacingXs,
    backgroundColor: s.colors[r] || s.colors.brandSubdued
  }),
  authorContainerStyles: {
    flex: 1,
    overflow: "hidden"
  },
  labelStyles: (s, { labelColor: r }) => ({
    color: s.colors[r] || s.colors.brand
  })
}, u = (s) => ({
  fontWeight: 500,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  margin: 0,
  color: s.colors.neutral
}), f = ({
  children: s,
  label: r,
  barColor: n,
  labelColor: e
}) => {
  const { authorContainerStyles: t, barStyles: i, labelStyles: c, theme: d } = g(h, {
    barColor: n,
    labelColor: e
  });
  return /* @__PURE__ */ o(a, { children: [
    /* @__PURE__ */ l("span", { className: i }),
    /* @__PURE__ */ l("div", { className: t, children: /* @__PURE__ */ o(p, { $style: u(d), children: [
      s,
      r && /* @__PURE__ */ o(a, { children: [
        " ",
        "- ",
        /* @__PURE__ */ l("span", { className: c, children: r })
      ] })
    ] }) })
  ] });
};
export {
  f as MessageAuthor
};
//# sourceMappingURL=message-author.js.map
