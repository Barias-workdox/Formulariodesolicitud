import { jsx as i } from "react/jsx-runtime";
import { mergeOverridesDeep as l } from "../../../../utils/baseui/helpers.js";
import { useStyleOverrides as a } from "../../../../utils/hooks/use-css.js";
import { stylesOverrides as n } from "../../common/composer-textarea-container/composer-textarea-container.styles.js";
const W = ({
  isEditing: r,
  isDisabled: e,
  $maxHeight: s,
  overrides: { ComposerWrapper: o } = {},
  children: p
}) => {
  const { ComposerWrapper: m } = l(n, {
    ComposerWrapper: o
  }), { composerWrapperStyles: t } = a({
    $styles: {
      composerWrapperStyles: m.style
    },
    isEditing: r,
    isDisabled: e,
    $minHeight: "38px",
    $maxHeight: s
  });
  return /* @__PURE__ */ i("div", { className: t, children: p });
};
export {
  W as InlineComposerWrapper
};
//# sourceMappingURL=inline-composer-wrapper.js.map
