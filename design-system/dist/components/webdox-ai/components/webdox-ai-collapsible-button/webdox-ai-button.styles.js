import { WEBDOX_AI_BUTTON_ICON_SIZE as o } from "../webdox-ai-button/webdox-ai-button.constants.js";
const e = {
  iconStyles: ({ isHovered: s, isActive: t }) => ({
    position: "absolute",
    height: o,
    width: o,
    transition: "all .20s ease-in-out",
    transform: t ? s ? "scale(1.1)" : "scale(1)" : "scale(0)",
    opacity: t ? 1 : 0
  })
};
export {
  e as styles
};
//# sourceMappingURL=webdox-ai-button.styles.js.map
