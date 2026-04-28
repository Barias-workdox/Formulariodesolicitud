import { jsx as o } from "react/jsx-runtime";
import { Text as e } from "../../../text/text.js";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { styles as s } from "./enhanced-empty-state-paragraph.styles.js";
const i = ({
  children: r
}) => {
  const { theme: t } = m();
  return /* @__PURE__ */ o(
    e,
    {
      variant: "bodySmall",
      color: t.colors.neutralSubdued,
      margin: 0,
      $style: s.textStyles(t),
      children: r
    }
  );
};
export {
  i as EnhancedEmptyStateParagraph
};
//# sourceMappingURL=enhanced-empty-state-paragraph.js.map
