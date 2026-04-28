import { jsxs as a, jsx as m } from "react/jsx-runtime";
import { EnhancedEmptyStateContent as o } from "./components/enhanced-empty-state-content/enhanced-empty-state-content.js";
import { EnhancedEmptyStateLink as i } from "./components/enhanced-empty-state-link/enhanced-empty-state-link.js";
import { EnhancedEmptyStateList as p } from "./components/enhanced-empty-state-list/enhanced-empty-state-list.js";
import { EnhancedEmptyStateListItem as E } from "./components/enhanced-empty-state-list-item/enhanced-empty-state-list-item.js";
import { EnhancedEmptyStateParagraph as d } from "./components/enhanced-empty-state-paragraph/enhanced-empty-state-paragraph.js";
import { EnhancedEmptyStatePrimaryButton as y } from "./components/enhanced-empty-state-primary-button/enhanced-empty-state-primary-button.js";
import { EnhancedEmptyStateTitle as c } from "./components/enhanced-empty-state-title/enhanced-empty-state-title.js";
import { StyledContainer as h, StyledImg as S, StyledBody as s } from "./enhanced-empty-state.styles.js";
const t = ({
  dataTestId: r,
  imageSrc: e,
  children: n
}) => /* @__PURE__ */ a(h, { children: [
  /* @__PURE__ */ m(
    S,
    {
      "data-testid": `${r}--image`,
      src: e
    }
  ),
  /* @__PURE__ */ m(s, { children: n })
] });
t.Title = c;
t.Content = o;
t.Paragraph = d;
t.List = p;
t.ListItem = E;
t.Link = i;
t.PrimaryButton = y;
export {
  t as EnhancedEmptyState
};
//# sourceMappingURL=enhanced-empty-state.js.map
