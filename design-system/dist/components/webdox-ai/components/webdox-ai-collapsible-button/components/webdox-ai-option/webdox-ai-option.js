import { jsx as o } from "react/jsx-runtime";
import { ReactComponent as c } from "../../../../../../assets/icons/webdox-ai/brain-companion-icon.svg.js";
import { ReactComponent as d } from "../../../../../../assets/icons/webdox-ai/legal-whisper-icon.svg.js";
import "../../../../../button/button.js";
import { IconButton as l } from "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { StatefulTooltipNext as f } from "../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../../../utils/i18n/utils.js";
const u = {
  legalWhisper: {
    kind: "quaternary-whisper",
    Icon: d
  },
  brainCompanion: {
    kind: "quaternary-brain",
    Icon: c
  }
}, K = ({
  "data-testid": r,
  disabled: i,
  isLoading: n,
  type: t,
  zIndex: p,
  onClick: m
}) => {
  const { t: e } = h(), { Icon: a, kind: s } = u[t];
  return /* @__PURE__ */ o(
    f,
    {
      content: e(`webdoxAI.assistantOptions.${t}`),
      showArrow: !0,
      zIndex: p,
      children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
        l,
        {
          "data-testid": r,
          size: "32px",
          kind: s,
          disabled: i,
          isLoading: n,
          onClick: m,
          overrides: {
            Root: { style: { flexShrink: 0 } }
          },
          children: /* @__PURE__ */ o(a, {})
        }
      ) })
    }
  );
};
export {
  K as WebdoxAIOption
};
//# sourceMappingURL=webdox-ai-option.js.map
