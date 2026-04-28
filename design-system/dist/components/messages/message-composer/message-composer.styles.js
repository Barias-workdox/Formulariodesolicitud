import { themedStyled as e } from "../../../themes/utilities.js";
const i = {
  userMentionStyles: (n) => ({
    color: n.colors.neutral,
    fontWeight: 500
  })
}, l = e("div", ({ $theme: n, $isEditing: o }) => ({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  padding: o ? "none" : `${n.spacing.spacingMd} ${n.spacing.spacingXl}`
}));
export {
  l as StyledRoot,
  i as styles
};
//# sourceMappingURL=message-composer.styles.js.map
