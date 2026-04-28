import { jsxs as se, jsx as P } from "react/jsx-runtime";
import { useState as O, useRef as ae } from "react";
import { useMessageComposer as ie } from "../../../hooks/use-message-composer/use-message-composer.hook.js";
import { noop as a } from "../../../utils/noop.js";
import { getOverride as i, getOverrideProps as c } from "../../../utils/overrides.utils.js";
import { useCss as ce } from "../../utils/hooks/use-css.js";
import { useHtmlSelection as le } from "../hooks/use-html-selection.js";
import { MentionsPopover as ue } from "../mentions-popover/mentions-popover.js";
import { DefaultComposerTextareaContainer as pe } from "./containers/default-composer-textarea-container/default-composer-textarea-container.js";
import { StyledRoot as me, styles as fe } from "./message-composer.styles.js";
import { mentionCharacterWrapper as w, getUserMentionHtmlString as de, mentionCharacter as l, mentionTrigger as he, newMentionCharacterTypedRegex as ge } from "./user-mention.js";
const we = ({
  "data-testid": u = "message-composer",
  $maxHeight: y,
  isDisabled: $ = !1,
  isEditing: p = !1,
  isLoading: U = !1,
  isMentionable: m = !1,
  maxCharacters: I = 2048,
  overrides: D = {},
  placeholder: E,
  startEnhancer: j,
  users: K = [],
  value: V = "",
  onCancel: W = a,
  onCreate: _ = a,
  onUpdate: B = a,
  onChange: F = a
}) => {
  var H;
  const {
    MentionsPopover: f,
    Root: d,
    Textarea: h
  } = D, N = i(f) || ue, b = i(d) || me, k = i(h) || pe, { userMentionStyles: g, theme: q } = ce(fe), [z, M] = O(!1), [x, A] = O(0), C = ae(null), {
    handleChange: T,
    handleKeyDown: G,
    handlePaste: J,
    handleCreate: Q,
    textareaRef: e,
    value: v
  } = ie({
    defaultValue: V,
    maxLength: I,
    onChange: F,
    onCreate: _
  }), { selectionRange: X, updateSelection: Y, setSelectionOffset: Z, addSelectionListenersByClassName: ee } = le(e.current);
  function te(t) {
    if (e.current) {
      const r = v.split(l).length, s = t.currentTarget.innerHTML.split(l).length > r;
      if (T(e.current.innerHTML), m && s) {
        Y(e.current);
        const n = e.current.innerHTML[0] === l;
        if (e.current.innerHTML.match(new RegExp(he(n), "i"))) {
          M(!0);
          const R = x + 1;
          e.current.innerHTML = e.current.innerHTML.replace(
            ge(n),
            (ne, S, oe) => oe ? `${S || ""}${w(
              R
            )}` : ne
          ), A(R);
        }
      }
    }
  }
  function L(t = 0, r = null, o = null) {
    const [s, n] = X;
    Z((r ?? s) + t, (o ?? n) + t + 1);
  }
  function re(t) {
    var r, o;
    if (e.current) {
      const s = ((r = e.current.textContent) == null ? void 0 : r.length) ?? 0;
      e.current.innerHTML = e.current.innerHTML.replace(
        w(x),
        de(t, g)
      );
      const n = ((o = e.current.textContent) == null ? void 0 : o.length) ?? 0;
      T(e.current.innerHTML), L(n - s + 1), ee(g);
    }
  }
  return /* @__PURE__ */ se(
    b,
    {
      $isEditing: p,
      ref: C,
      ...c(d),
      children: [
        m && /* @__PURE__ */ P(
          N,
          {
            dataTestId: `${u}__mentions-popover`,
            users: K,
            onUserSelected: re,
            isOpen: z,
            setIsOpen: M,
            width: `calc(${(H = C.current) == null ? void 0 : H.clientWidth}px - ${q.spacing.spacing2xs8})`,
            onEsc: () => L(1),
            ...c(f)
          }
        ),
        /* @__PURE__ */ P(
          k,
          {
            "data-testid": u,
            messageRef: e,
            localValue: v,
            placeholder: E,
            isLoading: U,
            isEditing: p,
            isDisabled: $,
            $maxHeight: y,
            startEnhancer: j,
            evaluateMention: te,
            onKeyDown: G,
            onPaste: J,
            onCreate: Q,
            onUpdate: B,
            onCancel: W,
            ...c(h)
          }
        )
      ]
    }
  );
};
export {
  we as MessageComposer
};
//# sourceMappingURL=message-composer.js.map
