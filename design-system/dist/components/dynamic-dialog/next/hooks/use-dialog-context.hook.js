import { useMemo as e } from "react";
const k = ({
  fullViewport: t,
  closable: n,
  draggable: o,
  resizable: x,
  isMobile: m,
  toggleFullViewport: u,
  close: c,
  handleDragStart: C
}) => e(
  () => ({
    fullViewport: t,
    closable: n,
    draggable: o,
    resizable: x,
    toggleFullViewport: u,
    close: c,
    isMobile: m,
    handleDragStart: C
  }),
  [
    t,
    n,
    o,
    x,
    u,
    c,
    m,
    C
  ]
);
export {
  k as useDialogContext
};
//# sourceMappingURL=use-dialog-context.hook.js.map
