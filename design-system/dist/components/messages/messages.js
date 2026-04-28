import { jsxs as E, jsx as a } from "react/jsx-runtime";
import { useState as y } from "react";
import { getOverride as i, getOverrideProps as m } from "../../utils/overrides.utils.js";
import { useCss as G } from "../utils/hooks/use-css.js";
import { MessageComposer as H } from "./message-composer/message-composer.js";
import "react-dom/server";
import { MessageItem as J } from "./message-item.js";
import { MessageList as K } from "./message-list/message-list.js";
import { getMessageBarColor as R } from "./utils/messages.utils.js";
import { cleanMentionsForPayload as W } from "./utils/user-mention.utils.js";
const X = {
  containerStyles: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: 1
  }
}, ie = ({
  "data-testid": n = "messages",
  isLoading: s,
  isMentionable: l = !1,
  isSubmitting: C = !1,
  isPaginated: v = !1,
  canCreate: h = !0,
  canUpdate: x = !1,
  canDelete: I = !1,
  currentUserId: t,
  messages: O = [],
  users: r = [],
  direction: c = "normal",
  showBorder: b = !0,
  emptyMessage: A,
  isInquiryLoading: S = !1,
  overrides: j = {},
  barColors: w,
  onCreate: D = async () => {
  },
  onUpdate: L = async () => {
  },
  onDelete: P = () => {
  },
  onPageEnd: V = () => {
  },
  onInquiryClick: $ = () => {
  }
}) => {
  const {
    MessageComposer: p,
    MessageList: d,
    MessageItem: f
  } = j, k = i(p) || H, B = i(d) || K, F = i(f) || J, [N, u] = y(""), [Q, g] = y(!1), { containerStyles: T } = G(X);
  async function q(e) {
    u(e);
    const { isSuccess: o } = await D(W(e, r));
    o && (u(""), g(!0));
  }
  return /* @__PURE__ */ E("div", { className: T, children: [
    /* @__PURE__ */ a(
      B,
      {
        isLoading: s,
        isSubmitting: C,
        isAnimated: Q,
        setIsAnimated: g,
        isPaginated: v,
        direction: c,
        showBorder: b,
        onPageEnd: V,
        emptyMessage: A,
        ...m(d),
        children: O.map((e) => {
          const {
            id: o,
            author: { id: M } = {},
            type: z
          } = e;
          return /* @__PURE__ */ a(
            F,
            {
              dataTestId: `${n}-${e.id}`,
              isLoading: s,
              isMentionable: l,
              canUpdate: x,
              canDelete: I,
              currentUserId: t,
              users: r,
              direction: c,
              message: e,
              barColor: R({
                authorId: M,
                currentUserId: t,
                type: z,
                barsOverrides: w
              }),
              labelColor: M === t ? "brandMedium" : "warningMedium",
              onUpdate: L,
              onDelete: P,
              onInquiryClick: $,
              isInquiryLoading: S,
              ...m(f)
            },
            o
          );
        })
      }
    ),
    h && /* @__PURE__ */ a(
      k,
      {
        "data-testid": n,
        isDisabled: s,
        isLoading: s,
        isMentionable: l,
        users: r,
        value: N,
        onCreate: q,
        enableQuickActions: !0,
        ...m(p)
      }
    )
  ] });
};
export {
  ie as Messages
};
//# sourceMappingURL=messages.js.map
