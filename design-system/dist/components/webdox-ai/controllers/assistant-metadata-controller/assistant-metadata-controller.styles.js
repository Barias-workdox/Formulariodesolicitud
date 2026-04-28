import { getCustomScrollBarStyles as s } from "../../../../themes/custom-scroll-bar.js";
const e = {
  wrapperStyles: () => ({
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between"
  }),
  bodyStyles: (l) => ({
    flex: 1,
    overflowY: "auto",
    padding: `${l.spacing.spacingMd} ${l.spacing.spacingMd} 0`,
    gap: l.spacing.spacing3xl,
    display: "flex",
    flexDirection: "column",
    ...s(l)
  })
};
export {
  e as styles
};
//# sourceMappingURL=assistant-metadata-controller.styles.js.map
