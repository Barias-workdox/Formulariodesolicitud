import { useState as b, useCallback as a } from "react";
const p = ({
  fullViewport: c,
  onClose: t,
  onFullViewportChange: s
}) => {
  const [i, r] = b(!1), m = c ?? i, u = a(() => {
    t == null || t();
  }, [t]), S = a(
    (f) => {
      c === void 0 && r(f), s == null || s(f);
    },
    [c, s]
  );
  return {
    fullViewport: m,
    close: u,
    updateFullViewport: S
  };
};
export {
  p as useDialogState
};
//# sourceMappingURL=use-dialog-state.hook.js.map
