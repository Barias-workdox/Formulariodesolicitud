import { jsx as w } from "react/jsx-runtime";
import { useState as T, useRef as x, useMemo as y, useCallback as c } from "react";
import { useClickAway as K } from "react-use";
import { Input as V } from "../../input/next/input.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { mergeOverridesDeep as B } from "../../utils/baseui/helpers.js";
import { useSyncedRef as _ } from "../../../hooks/use-synced-ref.hook.js";
import { noop as C } from "../../../utils/noop.js";
import { InputControls as j } from "./components/input-controls/input-controls.js";
import { InlineEditInputMode as u } from "./inline-edit-input.interfaces.js";
import { getOverrides as F } from "./inline-edit-input.overrides.js";
const M = ({
  "data-testid": I,
  disabled: b,
  inputRef: N,
  kind: P,
  mode: h,
  onChange: E = C,
  onModeChange: r = C,
  overrides: O,
  readOnly: a,
  value: s,
  zIndex: g,
  ...v
}) => {
  const [o, m] = T(s), e = _({ externalRef: N }), i = x(), p = h === u.CAPTION, A = p ? P : "white", l = o === s, D = y(() => {
    const t = F({ rootRef: i });
    return B(t, O);
  }, [O]);
  K(e, (t) => {
    const n = (i == null ? void 0 : i.current) && i.current.contains(t.target);
    l && !n && r(u.CAPTION);
  });
  const k = c(() => {
    if (!(!p || a) && (m(s), r(u.INPUT), e.current)) {
      const t = e.current;
      t.focus();
      const { length: n } = t.value;
      t.setSelectionRange(n, n);
    }
  }, [e, p, r, a, s]), f = c(() => {
    var t;
    m(s), r(u.CAPTION), (t = e.current) == null || t.blur();
  }, [e, r, s]), d = c(() => {
    var n;
    if (l)
      return;
    const t = {
      target: { value: o },
      currentTarget: { value: o }
    };
    r(u.CAPTION), E(t), (n = e.current) == null || n.blur();
  }, [l, e, o, E, r]), R = c((t) => {
    const n = t.target.value;
    m(n);
  }, []), S = c(
    (t) => {
      switch (t.key) {
        case "Escape":
          f();
          break;
        case "Enter":
          t.preventDefault(), d();
          break;
      }
    },
    [f, d]
  );
  return /* @__PURE__ */ w(
    V,
    {
      ...v,
      "data-testid": I,
      disabled: b,
      readOnly: a,
      kind: A,
      inputRef: e,
      overrides: D,
      onFocus: k,
      onChange: R,
      clearable: !1,
      value: o,
      onKeyDown: S,
      endEnhancer: /* @__PURE__ */ w(
        j,
        {
          "data-testid": `${I}__controls`,
          disabled: b,
          submitDisabled: l,
          readOnly: a,
          mode: h,
          onEdit: k,
          onCancel: f,
          onSubmit: d,
          zIndex: g
        }
      )
    }
  );
};
export {
  M as InlineEditInput
};
//# sourceMappingURL=inline-edit-input.js.map
