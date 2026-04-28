import { jsxs as S, jsx as e } from "react/jsx-runtime";
import { SendAlt as b } from "@carbon/icons-react";
import { getOverrides as g } from "baseui";
import { IconButton as h } from "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useStyleOverrides as $ } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import { mergeOverridesDeep as j } from "../../../../utils/baseui/helpers.js";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { stylesOverrides as k } from "../../common/composer-textarea-container/composer-textarea-container.styles.js";
const K = ({
  "data-testid": i,
  messageRef: n,
  localValue: s,
  isEditing: m,
  isDisabled: t,
  isLoading: p,
  $maxHeight: d,
  overrides: { Container: c, SendButton: l } = {},
  startEnhancer: a,
  children: u,
  onCreate: r = () => {
  }
}) => {
  var o;
  const { Container: f } = j(k, { Container: c }), { containerStyles: v } = $({
    $styles: { containerStyles: f.style },
    isEditing: m,
    isDisabled: t,
    $minHeight: "38px",
    $maxHeight: d
  }), [y, C] = g(l, h), x = !((o = n.current) != null && o.textContent) || t, O = {
    isLoading: p,
    disabled: x,
    onClick: () => {
      r && r(s);
    },
    children: /* @__PURE__ */ e(b, { size: 24 })
  };
  return /* @__PURE__ */ S("div", { className: v, children: [
    a,
    u,
    /* @__PURE__ */ e(
      y,
      {
        kind: "primary",
        "data-testid": `${i}__button`,
        ...O,
        ...C
      }
    )
  ] });
};
export {
  K as InlineComposerContainer
};
//# sourceMappingURL=inline-composer-container.js.map
