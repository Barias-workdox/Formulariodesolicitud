import { jsxs as B, jsx as a } from "react/jsx-runtime";
import "react";
import "../../../../message-box/components/expand-button/styled-components/styled-button.js";
import { MessageBoxTextarea as S } from "../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import { useCss as j } from "../../../../utils/hooks/use-css.js";
import { styles as y } from "../../common/composer-textarea-container/composer-textarea-container.styles.js";
import { DefaultComposerSubmitButton as D } from "./components/default-compose-submit-button/default-compose-submit-button.js";
import { messageBoxTextareaOverrides as T } from "./default-composer-textarea-container.overrides.js";
const k = ({
  "data-testid": r,
  messageRef: e,
  localValue: o,
  placeholder: i,
  isEditing: s,
  isDisabled: t,
  isLoading: p,
  $minHeight: n,
  $maxHeight: x,
  evaluateMention: d,
  onKeyDown: u,
  onPaste: f,
  onCreate: c,
  onUpdate: l,
  onCancel: C
}) => {
  var m;
  const { composerWrapperStyles: v } = j(y, {
    isEditing: s,
    isDisabled: t,
    $minHeight: n,
    $maxHeight: x
  }), b = !((m = e.current) != null && m.textContent) || t;
  return /* @__PURE__ */ B("div", { className: v, children: [
    /* @__PURE__ */ a(
      S,
      {
        "data-testid": `${r}__textarea`,
        placeholder: i,
        ref: e,
        disabled: t,
        value: o,
        overrides: T,
        onInput: d,
        onKeyDown: u,
        onPaste: f
      }
    ),
    /* @__PURE__ */ a(
      D,
      {
        "data-testid": r,
        isEditing: s,
        isLoading: p,
        isDisabled: b,
        localValue: o,
        onCreate: c,
        onUpdate: l,
        onCancel: C
      }
    )
  ] });
};
export {
  k as DefaultComposerTextareaContainer
};
//# sourceMappingURL=default-composer-textarea-container.js.map
