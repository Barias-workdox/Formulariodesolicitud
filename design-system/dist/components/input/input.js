import { jsx as p } from "react/jsx-runtime";
import { useMemo as y } from "react";
import { Close as b, Checkmark as C } from "@carbon/icons-react";
import { mergeOverrides as x } from "baseui";
import { StyledInput as I, StyledRoot as h, Input as v } from "baseui/input";
import { DEFAULT_FONT as k } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import { themedWithStyle as m, themedUseStyletron as B } from "../../themes/utilities.js";
import { ClearButton as R } from "../clear-button/clear-button.js";
import "react-router-dom";
import "baseui/toast";
import "../background-icon/background-icon.styles.js";
import "../notification/components/toast-close-icon/toast-close-icon.js";
import { getBottomBorderColor as z, getInputBaseOverrides as O } from "./input.styles.js";
const s = (o, r, t) => o === "white" || t ? r.colors.bgBase : r.colors.neutralBase, w = ({
  $isFocused: o,
  $error: r,
  $positive: t,
  $disabled: e,
  $theme: n,
  $kind: i,
  $isBorderless: l = !1,
  $adjoined: a
}) => ({
  paddingRight: a === "right" ? "10px" : void 0,
  borderWidth: "1px",
  borderRadius: "4px",
  backgroundColor: s(i, n, o),
  outline: "none",
  position: "relative",
  borderColor: z({
    $isFocused: o,
    $error: r,
    $positive: t,
    $disabled: e,
    $theme: n,
    $isBorderless: l
  })
}), P = ({
  $theme: o,
  $kind: r,
  $isBorderless: t,
  $readOnly: e = !1,
  $isFocused: n
}) => ({
  fontSize: t ? o.typography.ParagraphMedium.fontSize : o.typography.ParagraphSmall.fontSize,
  color: o.colors.neutralStrong,
  backgroundColor: s(r, o, n),
  padding: "10px",
  ...k,
  ":disabled": {
    backgroundColor: "transparent",
    color: e ? o.colors.neutralWashed : o.colors.neutralDepressed
  },
  ":-webkit-autofill": {
    boxShadow: `inset 0 0 0px 1000px ${s(r, o)}`
  }
}), T = m(
  I,
  ({ $kind: o, $theme: r, $isBorderless: t, $isFocused: e }) => P({ $theme: r, $kind: o, $isBorderless: t, $isFocused: e })
), V = m(
  h,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - Don't know how to set these types
  ({ $isFocused: o, $error: r, $positive: t, $kind: e, $disabled: n, $theme: i }) => w({ $isFocused: o, $error: r, $positive: t, $kind: e, $disabled: n, $theme: i })
);
function W({
  positive: o,
  error: r
}) {
  const [, t] = B();
  return r ? /* @__PURE__ */ p(
    b,
    {
      size: 20,
      color: t.colors.negative
    }
  ) : o ? /* @__PURE__ */ p(
    C,
    {
      size: 20,
      color: t.colors.positive
    }
  ) : null;
}
const X = ({
  "data-testid": o = "input",
  kind: r = "gray",
  id: t,
  name: e,
  endEnhancer: n,
  positive: i,
  error: l,
  type: a,
  overrides: u,
  isBorderless: c,
  onClear: d,
  ...g
}) => {
  const f = y(
    () => (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - badly typed library
      x(
        {
          ClearIcon: {
            component: (S) => /* @__PURE__ */ p(
              R,
              {
                ...S,
                onClick: d,
                "data-testid": `${o}__clear-button`
              }
            )
          },
          ...O(a, r, c, o)
        },
        u
      )
    ),
    [u, a, r, c, o, d]
  );
  return /* @__PURE__ */ p(
    v,
    {
      ...g,
      type: a,
      positive: i,
      error: l,
      id: t,
      name: e || t,
      endEnhancer: n || (i || l) && /* @__PURE__ */ p(
        W,
        {
          positive: i,
          error: l
        }
      ),
      overrides: f
    }
  );
};
export {
  X as Input,
  T as StyledInput,
  V as StyledRoot,
  P as getInputStyle,
  s as getKindBackgroundColor,
  w as getRootStyles
};
//# sourceMappingURL=input.js.map
