import { jsx as R } from "react/jsx-runtime";
import { forwardRef as b, useRef as f, useMemo as w, useCallback as x, useEffect as y } from "react";
import { Datepicker as L } from "baseui/datepicker";
import { parse as $, isValid as h } from "date-fns";
import { mergeOverridesDeep as j } from "../utils/baseui/helpers.js";
import { getDatepickerOverrides as C } from "./datepicker.overrides.js";
const I = b(function({
  "data-testid": m = "datepicker",
  kind: d = "gray",
  maxDate: l = /* @__PURE__ */ new Date("2071-01-01"),
  enableInputBlur: i = !0,
  zIndex: v,
  overrides: a,
  onChange: r,
  ...o
}, D) {
  const s = f(), c = f(null), { formatString: p = "" } = o, u = C({ ref: D, inputRef: c, dataTestId: m, zIndex: v, $kind: d }), k = w(
    () => j(u, a),
    [u, a]
  ), t = x(
    (e) => {
      const { value: n } = e.target, O = s.current;
      if (n) {
        const E = $(
          n.replace(/\D/g, "-"),
          p.replace(/\W/g, "-"),
          /* @__PURE__ */ new Date()
        );
        (n === "" || O != null && !h(E)) && r({ date: void 0 });
      }
    },
    [p, r]
  );
  y(() => {
    const e = c.current;
    if (i && e)
      return e.addEventListener("blur", t), () => {
        e.removeEventListener("blur", t);
      };
  }, [i, t]);
  function g(e) {
    s.current = e.date, r(e);
  }
  return /* @__PURE__ */ R(
    L,
    {
      maxDate: l,
      onChange: g,
      overrides: k,
      ...o
    }
  );
});
I.displayName = "Datepicker";
export {
  I as Datepicker
};
//# sourceMappingURL=datepicker.js.map
