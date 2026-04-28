import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { CharacterLowerCase as d } from "@carbon/icons-react";
import { StyledContainer as s } from "./group-condition-field-label.styles.js";
const l = ({
  "data-testid": t,
  option: { id: o, label: r = "", dataType: i = "string", Icon: e = d }
}) => /* @__PURE__ */ n(s, { children: [
  /* @__PURE__ */ a(e, { "data-testid": `${t}-option-${o}-icon-${i}` }),
  r
] });
export {
  l as GroupConditionFieldLabel
};
//# sourceMappingURL=group-condition-field-label.js.map
