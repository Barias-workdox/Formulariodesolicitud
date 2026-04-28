import { jsxs as a, jsx as o, Fragment as k } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { Renew as y } from "@carbon/icons-react";
import { CopyToClipboardButton as K } from "../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { FeedbackButton as l } from "../feedback-button/feedback-button.js";
import { FooterMessageButton as M } from "../footer-message-button/footer-message-button.js";
import { StyledContainer as P } from "./styled-components/styled-container.js";
const N = ({
  dataTestId: e,
  id: t,
  content: m = "",
  zIndex: n,
  isLoading: r = !1,
  selectedFeedback: i,
  renderFeedback: c = !0,
  renderCopyToClipboard: b = !0,
  renderRetry: u = !1,
  onFeedbackButtonClick: p,
  onCopyToClipboardButtonClick: f,
  onRetryAnswerGeneration: v
}) => {
  const g = s(() => i === "positive", [i]), C = s(() => i === "negative", [i]), d = r, h = ($) => {
    f({ id: t }, $);
  };
  return /* @__PURE__ */ a(P, { children: [
    c && /* @__PURE__ */ a(k, { children: [
      /* @__PURE__ */ o(
        l,
        {
          "data-testid": `${e}--positive-feedback-button-${t}`,
          feedbackKind: "positive",
          isActive: g,
          onClick: () => p(t, "positive"),
          disabled: r,
          tooltipProps: { placement: "bottomRight" },
          zIndex: n
        }
      ),
      /* @__PURE__ */ o(
        l,
        {
          "data-testid": `${e}--negative-feedback-button-${t}`,
          feedbackKind: "negative",
          tooltipProps: { placement: "bottomRight" },
          isActive: C,
          onClick: () => p(t, "negative"),
          disabled: d,
          zIndex: n
        }
      )
    ] }),
    b && /* @__PURE__ */ o(
      K,
      {
        "data-testid": `${e}--copy-to-clipboard-button-${t}`,
        value: m,
        tooltipProps: { placement: "bottomRight" },
        zIndex: n,
        buttonKind: "control",
        onCopy: h
      }
    ),
    u && /* @__PURE__ */ o(
      M,
      {
        "data-testid": `${e}--retry-button-${t}`,
        onClick: () => v({ id: t }),
        tooltipText: "general.regenerate",
        buttonKind: "control",
        children: /* @__PURE__ */ o(y, {})
      }
    )
  ] });
};
export {
  N as ChatMessageMenu
};
//# sourceMappingURL=chat-message-menu.js.map
