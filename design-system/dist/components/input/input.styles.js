import { getRootStyles as s, StyledInput as l } from "./input.js";
const c = ({
  $isFocused: r,
  $positive: o,
  $error: n,
  $disabled: a,
  $theme: t,
  $isBorderless: e
}) => a ? t.colors.neutralSubtle : n ? t.colors.negativeSubdued : r ? t.colors.neutralStrong : o ? t.colors.positiveSubdued : e ? "transparent" : t.colors.neutralWashed, f = (r, o, n, a) => ({
  StartEnhancer: {
    style: {
      backgroundColor: "transparent",
      padding: n ? 0 : void 0
    }
  },
  EndEnhancer: {
    style: {
      backgroundColor: "transparent",
      paddingLeft: n ? 0 : void 0,
      paddingRight: 0,
      ...r === "password" && { display: "none" }
    }
  },
  Input: {
    component: l,
    props: {
      "data-testid": a,
      $kind: o,
      $isBorderless: n
    }
  },
  InputContainer: {
    style: {
      backgroundColor: "transparent"
    }
  },
  Root: {
    style: ({
      $isFocused: t,
      $error: e,
      $positive: d,
      $disabled: u,
      $adjoined: p,
      $theme: i
    }) => ({
      ...s({
        $isFocused: t,
        $error: e,
        $positive: d,
        $kind: o,
        $disabled: u,
        $theme: i,
        $isBorderless: n,
        $adjoined: p
      }),
      ...r === "password" && { paddingRight: 0 }
    })
  }
});
export {
  c as getBottomBorderColor,
  f as getInputBaseOverrides
};
//# sourceMappingURL=input.styles.js.map
