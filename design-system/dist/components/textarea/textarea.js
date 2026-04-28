import { jsx as m } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { mergeOverrides as l } from "baseui";
import { Textarea as x } from "baseui/textarea";
import { getKindBackgroundColor as i, getRootStyles as f } from "../input/input.js";
const u = ({
  kind: t,
  isBorderless: e,
  resize: r,
  dataTestId: a
}) => ({
  Root: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - incorrectly typed base web component
    style: ({ $isFocused: o, $error: p, $positive: d, $disabled: n, $theme: g }) => f({
      $isFocused: o,
      $error: p,
      $positive: d,
      $kind: t,
      $disabled: n,
      $theme: g,
      $isBorderless: e
    })
  },
  Input: {
    props: {
      ...a && { "data-testid": a }
    },
    style: ({ $theme: o }) => ({
      ...o.typography.ParagraphSmall,
      backgroundColor: i(t, o),
      paddingTop: "12px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "12px",
      ":disabled": {
        backgroundColor: i(t, o)
      },
      ...r !== void 0 && {
        width: "100vw",
        // fill all available space up to parent max-width
        resize: r
      }
    })
  },
  InputContainer: {
    style: {
      ...r !== void 0 && {
        maxWidth: "100%",
        width: "min-content"
      }
    }
  }
});
function b({
  kind: t = "gray",
  isBorderless: e = !1,
  resize: r,
  "data-testid": a,
  overrides: o,
  ...p
}) {
  const d = s(
    () => l(u({ kind: t, isBorderless: e, resize: r, dataTestId: a }), o),
    [t, e, r, a, o]
  );
  return /* @__PURE__ */ m(
    x,
    {
      ...p,
      overrides: d
    }
  );
}
export {
  b as Textarea
};
//# sourceMappingURL=textarea.js.map
