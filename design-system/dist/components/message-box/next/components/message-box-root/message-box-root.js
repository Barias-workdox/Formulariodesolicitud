import { jsx as i, jsxs as h } from "react/jsx-runtime";
import { useRef as n, useMemo as R, Fragment as M } from "react";
import { useClickAway as $ } from "react-use";
import { useMessageBoxContext as j } from "../../hooks/use-message-box-context.hook.js";
import "@tiptap/react";
import { StyledRoot as p } from "../../styled-components/styled-root.js";
import "../../styled-components/styled-message-box-container.js";
import "../../styled-components/styled-textarea-container.js";
import "../../styled-components/styled-addons-container.js";
const I = ({
  children: s,
  margin: a,
  maxHeight: f,
  width: x,
  plugins: e
}) => {
  const { textValue: t, setIsFocused: c } = j(), r = n(null);
  $(r, () => {
    c(!1);
  });
  const d = R(
    () => e == null ? void 0 : e.map((o) => {
      var m;
      return /* @__PURE__ */ i(M, { children: (m = o.render) == null ? void 0 : m.call(o, { textValue: t }) }, o.name);
    }),
    [e, t]
  );
  return /* @__PURE__ */ h(
    p,
    {
      $maxHeight: f,
      $width: x,
      $margin: a,
      ref: r,
      children: [
        d,
        s
      ]
    }
  );
};
export {
  I as MessageBoxRoot
};
//# sourceMappingURL=message-box-root.js.map
