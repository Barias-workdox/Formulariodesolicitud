import { useMemo as m } from "react";
import { useDialogPositioning as y } from "./use-dialog-positioning.hook.js";
const D = ({
  width: n,
  height: o,
  maxWidth: t,
  maxHeight: e,
  placement: u,
  fullViewport: r,
  isMobile: s
}) => {
  const c = y({
    placement: u,
    width: n,
    height: o,
    fullViewport: r,
    isMobile: s
  });
  return m(() => r || s ? {} : {
    width: n,
    height: o,
    maxWidth: t,
    maxHeight: e,
    ...c
  }, [n, o, t, e, c, r, s]);
};
export {
  D as useDialogStyles
};
//# sourceMappingURL=use-dialog-styles.hook.js.map
