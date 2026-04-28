import "react/jsx-runtime";
import "@carbon/icons-react";
import "../text/text.js";
import "react";
import "baseui";
import "baseui/tooltip";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
import { labelFontStyle as l } from "../form-control/components/form-control-label/form-control-label.styles.js";
import { CHECK_MARK_SIZE as i, BORDER_WIDTH as e } from "./checkbox.constants.js";
const m = ({
  $theme: t,
  labelAsFormControl: o
}) => o ? l({ $theme: t }) : t.typography.ParagraphSmall, s = ({
  $isFocused: t,
  $isHovered: o,
  $theme: r
}) => ({
  borderRadius: e,
  borderWidth: e,
  height: i,
  width: i,
  ...o && !t && {
    outline: `${r.colors.neutralWashed} solid 6px`
  },
  ...t && {
    outline: `${r.colors.brand} solid 2px`,
    outlineOffset: "3px"
  }
}), C = ({
  dataTestId: t,
  labelAsFormControl: o,
  overrides: r
}) => ({
  Label: {
    style: ({ $theme: a, $labelPlacement: p }) => ({
      ...m({ $theme: a, labelAsFormControl: o }),
      margin: 0,
      wordBreak: "break-word",
      ...p === "right" && { paddingLeft: "10px" },
      ...p === "left" && { paddingRight: "10px" }
    }),
    ...r.Label
  },
  Checkmark: {
    style: s,
    props: {
      "data-testid": `${t}--checkmark`
    },
    ...r.Checkmark
  },
  Root: {
    props: {
      "data-testid": t
    },
    style: {
      alignItems: "center"
    },
    ...r.Root
  },
  Input: {
    props: {
      "data-testid": `${t}--input`
    }
  }
});
export {
  C as checkboxOverridesStyles,
  s as checkmarkStyleOverrides
};
//# sourceMappingURL=checkbox.styles.js.map
