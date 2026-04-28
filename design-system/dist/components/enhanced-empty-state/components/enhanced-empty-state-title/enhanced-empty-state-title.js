import { jsx as o } from "react/jsx-runtime";
import { Text as r } from "../../../text/text.js";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { styles as s } from "./enhanced-empty-state-title.styles.js";
const a = ({
  children: t
}) => {
  const { theme: e } = m();
  return /* @__PURE__ */ o(
    r,
    {
      variant: "h2",
      fontWeight: "500",
      $style: s.textStyles(e),
      children: t
    }
  );
};
export {
  a as EnhancedEmptyStateTitle
};
//# sourceMappingURL=enhanced-empty-state-title.js.map
