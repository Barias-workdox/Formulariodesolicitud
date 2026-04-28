import { themedStyled as r } from "../../../../themes/utilities.js";
import "@carbon/icons-react";
import { WEBDOX_AI_COLORS as i } from "../../constants/webdox-ai-colors.constants.js";
import "../../constants/webdox-ai-regex.constants.js";
import { WEBDOX_AI_BUTTON_SIZE as e, WEBDOX_AI_BUTTON_ICON_SIZE as n } from "./webdox-ai-button.constants.js";
const a = {
  animationDuration: "2s",
  animationDelay: "0s",
  animationIterationCount: "infinite",
  animationTimingFunction: "ease-in-out"
}, y = {
  iconStyles: (t, { $isLoading: o }) => ({
    position: "absolute",
    height: n,
    width: n,
    ...o && {
      ...a,
      animationName: {
        "0%": {
          opacity: 1
        },
        "50%": {
          opacity: 0.8
        },
        "100%": {
          opacity: 1
        }
      }
    }
  })
}, u = r(
  "button",
  ({ $isLoading: t, $hasError: o = !1 }) => ({
    position: "relative",
    height: e,
    width: e,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "unset",
    border: "unset",
    borderRadius: "50%",
    cursor: "pointer",
    background: i.primaryColor,
    // Add an animation to svg icon when the button is hovered
    ":has(*) svg:nth-of-type(1)": {
      transition: "transform 300ms ease-in-out"
    },
    ":hover": {
      ":has(*) svg:nth-of-type(1)": {
        transform: "scale(1.1)"
      }
    },
    ...(t || o) && {
      "::before": {
        //  Some colors used in the gradient are not tokenized as they are exclusively used for animation purposes.
        background: `conic-gradient( #F6F2F8 0deg, ${i.secondaryColor} 140deg, #87EECF 295deg, #F6F2F8 360deg)`,
        content: '""',
        borderRadius: "50%",
        height: "100%",
        width: "100%",
        ...t && {
          ...a,
          animationName: {
            "0%": {
              transform: "rotate(0deg)",
              opacity: 0
            },
            "50%": {
              opacity: 1
            },
            "100%": {
              transform: "rotate(720deg)",
              opacity: 0
            }
          }
        }
      }
    }
  })
);
export {
  u as StyledButton,
  y as styles
};
//# sourceMappingURL=webdox-ai-button.styles.js.map
