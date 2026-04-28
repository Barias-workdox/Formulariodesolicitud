import { jsx as n } from "react/jsx-runtime";
import { Link as o } from "react-router-dom";
import { useCss as r } from "../../../utils/hooks/use-css.js";
import { styles as i } from "./enhanced-empty-state-link.styles.js";
const d = ({
  dataTestId: t = "enhanced-empty-state__link",
  children: e,
  ...s
}) => {
  const { linkStyles: m } = r(i);
  return /* @__PURE__ */ n(
    o,
    {
      "data-testid": t,
      ...s,
      className: m,
      children: e
    }
  );
};
export {
  d as EnhancedEmptyStateLink
};
//# sourceMappingURL=enhanced-empty-state-link.js.map
