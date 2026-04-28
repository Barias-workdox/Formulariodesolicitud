import { jsx as L } from "react/jsx-runtime";
import { useCallback as U, useMemo as _ } from "react";
import { mergeOverrides as b } from "baseui";
import { Input as j } from "baseui/input";
import { useSyncedRef as B } from "../../../hooks/use-synced-ref.hook.js";
import { noop as K } from "../../../utils/noop.js";
import { withIsHovered as M } from "../../hocs/with-is-hovered.js";
import { useCompoundEndEnhancer as N } from "./hooks/use-compound-end-enhancer.hook.js";
import { useCompoundStartEnhancer as T } from "./hooks/use-compound-start-enhancer.hook.js";
import { DEFAULT_SIZE as Z, DEFAULT_KIND as $ } from "./input.constants.js";
import { getInputBaseOverrides as k } from "./input.overrides.js";
const q = ({
  "data-testid": e,
  kind: m = $,
  id: a,
  name: l,
  endEnhancer: d,
  positive: c,
  error: s,
  size: n = Z,
  overrides: p,
  isHovered: u,
  clearable: v = !0,
  value: f,
  showCopyContentButton: I = !1,
  onClear: E = K,
  isLoading: S,
  inputRef: g,
  startEnhancer: R,
  disabled: i,
  leading: w,
  prefixText: x = "",
  width: h,
  onChange: t,
  ...y
}) => {
  const r = B({ externalRef: g }), D = U(() => {
    E(), t && t({
      target: { value: "" },
      currentTarget: { value: "" }
    }), r.current && r.current.focus();
  }, [E, t, r]), { getStartEnhancerElement: O, showStartEnhancer: o } = T({
    leading: w,
    prefixText: x,
    size: n,
    startEnhancer: R
  }), { showEndEnhancer: A, getEndEnhancerElement: C } = N({
    "data-testid": e,
    endEnhancer: d,
    value: f,
    clearable: v,
    disabled: i,
    showCopyContentButton: I,
    onClear: D,
    error: s,
    isLoading: S,
    positive: c
  }), F = _(
    () => b(
      k({
        kind: m,
        size: n,
        isHovered: u,
        dataTestId: e,
        withStartEnhancer: o,
        width: h
      }),
      p
    ),
    [m, n, u, e, o, h, p]
  );
  return /* @__PURE__ */ L(
    j,
    {
      ...y,
      onChange: t,
      disabled: i,
      inputRef: r,
      value: f,
      positive: c,
      error: s,
      id: a,
      name: l || a,
      clearable: !1,
      startEnhancer: o ? O : void 0,
      endEnhancer: A ? C : void 0,
      overrides: F
    }
  );
}, et = M(q);
export {
  et as Input
};
//# sourceMappingURL=input.js.map
