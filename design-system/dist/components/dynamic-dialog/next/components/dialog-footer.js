import { jsx as i } from "react/jsx-runtime";
import { StyledDialogFooter as a } from "./styled-components.js";
const n = ({
  dataTestId: o = "dynamic-dialog-footer",
  children: t,
  className: r,
  visible: e = !0
}) => e ? /* @__PURE__ */ i(
  a,
  {
    "data-testid": o,
    className: r,
    children: t
  }
) : null;
export {
  n as DynamicDialogFooter
};
//# sourceMappingURL=dialog-footer.js.map
