import { jsx as t } from "react/jsx-runtime";
import { useMemo as b } from "react";
import { ThumbsDownFilled as v, ThumbsDown as T, ThumbsUpFilled as x, ThumbsUp as h } from "@carbon/icons-react";
import "../button/button.js";
import { IconButton as k } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltip as B } from "../tooltip/stateful-tooltip.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as I } from "../utils/i18n/utils.js";
const w = {
  positive: {
    inactive: {
      tooltipText: "feedbackButton.positive",
      Icon: h
    },
    active: {
      tooltipText: "feedbackButton.undo",
      Icon: x
    }
  },
  negative: {
    inactive: {
      tooltipText: "feedbackButton.negative",
      Icon: T
    },
    active: {
      tooltipText: "feedbackButton.undo",
      Icon: v
    }
  }
}, Z = ({
  "data-testid": e,
  feedbackKind: o,
  isActive: r,
  disabled: p = !1,
  isLoading: m = !1,
  showTooltip: n = !0,
  type: c = "button",
  tooltipProps: a = {},
  zIndex: s,
  onClick: l
}) => {
  const { t: u } = I(), i = r ? "active" : "inactive", { Icon: d, tooltipText: f } = b(
    () => w[o][i],
    [o, i]
  );
  return /* @__PURE__ */ t(
    B,
    {
      showArrow: !0,
      placement: "bottom",
      zIndex: s,
      content: n ? u(f) : void 0,
      ...a,
      children: /* @__PURE__ */ t(
        k,
        {
          "data-testid": e,
          disabled: p,
          isLoading: m,
          type: c,
          size: "32px",
          kind: "control",
          onClick: l,
          children: /* @__PURE__ */ t(d, {})
        }
      )
    }
  );
};
export {
  Z as FeedbackButton
};
//# sourceMappingURL=feedback-button.js.map
