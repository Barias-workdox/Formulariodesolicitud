import { themedStyled as o } from "../../../../../../themes/utilities.js";
const n = "24px", r = o("div", ({ $theme: t }) => ({
  border: `1px solid ${t.colors.neutralSubtle}`,
  borderRadius: t.spacing.spacing2xs,
  padding: `${t.spacing.spacingXs}`
})), a = o("section", ({ $theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  gap: `${t.spacing.spacing2xs}`
})), i = o("section", ({ $theme: t }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: `${t.spacing.spacing2xs}`
})), l = o("section", () => ({
  margin: 0
})), c = o("section", () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0
})), d = o(
  "div",
  ({ $theme: t, $isDisabled: e }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${t.colors.neutralSubtle}`,
    color: `${t.colors.neutralSubdued}`,
    borderRadius: `${t.borders.borderSm}`,
    width: `${n}`,
    height: `${n}`,
    ...e && {
      color: t.colors.neutralDepressed,
      borderColor: t.colors.neutralSubtle,
      backgroundColor: t.colors.neutralSubtle
    }
  })
);
export {
  a as StyledDataExtractionListContent,
  l as StyledDataExtractionListContentLabel,
  i as StyledDataExtractionListContentRow,
  c as StyledDataExtractionListContentValue,
  r as StyledDataExtractionListItemContainer,
  d as StyledInformationPlaceholder
};
//# sourceMappingURL=data-extraction-list-item.styles.js.map
