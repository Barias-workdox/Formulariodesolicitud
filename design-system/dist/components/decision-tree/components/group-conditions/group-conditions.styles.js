import { inputOverrides as e } from "../group-condition-value/group-condition-value.styles.js";
const i = "200px", t = {
  Root: {
    style: () => ({ minWidth: i })
  },
  ValueContainer: e.Input,
  Popover: {
    props: {
      overrides: {
        Body: {
          style: () => ({ zIndex: 20 })
        }
      }
    }
  }
}, o = {
  containerStyles: (n) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${n.colors.neutralSubtle}`,
    borderRadius: n.borders.borderSm,
    padding: `${n.spacing.spacingSm} ${n.spacing.spacingMd}`
  }),
  conditionsContainerStyles: (n) => ({
    display: "flex",
    alignItems: "center",
    paddingRight: n.spacing.spacingSm
  }),
  conditionContainerStyles: (n) => ({
    display: "flex",
    alignItems: "center",
    paddingRight: n.spacing.spacingSm
  })
};
export {
  t as selectOverrides,
  o as styles
};
//# sourceMappingURL=group-conditions.styles.js.map
