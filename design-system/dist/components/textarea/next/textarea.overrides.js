import { StyledRoot as i } from "../../input/next/input.overrides.js";
import { textareaInputStyles as p } from "./textarea.styles.js";
const a = ({
  resize: r,
  kind: t,
  isHovered: n,
  dataTestId: o,
  size: e
}) => ({
  Root: {
    props: {
      $kind: t,
      $size: e,
      $isHovered: n
    },
    component: i,
    style: {
      padding: 0,
      width: r !== void 0 ? "fit-content" : void 0
    }
  },
  Input: {
    props: {
      ...o && { "data-testid": o },
      $kind: t,
      $size: e
    },
    style: p
  },
  InputContainer: {
    style: {
      backgroundColor: "transparent"
    }
  }
});
export {
  a as getTextareaOverrides
};
//# sourceMappingURL=textarea.overrides.js.map
