import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { useMedia as p } from "react-use";
import { DynamicDialog as d } from "../../../../dynamic-dialog/next/dynamic-dialog.js";
import { DynamicDialogHeader as l } from "../../../../dynamic-dialog/next/components/dialog-header.js";
import { DynamicDialogBody as c } from "../../../../dynamic-dialog/next/components/dialog-body.js";
import "../../../../dynamic-dialog/next/components/styled-components.js";
import "../../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import "../../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import { Markdown as u } from "../../../../markdown/markdown.js";
import { Text as h } from "../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../../utils/i18n/utils.js";
import { mediaQueries as y } from "../../../../../themes/v3/tokens/breakpoints.js";
import { ReactComponent as S } from "../../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import "../../webdox-ai-button/webdox-ai-button.js";
import { WEBDOX_AI_BUTTON_ICON_SMALL_SIZE as m } from "../../webdox-ai-button/webdox-ai-button.constants.js";
import { BusinessSummaryMobileFooter as g } from "../business-summary-mobile/components/business-symmary-mobile-footer/business-summary-mobile-footer.js";
import { StyledBusinessSummaryContainer as B, StyledBusinessSummaryContent as b, StyledBrainIconContainer as C } from "../business-summary.styles.js";
import { BusinessSummaryDesktopFooter as D } from "./components/business-summary-desktop-footer/business-summary-desktop-footer.js";
const K = ({
  isOpen: e,
  summary: r,
  toggleOpen: n
}) => {
  const a = p(y.medium), { t: i } = f(), s = /* @__PURE__ */ o(C, { children: /* @__PURE__ */ o(
    S,
    {
      height: m,
      width: m
    }
  ) });
  return /* @__PURE__ */ t(
    d,
    {
      isOpen: e,
      placement: "bottomRight",
      onClose: n,
      closable: !0,
      draggable: !0,
      resizable: !0,
      children: [
        /* @__PURE__ */ o(
          l,
          {
            title: i("webdoxAI.assistantOptions.brainCompanion"),
            description: i("webdoxAI.assistantOptions.businessSummary"),
            icon: s,
            showBackButton: !1
          }
        ),
        /* @__PURE__ */ o(c, { padding: "0px", children: /* @__PURE__ */ t(B, { children: [
          /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(
            h,
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
                    h1: /* @__PURE__ */ o("h4", { children: "Heading" }),
                    h2: /* @__PURE__ */ o("h4", { children: "Heading" }),
                    h3: /* @__PURE__ */ o("h4", { children: "Heading" })
                  },
                  children: r ?? ""
                }
              )
            }
          ) }),
          a ? /* @__PURE__ */ o(D, { summary: r ?? "" }) : /* @__PURE__ */ o(g, { summary: r ?? "" })
        ] }) })
      ]
    }
  );
};
export {
  K as BusinessSummaryDesktop
};
//# sourceMappingURL=business-summary-desktop.js.map
