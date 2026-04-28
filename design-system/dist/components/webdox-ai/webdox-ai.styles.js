import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedWithStyle as e } from "../../themes/utilities.js";
import "react/jsx-runtime";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import { SectionedModalBody as i } from "../modal/sectioned-modal.js";
const S = ({
  shape: t = "round",
  isLoading: o = !1
} = {}) => ({
  "::before": {
    //  Some colors used in the gradient are not tokenized as they are exclusively used for animation purposes.
    background: "conic-gradient(from 130.7deg at 50% 50%, #F6F2F8 0deg, #C5C7FE 140.4deg, #87EECF 295.44deg, #F6F2F8 360deg)",
    content: '""',
    height: "100%",
    width: "100%",
    borderRadius: t === "round" ? "50%" : "0",
    ...o && {
      animationDuration: "2s",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationTimingFunction: "ease-in-out",
      animationName: {
        "0%": {
          transform: "rotate(0deg)"
        },
        "100%": {
          transform: "rotate(720deg)"
        }
      }
    }
  }
}), n = {
  formContainerStyles: {
    maxHeight: "70vh",
    display: "flex",
    flexDirection: "column"
  }
}, h = () => ({
  Dialog: {
    style: n
  }
}), x = e(i, ({ $theme: t }) => ({
  display: "flex",
  flexDirection: "column",
  gap: t.spacing.spacingMd,
  flexGrow: 1,
  overflow: "auto"
})), F = {
  textStyles: (t) => ({
    color: t.colors.neutralSubdued
  })
};
export {
  x as StyledSectionedModalBody,
  n as chatBotModalStyles,
  S as getSuiteAIBackgroundGradient,
  h as modalOverrides,
  F as styledChatBotGenerativeTextStyles
};
//# sourceMappingURL=webdox-ai.styles.js.map
