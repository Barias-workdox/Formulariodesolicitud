import { jsxs as l } from "react/jsx-runtime";
const d = ({
  theme: o,
  optionListBorderBottom: a
}) => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  padding: `${o.spacing.spacingXs} ${o.spacing.spacingMd}`,
  ":hover": {
    backgroundColor: o.colors.neutralBase
  },
  ':has(*)[aria-disabled="false"]': {
    ":hover": {
      backgroundColor: o.colors.neutralBase
    },
    color: o.colors.neutralSubdued
  },
  ...a && {
    ":not(:first-child)": {
      borderTop: `1px solid ${o.colors.neutralWashed}`
    }
  },
  a: {
    textDecoration: "none"
  }
}), i = ({
  item: o,
  itemLabelKey: a,
  dataTestId: s,
  theme: n
}) => {
  const { id: r, startEnhancer: e } = o, t = o[a];
  return /* @__PURE__ */ l(
    "div",
    {
      "data-testid": `${s}--option-${r}`,
      style: {
        display: "flex",
        alignItems: "center",
        gap: n.spacing.spacingMd
      },
      children: [
        e,
        " ",
        t
      ]
    }
  );
};
export {
  i as defaultGetItemLabel,
  d as menuItemListItemStyles
};
//# sourceMappingURL=menu-item.styles.js.map
