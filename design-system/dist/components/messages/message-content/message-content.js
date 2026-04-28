import { jsx as s } from "react/jsx-runtime";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as e } from "../../../themes/utilities.js";
import { Text as n } from "../../text/text.js";
import { useCss as r } from "../../utils/hooks/use-css.js";
const i = {
  textStyle: (t) => ({
    wordBreak: "break-word",
    textAlign: "justify",
    marginTop: t.spacing.spacingMd,
    marginBottom: t.spacing.spacingXs,
    color: t.colors.neutralSubdued,
    flexGrow: 1
  })
}, y = ({ children: t }) => {
  const { theme: o } = r();
  return /* @__PURE__ */ s(
    n,
    {
      variant: "bodySmall",
      $style: i.textStyle(o),
      children: t
    }
  );
}, f = e("div", ({ $theme: t }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: t.spacing.spacingXs
})), u = e("div", ({ $theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing.spacing2xs
}));
export {
  y as MessageContent,
  f as MessageContentBodyWrapper,
  u as MessageContentWrapper,
  i as messageContentStyles
};
//# sourceMappingURL=message-content.js.map
