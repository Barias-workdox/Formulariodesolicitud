import { useRef as r, useCallback as o, useEffect as i } from "react";
const c = ({
  fullViewport: l
}) => {
  const t = r(null), s = o(() => {
    if (t.current) {
      const e = t.current;
      e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.zIndex = "9999", e.style.margin = "0", e.style.transform = "none";
    }
  }, []), n = o(() => {
    if (t.current) {
      const e = t.current;
      e.style.position = "", e.style.top = "", e.style.left = "", e.style.width = "", e.style.height = "", e.style.zIndex = "", e.style.margin = "", e.style.transform = "";
    }
  }, []);
  return i(() => {
    l ? s() : n();
  }, [l, s, n]), {
    containerRef: t
  };
};
export {
  c as useDialogFullViewport
};
//# sourceMappingURL=use-dialog-fullviewport.hook.js.map
