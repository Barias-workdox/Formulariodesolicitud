import { COMMON_ICON_SIZE_16 as l, COMMON_ICON_SIZE_20 as t } from "../../../constants/common.constants.js";
const p = () => ({
  display: "grid",
  gridTemplateColumns: "auto 1fr"
}), s = ({ $size: o }) => ({
  height: o === "sm" ? l : t,
  display: "block",
  margin: 0
}), c = ({
  $theme: o,
  $disabled: a,
  $size: r
}) => ({
  ...r === "md" ? o.typography.ParagraphMedium : o.typography.ParagraphSmall,
  color: a ? o.colors.neutralDepressed : o.colors.neutral,
  margin: 0,
  paddingRight: o.spacing.spacingXs,
  lineHeight: 1
}), d = ({
  $theme: o
}) => ({
  height: "auto",
  borderBottom: `1px solid ${o.colors.neutralSubtle}`
}), g = ({
  $theme: o,
  $size: a
}) => ({
  padding: `0 ${o.spacing.spacingXs}`,
  color: o.colors.neutralSubdued,
  ...a === "md" ? o.typography.ParagraphMedium : o.typography.ParagraphSmall
}), i = ({
  $theme: o,
  $size: a
}) => ({
  color: o.colors.neutralSubdued,
  ...a === "md" ? o.typography.ParagraphSmall : o.typography.ParagraphXSmall
}), y = () => ({
  paddingLeft: 0
});
export {
  i as countrySelectDropdownDialcodeColumnStyles,
  y as countrySelectDropdownFlagColumnStyles,
  d as countrySelectDropdownListItemStyles,
  g as countrySelectDropdownNameColumnStyles,
  c as dialCodeStyles,
  s as flagContainerStyles,
  p as rootStyles
};
//# sourceMappingURL=phone-input.styles.js.map
