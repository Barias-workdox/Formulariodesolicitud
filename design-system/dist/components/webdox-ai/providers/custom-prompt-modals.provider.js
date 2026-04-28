import { jsxs as y, jsx as M } from "react/jsx-runtime";
import { useState as d, useCallback as a } from "react";
import "@carbon/icons-react";
import { CustomPromptAction as n } from "../constants/custom-prompt-modals.constants.js";
import "../constants/webdox-ai-regex.constants.js";
import { noop as O } from "../../../utils/noop.js";
import { CustomPromptModalsContext as b } from "../contexts/custom-prompt-modals.context.js";
import { CustomPromptFormModalContainer as j } from "../modals/custom-prompt-form-modal/custom-prompt-form-modal.container.js";
import { DeleteCustomPromptModal as D } from "../modals/delete-custom-prompt-modal/delete-custom-prompt-modal.js";
const J = ({
  children: h,
  isEditingDisabled: l = !1,
  onExecuteCustomPromptAction: r = O,
  zIndex: p
}) => {
  const [m, f] = d(), [e, u] = d(), [i, s] = d(!1), o = a(() => {
    i || (f(void 0), u(void 0));
  }, [i]), v = a(
    ({ kind: t, customPrompt: w }) => {
      l || (f(t), u(w));
    },
    [l]
  ), P = a(async () => {
    e && (s(!0), await r(n.Delete, e), s(!1), o());
  }, [o, r, e]), C = a(
    async (t) => {
      e && (s(!0), await r(n.Edit, {
        id: e.id,
        ...t
      }), s(!1), o());
    },
    [o, r, e]
  ), c = a(
    async (t) => {
      s(!0), await r(n.Create, t), s(!1), o();
    },
    [o, r]
  ), S = a(
    (t) => e ? C(t) : c(t),
    [c, C, e]
  );
  return /* @__PURE__ */ y(
    b.Provider,
    {
      value: {
        isEditingDisabled: l,
        openModal: v
      },
      children: [
        h,
        /* @__PURE__ */ M(
          D,
          {
            isOpen: m === n.Delete,
            onClose: o,
            isLoading: i,
            onSubmit: P,
            zIndex: p
          }
        ),
        /* @__PURE__ */ M(
          j,
          {
            isOpen: m === n.Create || m === n.Edit,
            customPrompt: e,
            onClose: o,
            onSubmit: S,
            zIndex: p
          }
        )
      ]
    }
  );
};
export {
  J as CustomPromptModalsProvider
};
//# sourceMappingURL=custom-prompt-modals.provider.js.map
