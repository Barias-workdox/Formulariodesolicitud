import { useMemo as n } from "react";
const u = (e, o, s) => ({
  shouldShowResizeHandles: n(() => e && !o && !s, [e, o, s])
});
export {
  u as useDialogResize
};
//# sourceMappingURL=use-dialog-resize.hook.js.map
