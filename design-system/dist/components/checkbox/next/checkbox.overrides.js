import { DEFAULT_DATA_TEST_ID as c, DEFAULT_SIZE as u } from "./checkbox.constants.js";
import { getLabelStyles as n, getCheckmarkStyles as f, getRootStyles as k } from "./checkbox.styles.js";
const S = ({
  size: o = u,
  isHovered: r,
  checked: a,
  indeterminate: d = !1,
  disabled: s = !1,
  error: t = !1,
  dataTestId: i = c,
  onMouseEnter: l,
  onMouseLeave: $
}) => ({
  Root: {
    style: (e) => k({
      ...e,
      $disabled: s,
      $isFocused: e.$isFocused || !1
    }),
    props: {
      "data-testid": i,
      onMouseEnter: l,
      onMouseLeave: $
    }
  },
  Checkmark: {
    style: (e) => f({
      ...e,
      $size: o,
      $isHovered: r,
      $checked: a,
      $indeterminate: d,
      $disabled: s,
      $error: t,
      $isFocused: e.$isFocused || !1
    }),
    props: {
      "data-testid": `${i}--checkmark`
    }
  },
  Label: {
    style: (e) => n({
      ...e,
      $size: o,
      $disabled: s,
      $error: t,
      $isFocused: e.$isFocused || !1
    })
  },
  Input: {
    props: {
      "data-testid": `${i}--input`,
      "aria-invalid": t ? "true" : void 0,
      "aria-required": void 0
    }
  }
});
export {
  S as getCheckboxBaseOverrides
};
//# sourceMappingURL=checkbox.overrides.js.map
