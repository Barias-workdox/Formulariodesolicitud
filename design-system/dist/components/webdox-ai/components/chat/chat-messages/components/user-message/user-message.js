import { jsx as r } from "react/jsx-runtime";
import n from "dompurify";
import { Text as i } from "../../../../../../text/text.js";
import { CHAT_QUESTION_MAX_WIDTH as m } from "../../../../../constants/webdox-ai.constants.js";
import { ChatMessageLayout as a } from "../chat-message-layout/chat-message-layout.js";
import { StyledAlignmentContainer as s } from "./styled-components/styled-alignment-container.js";
const g = ({
  id: o,
  value: e = "",
  layoutKind: t = "secondary"
}) => /* @__PURE__ */ r(s, { children: /* @__PURE__ */ r(
  a,
  {
    kind: t,
    maxWidth: m,
    children: /* @__PURE__ */ r(
      i,
      {
        variant: "bodySmall",
        margin: 0,
        color: "powerStrong",
        $style: {
          wordBreak: "break-word"
        },
        children: /* @__PURE__ */ r(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: n.sanitize(e)
            }
          }
        )
      }
    )
  },
  `user-${o}`
) });
export {
  g as UserMessage
};
//# sourceMappingURL=user-message.js.map
