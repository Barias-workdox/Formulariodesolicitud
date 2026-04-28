import { jsxs as E, jsx as s } from "react/jsx-runtime";
import { useRef as a, useState as N, useEffect as c } from "react";
import { useAutoAnimate as R } from "@formkit/auto-animate/react";
import { useIntersection as W } from "react-use";
import { getCustomScrollBarStyles as $ } from "../../../themes/custom-scroll-bar.js";
import { Spinner as B } from "../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { useCss as D } from "../../utils/hooks/use-css.js";
import { MessageEmptyState as I } from "../message-empty-state/message-empty-state.js";
import { EmptyMessagesWrapper as w } from "./message-list.styles.js";
const A = {
  listContainerStyles: (e, { direction: o, showBorder: t }) => ({
    display: "flex",
    flex: 1,
    flexDirection: o === "reverse" ? "column-reverse" : "column",
    overflowY: "auto",
    contentVisibility: "auto",
    ...$(e),
    ...t && { borderBottom: `1px solid ${e.colors.divisionLine}` }
  }),
  listStyles: (e, { direction: o }) => ({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: o === "reverse" ? "flex-end" : "flex-start"
  }),
  spinnerWrapperStyles: (e) => ({
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: `${e.spacing.spacing3xl} ${e.spacing.spacingXl}`
  })
}, O = ({
  isLoading: e,
  isSubmitting: o = !1,
  isPaginated: t = !1,
  setIsAnimated: u = () => {
  },
  isAnimated: i = !0,
  children: n,
  direction: y = "normal",
  showBorder: x = !0,
  onPageEnd: v = () => {
  },
  emptyMessage: S,
  overrides: g = {}
}) => {
  const r = a(null), [p, d] = N(!0), { listStyles: C, listContainerStyles: j, spinnerWrapperStyles: M } = D(A, {
    direction: y,
    showBorder: x
  }), f = a(null), l = W(f, {}), [b] = R(), { emptyMessageComponent: m } = g;
  return c(() => {
    r != null && r.current && (p ? d(!1) : (!t || i) && (r.current.scrollTo({ left: 0, top: r.current.scrollHeight, behavior: "smooth" }), u(!1)));
  }, [n == null ? void 0 : n.length, p, i, t]), c(() => {
    t && !e && (l != null && l.isIntersecting) && v();
  }, [l]), /* @__PURE__ */ E(
    "div",
    {
      ref: r,
      className: j,
      children: [
        n.length === 0 ? m !== void 0 ? /* @__PURE__ */ s(w, { children: m }) : /* @__PURE__ */ s(I, { emptyMessage: S }) : /* @__PURE__ */ s(
          "div",
          {
            ref: b,
            className: C,
            children: n
          }
        ),
        e && t && !o && /* @__PURE__ */ s(
          "div",
          {
            className: M,
            "data-testid": "spinner",
            children: /* @__PURE__ */ s(B, {})
          }
        ),
        t && /* @__PURE__ */ s("div", { ref: f })
      ]
    }
  );
};
export {
  O as MessageList
};
//# sourceMappingURL=message-list.js.map
