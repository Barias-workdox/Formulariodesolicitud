import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { Close as a } from "@carbon/icons-react";
import { useMedia as p } from "react-use";
import "../../../button/button.js";
import { IconButton as d } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import { mediaQueries as l } from "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Markdown as u } from "../../../markdown/markdown.js";
import { Text as i } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../utils/i18n/utils.js";
import { ReactComponent as h } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import "../webdox-ai-button/webdox-ai-button.js";
import { WEBDOX_AI_BUTTON_ICON_SMALL_SIZE as n } from "../webdox-ai-button/webdox-ai-button.constants.js";
import { BusinessSummaryDesktopFooter as S } from "./business-summary-desktop/components/business-summary-desktop-footer/business-summary-desktop-footer.js";
import { BusinessSummaryMobileFooter as f } from "./business-summary-mobile/components/business-symmary-mobile-footer/business-summary-mobile-footer.js";
import { StyledBusinessSummaryContainer as y, StyledBusinessSummaryHeader as B, StyledBrainIconContainer as b, StyledBusinessSummaryHeaderContent as C, StyledBusinessSummaryHeaderTitle as I, StyledBusinessSummaryContent as x } from "./business-summary.styles.js";
const g = "business-summary", mo = ({ summary: t, toggleOpen: s }) => {
  const m = p(l.medium), { t: e } = c();
  return /* @__PURE__ */ r(y, { children: [
    /* @__PURE__ */ r(B, { children: [
      /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(
        h,
        {
          height: n,
          width: n
        }
      ) }),
      /* @__PURE__ */ r(C, { children: [
        /* @__PURE__ */ r(I, { children: [
          /* @__PURE__ */ o(
            i,
            {
              variant: "h2",
              fontWeight: 700,
              color: "neutral",
              margin: 0,
              children: e("webdoxAI.assistantOptions.brainCompanion")
            }
          ),
          /* @__PURE__ */ o(
            i,
            {
              variant: "body",
              fontWeight: 400,
              color: "neutral",
              margin: 0,
              children: `${m ? " - " : ""} ${e("webdoxAI.assistantOptions.businessSummary")}`
            }
          )
        ] }),
        /* @__PURE__ */ o(
          d,
          {
            "data-testid": `${g}__close-button`,
            kind: "control",
            size: "32px",
            onClick: s,
            children: /* @__PURE__ */ o(a, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(x, { children: /* @__PURE__ */ o(
      i,
      {
        variant: "bodySmall",
        color: "neutralSubdued",
        overflow: "auto",
        margin: 0,
        as: "span",
        children: /* @__PURE__ */ o(
          u,
          {
            extraComponents: {
              h1: /* @__PURE__ */ o("h4", {}),
              h2: /* @__PURE__ */ o("h4", {}),
              h3: /* @__PURE__ */ o("h4", {})
            },
            children: t
          }
        )
      }
    ) }),
    m ? /* @__PURE__ */ o(S, { summary: t }) : /* @__PURE__ */ o(f, { summary: t })
  ] });
};
export {
  mo as BusinessSummary
};
//# sourceMappingURL=business-summary.js.map
