import { COMMON_ICON_SIZE_16 as t } from "../../../../../constants/common.constants.js";
import { themedStyled as e } from "../../../../../themes/utilities.js";
const i = e(
  "button",
  ({ $theme: o, $rotate: r }) => ({
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
    color: o.colors.neutralDepressed,
    cursor: "pointer",
    display: "flex",
    height: t,
    justifyContent: "center",
    padding: 0,
    transform: `rotate(${r ? 180 : 0}deg)`,
    transition: "all .20s ease-in-out",
    width: t,
    position: "absolute",
    right: 0,
    top: 0,
    ":hover": {
      color: o.colors.neutral
    },
    ":focus": {
      outline: "none"
    }
  })
);
export {
  i as StyledButton
};
//# sourceMappingURL=styled-button.js.map
