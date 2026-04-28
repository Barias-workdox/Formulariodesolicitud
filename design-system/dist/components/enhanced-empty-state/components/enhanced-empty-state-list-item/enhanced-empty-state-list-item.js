import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { CheckmarkFilled as l } from "@carbon/icons-react";
import { Text as i } from "../../../text/text.js";
import { useCss as a } from "../../../utils/hooks/use-css.js";
import { styles as o, StyledListItem as c } from "./enhanced-empty-state-list-item.styles.js";
const S = ({
  children: r
}) => {
  const { iconStyles: s, theme: t } = a(o);
  return /* @__PURE__ */ m(c, { children: [
    /* @__PURE__ */ e(
      l,
      {
        color: t.colors.nature,
        className: s
      }
    ),
    /* @__PURE__ */ e(
      i,
      {
        variant: "bodySmall",
        color: t.colors.neutralSubdued,
        margin: 0,
        $style: o.textStyles(t),
        children: r
      }
    )
  ] });
};
export {
  S as EnhancedEmptyStateListItem
};
//# sourceMappingURL=enhanced-empty-state-list-item.js.map
