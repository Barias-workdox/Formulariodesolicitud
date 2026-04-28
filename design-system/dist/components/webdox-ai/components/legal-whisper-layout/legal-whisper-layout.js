import { jsxs as h, jsx as t } from "react/jsx-runtime";
import { StyledContainer as m } from "./styled-components/styled-container.js";
import { StyledChatContainer as s } from "./styled-components/styled-chat-container.js";
import { StyledLeftColumnContainer as u } from "./styled-components/styled-left-column-container.js";
import { StyledRightColumnContainer as f } from "./styled-components/styled-right-column-container.js";
const L = ({
  children: e,
  isExpanded: o = !1,
  leftColumnContent: n,
  rightColumnContent: l,
  showRightColumn: r = !1,
  showLeftColumn: i = !1
}) => /* @__PURE__ */ h(m, { children: [
  /* @__PURE__ */ t(u, { $isOpen: i && o, children: n }),
  /* @__PURE__ */ t(s, { $isExpanded: o, children: e }),
  /* @__PURE__ */ t(f, { $isOpen: r && o, children: l })
] });
export {
  L as LegalWhisperLayout
};
//# sourceMappingURL=legal-whisper-layout.js.map
