import { StyledInput as d, StyledRoot as i } from "baseui/input";
import { themedWithStyle as o } from "../../../themes/utilities.js";
import { getInputStyle as l, getInputRootStyles as g } from "./input.styles.js";
const c = o(
  d,
  l
), y = o(
  i,
  g
), $ = ({
  kind: t,
  size: n,
  isHovered: e,
  dataTestId: r,
  withStartEnhancer: a,
  width: p
}) => ({
  ClearIconContainer: {
    style: ({ $theme: s }) => ({ marginRight: `-${s.spacing.spacingXs}` })
  },
  StartEnhancer: {
    style: {
      backgroundColor: "transparent",
      padding: 0
    }
  },
  EndEnhancer: {
    style: {
      backgroundColor: "transparent",
      padding: 0
    }
  },
  MaskToggleButton: {
    style: {
      paddingRight: 0
    }
  },
  Input: {
    props: {
      "data-testid": r,
      $size: n,
      $kind: t
    },
    component: c
  },
  InputContainer: {
    style: {
      backgroundColor: "transparent"
    }
  },
  Root: {
    props: {
      $kind: t,
      $size: n,
      $isHovered: e,
      $withStartEnhancer: a,
      $width: p
    },
    component: y
  }
});
export {
  c as StyledInput,
  y as StyledRoot,
  $ as getInputBaseOverrides
};
//# sourceMappingURL=input.overrides.js.map
