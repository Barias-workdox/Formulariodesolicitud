import { TruncatedText as r } from "../truncated-text/truncated-text.js";
import { themedStyled as e } from "../../themes/utilities.js";
const t = e(
  "div",
  ({ $theme: a, $disabled: o }) => ({
    backgroundColor: a.colors.bgBase,
    padding: `${a.spacing.spacingMd}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: a.spacing.spacingMd,
    border: `1px solid ${a.colors.neutralSubtle}`,
    transition: "box-shadow 0.2s ease-in-out",
    ":hover": {
      boxShadow: o ? "none" : "0px 2px 28px 0px rgba(0, 0, 0, 0.08)"
    }
  })
), s = e("div", ({ $theme: a }) => ({
  display: "flex",
  gap: a.spacing.spacingMd,
  alignItems: "center"
})), d = e("div", ({ $theme: a }) => ({
  display: "flex",
  gap: a.spacing.spacingXs,
  alignItems: "start"
})), i = e(r, () => ({ flex: 1 }));
export {
  d as StyledCardFooterWrapper,
  s as StyledCardHeaderWrapper,
  t as StyledCardWrapper,
  i as StyledTruncatedText
};
//# sourceMappingURL=card.styled.js.map
