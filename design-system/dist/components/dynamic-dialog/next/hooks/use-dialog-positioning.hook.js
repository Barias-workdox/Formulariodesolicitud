import { useMemo as $ } from "react";
import { PLACEMENT_MARGIN as a } from "../../../../constants/placement.constants.js";
const m = ({
  placement: c,
  width: o,
  height: p,
  fullViewport: r,
  isMobile: x
}) => $(() => {
  if (r || x)
    return {};
  const t = a;
  switch (c) {
    case "topLeft":
      return {
        top: t,
        left: t,
        right: `calc(100vw - ${o}px - ${t}px)`,
        bottom: `calc(100vh - ${p}px - ${t}px)`
      };
    case "topRight":
      return {
        top: t,
        right: t,
        left: `calc(100vw - ${o}px - ${t}px)`,
        bottom: `calc(100vh - ${p}px - ${t}px)`
      };
    case "bottomLeft":
      return {
        bottom: t,
        left: t,
        top: `calc(100vh - ${p}px - ${t}px)`,
        right: `calc(100vw - ${o}px - ${t}px)`
      };
    case "bottomRight":
      return {
        bottom: t,
        right: t,
        top: `calc(100vh - ${p}px - ${t}px)`,
        left: `calc(100vw - ${o}px - ${t}px)`
      };
    default:
      return {
        bottom: t,
        right: t,
        top: `calc(100vh - ${p}px - ${t}px)`,
        left: `calc(100vw - ${o}px - ${t}px)`
      };
  }
}, [c, o, p, r, x]);
export {
  m as useDialogPositioning
};
//# sourceMappingURL=use-dialog-positioning.hook.js.map
