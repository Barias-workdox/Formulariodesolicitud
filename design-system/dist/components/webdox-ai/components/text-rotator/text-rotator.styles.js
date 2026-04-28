import { themedStyled as t } from "../../../../themes/utilities.js";
import { DESCRIPTIVE_LOADING_HEIGHT_PX as e, DESCRIPTIVE_LOADING_HEIGHT as i } from "../chat/chat-messages/chat-messages.constants.js";
const l = t("div", ({ $textIndex: n, $align: o = "start" }) => ({
  transform: `translateY(-${n * i}px)`,
  height: e,
  transition: "transform 0.6s ease-in-out",
  display: "flex",
  flexDirection: "column",
  alignItems: o
})), s = t("div", () => ({
  minHeight: e,
  display: "flex",
  alignItems: "center"
})), d = t("div", () => ({
  overflow: "hidden"
}));
export {
  d as StyledOverflowContainer,
  s as StyledTextContainer,
  l as StyledTextRotatorContainer
};
//# sourceMappingURL=text-rotator.styles.js.map
