import { jsx as t } from "react/jsx-runtime";
import { Text as p } from "../../../text/text.js";
const s = ({
  description: r,
  variant: o = "16px",
  disabled: e = !1,
  ariaDescribedBy: i
}) => /* @__PURE__ */ t(
  p,
  {
    variant: o === "14px" ? "microCopy" : "bodySmall",
    margin: 0,
    color: e ? "neutralDepressed" : "neutral",
    overrides: { Block: { props: { id: i } } },
    children: r
  }
);
export {
  s as SwitchDescription
};
//# sourceMappingURL=switch-description.js.map
