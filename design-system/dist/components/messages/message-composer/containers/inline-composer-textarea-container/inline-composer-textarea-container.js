import { jsx as r } from "react/jsx-runtime";
import { ComposerTextarea as p } from "../../common/composer-textarea/composer-textarea.js";
import { InlineComposerContainer as l } from "./inline-composer-container.js";
import { InlineComposerWrapper as c } from "./inline-composer-wrapper.js";
const $ = ({
  "data-testid": o,
  placeholder: i,
  evaluateMention: n,
  onKeyDown: t,
  onPaste: a,
  ...e
}) => {
  const { isDisabled: m, messageRef: s, overrides: d } = e;
  return /* @__PURE__ */ r(
    l,
    {
      "data-testid": `${o}__inline-composer-container`,
      ...e,
      children: /* @__PURE__ */ r(c, { ...e, children: /* @__PURE__ */ r(
        p,
        {
          "data-testid": `${o}__inline-composer-textarea`,
          placeholder: i,
          messageRef: s,
          isDisabled: m,
          onKeyDown: t,
          $padding: "0 1rem",
          evaluateMention: n,
          onPaste: a,
          overrides: d
        }
      ) })
    }
  );
};
export {
  $ as InlineComposerTextareaContainer
};
//# sourceMappingURL=inline-composer-textarea-container.js.map
