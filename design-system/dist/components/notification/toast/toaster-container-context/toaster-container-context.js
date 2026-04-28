import { jsxs as E, jsx as S } from "react/jsx-runtime";
import { createContext as b, useState as v, useCallback as r } from "react";
import { PLACEMENT as p, toaster as l } from "baseui/toast";
import { DEFAULT_TOAST_DURATION_MS as I } from "../toast.constants.js";
import { ToasterContainer as M } from "../toaster-container.js";
const N = () => b(null), d = {
  placement: p.bottomRight,
  marginX: 0,
  marginY: 0,
  width: void 0,
  duration: I
}, O = ({
  children: f,
  toasterContext: C
}) => {
  const [{ marginX: n, marginY: i, placement: c, zIndex: T, width: m, duration: u }, g] = v(d), [s, a] = v({
    activeToasts: [],
    maxToasts: 3
  }), h = (o) => g({
    ...d,
    ...o
  }), P = r(async () => {
    if (s.activeToasts.length >= s.maxToasts) {
      const [e] = s.activeToasts;
      e && (l.clear(e), a((t) => ({
        ...t,
        activeToasts: t.activeToasts.slice(1)
        // Remove first (oldest)
      })), await new Promise((t) => setTimeout(t, 150)));
    }
    return !0;
  }, [s.activeToasts, s.maxToasts]), x = r((o) => {
    a((e) => ({
      ...e,
      activeToasts: [...e.activeToasts, o]
    }));
  }, []), w = r((o) => {
    a((e) => ({
      ...e,
      activeToasts: e.activeToasts.filter((t) => t !== o)
    }));
  }, []), R = r((o) => {
    a((e) => {
      const t = { ...e, maxToasts: o };
      return t.activeToasts.length > o && (t.activeToasts.slice(
        0,
        t.activeToasts.length - o
      ).forEach((A) => {
        setTimeout(() => {
          l.clear(A);
        }, 0);
      }), t.activeToasts = t.activeToasts.slice(-o)), t;
    });
  }, []);
  return /* @__PURE__ */ E(
    C.Provider,
    {
      value: {
        toasterContainerProps: {
          marginX: n,
          marginY: i,
          placement: c,
          zIndex: T,
          width: m,
          duration: u
        },
        updateToasterContainerProps: h,
        toastManager: s,
        canShowToast: P,
        addToastToQueue: x,
        removeToastFromQueue: w,
        updateMaxToasts: R
      },
      children: [
        /* @__PURE__ */ S(
          M,
          {
            placement: c ?? p.bottomRight,
            zIndex: T ?? 1e3,
            marginX: n,
            marginY: i,
            width: m,
            duration: u
          }
        ),
        f
      ]
    }
  );
};
export {
  O as ToasterContainerProvider,
  N as getToasterContainerContext
};
//# sourceMappingURL=toaster-container-context.js.map
