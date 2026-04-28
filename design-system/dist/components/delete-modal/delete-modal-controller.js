import { jsx as S } from "react/jsx-runtime";
import { useState as A, useEffect as f, useCallback as d } from "react";
import { DeleteModal as M } from "./delete-modal.js";
import { ALL_DELETE_MODAL_STATUSES as t, BEGIN_DELETION_FADE_TIME as I } from "./delete-modal.constants.js";
const N = ({
  "data-testid": E = "delete-modal",
  confirmText: i = "",
  startingText: u = "",
  disclaimerText: c = void 0,
  isOpen: o = !1,
  isLoading: r = !1,
  variant: l = "stepped",
  onConfirm: e,
  onClose: m,
  deleteItemsCount: p = 1,
  zIndex: T
}) => {
  const [s, a] = A(t.confirm);
  f(() => {
    s === t.in_progress && !r && m(s);
  }, [r, m, s]);
  const _ = d(() => {
    setTimeout(() => {
      e(), a(t.in_progress);
    }, I);
  }, [e]), D = d(() => {
    l === "simple" && e(), a(t.starting);
  }, [e, l]);
  return f(() => {
    o || a(t.confirm);
  }, [o]), /* @__PURE__ */ S(
    M,
    {
      status: s,
      onConfirm: D,
      onTimeout: _,
      onClose: m,
      confirmText: i,
      startingText: u,
      disclaimerText: c,
      isOpen: o,
      isLoading: r,
      "data-testid": E,
      deleteItemsCount: p,
      variant: l,
      zIndex: T
    }
  );
};
export {
  N as DeleteModalController
};
//# sourceMappingURL=delete-modal-controller.js.map
