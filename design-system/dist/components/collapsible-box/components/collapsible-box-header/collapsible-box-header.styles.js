import { themedStyled as n } from "../../../../themes/utilities.js";
const o = n("div", ({ $theme: e, $expanded: t, $headerOverrides: i }) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingMd,
  padding: e.spacing.spacingXs,
  justifyContent: "space-between",
  borderBottomWidth: t === !1 ? "0" : "1px",
  ...i
})), s = n("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingMd
})), l = n("div", () => ({
  display: "flex",
  alignItems: "center"
})), p = (e) => ({
  flex: 1,
  fontWeight: 500,
  wordBreak: "break-word",
  ...e
});
export {
  o as CollapsibleBoxHeaderContainer,
  l as CollapsibleBoxIconContainer,
  s as SectionContainer,
  p as textStyles
};
//# sourceMappingURL=collapsible-box-header.styles.js.map
