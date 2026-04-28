import { jsx as o } from "react/jsx-runtime";
import { ParagraphXSmall as e } from "baseui/typography";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as m } from "../../../../themes/utilities.js";
import { tableHeaderCaptionStyles as p } from "./table-header.styles.js";
const y = ({ children: r }) => {
  const [, t] = m();
  return /* @__PURE__ */ o(e, { $style: p(t), children: r });
};
export {
  y as TableHeader
};
//# sourceMappingURL=table-header.js.map
