import { themedStyled as i } from "../../../../../../../../themes/utilities.js";
const n = i(
  "article",
  ({ $theme: a, $maxWidth: s }) => ({
    maxWidth: s,
    display: "flex",
    flexDirection: "column",
    alignSelf: "end",
    background: a.colors.peaceWashed,
    borderRadius: `${a.spacing.spacingXs} ${a.spacing.spacingXs} 0 ${a.spacing.spacingXs}`,
    padding: a.spacing.spacingXs,
    gap: a.spacing.spacingMd
  })
);
export {
  n as StyledSecondaryMessageLayout
};
//# sourceMappingURL=styled-secondary-message-layout.js.map
