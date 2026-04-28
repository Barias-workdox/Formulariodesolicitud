import { jsx as o } from "react/jsx-runtime";
import { useMemo as x } from "react";
import { ThumbsDown as i, ThumbsUp as r } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as T } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as B } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as h } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as k } from "../../../utils/i18n/utils.js";
import { styles as I } from "./feedback-button.styles.js";
const g = {
  active: {
    positive: {
      tooltipText: "feedbackButton.undo",
      Icon: r
    },
    negative: {
      tooltipText: "feedbackButton.undo",
      Icon: i
    }
  },
  inactive: {
    positive: {
      tooltipText: "feedbackButton.positive",
      Icon: r
    },
    negative: {
      tooltipText: "feedbackButton.negative",
      Icon: i
    }
  }
}, Y = ({
  "data-testid": m,
  feedbackKind: e,
  isActive: p,
  disabled: n = !1,
  isLoading: s = !1,
  showTooltip: c = !0,
  tooltipProps: a = {},
  zIndex: l,
  onClick: u
}) => {
  const { t: d } = k(), { theme: f } = B(), t = p ? "active" : "inactive", { Icon: v, tooltipText: b } = x(
    () => g[t][e],
    [e, t]
  );
  return /* @__PURE__ */ o(
    h,
    {
      showArrow: !0,
      placement: "bottom",
      zIndex: l,
      content: c ? d(b) : void 0,
      ...a,
      children: /* @__PURE__ */ o(
        T,
        {
          "data-testid": m,
          size: "32px",
          disabled: n,
          isLoading: s,
          kind: "control",
          overrides: {
            BaseButton: {
              style: I.buttonStyles(f, { state: t })
            }
          },
          onClick: u,
          children: /* @__PURE__ */ o(v, {})
        }
      )
    }
  );
};
export {
  Y as FeedbackButton
};
//# sourceMappingURL=feedback-button.js.map
