import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { StyledDefaultMessageLayout as i } from "./styled-components/styled-default-message-layout.js";
import { StyledPrimaryMessageLayout as y } from "./styled-components/styled-primary-message-layout.js";
import { StyledSecondaryMessageLayout as p } from "./styled-components/styled-secondary-message-layout.js";
import { StyledTertiaryMessageLayout as c } from "./styled-components/styled-tertiary-message-layout.js";
const l = {
  default: {
    Component: i
  },
  primary: {
    Component: y
  },
  secondary: {
    Component: p
  },
  tertiary: {
    Component: c
  }
}, L = ({
  children: o,
  footer: e,
  header: r,
  kind: n,
  maxWidth: s
}) => {
  const { Component: a } = l[n];
  return /* @__PURE__ */ m(a, { $maxWidth: s, children: [
    r && /* @__PURE__ */ t("section", { children: r }),
    o && /* @__PURE__ */ t("section", { children: o }),
    e && /* @__PURE__ */ t("section", { children: e })
  ] });
};
export {
  L as ChatMessageLayout
};
//# sourceMappingURL=chat-message-layout.js.map
