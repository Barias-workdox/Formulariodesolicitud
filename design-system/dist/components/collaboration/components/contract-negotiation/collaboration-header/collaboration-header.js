import { jsxs as m, jsx as t, Fragment as y } from "react/jsx-runtime";
import { Text as a } from "../../../../text/text.js";
import { StatefulTooltipNext as l } from "../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as u } from "../../../../utils/hooks/use-css.js";
import { DSTrans as p } from "../../../../utils/i18n/translation-component.js";
import { styles as r } from "./collaboration-header.styles.js";
import { CollaborationHeaderTag as S } from "./components/collaboration-header-tag/collaboration-header-tag.js";
import "@carbon/icons-react";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "baseui/popover";
import "../../../../popover/popover.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
const V = ({
  collaborationName: o,
  customerName: e,
  status: n,
  action: i,
  options: s = /* @__PURE__ */ t(y, {})
}) => {
  const { headerContainerStyles: c, headerStyles: d, actionContainerStyles: h } = u(r);
  return /* @__PURE__ */ m("div", { className: c, children: [
    /* @__PURE__ */ m("div", { className: d, children: [
      i && /* @__PURE__ */ t("div", { className: h, children: i }),
      /* @__PURE__ */ t(
        l,
        {
          showArrow: !0,
          placement: "bottom",
          content: o,
          children: /* @__PURE__ */ t(
            a,
            {
              variant: "bodySmall",
              color: "neutralStrong",
              fontWeight: "500",
              margin: 0,
              $style: r.textStyles(),
              children: o
            }
          )
        }
      ),
      /* @__PURE__ */ t(S, { status: n }),
      /* @__PURE__ */ t(
        l,
        {
          showArrow: !0,
          placement: "bottom",
          content: /* @__PURE__ */ t(
            p,
            {
              i18nKey: "collaborationDetails.header.customerName",
              values: { customerName: e }
            }
          ),
          children: /* @__PURE__ */ t(
            a,
            {
              variant: "bodySmall",
              color: "neutralDepressed",
              $style: r.textStyles(),
              margin: 0,
              children: /* @__PURE__ */ t(
                p,
                {
                  i18nKey: "collaborationDetails.header.customerName",
                  values: { customerName: e }
                }
              )
            }
          )
        }
      )
    ] }),
    s
  ] });
};
export {
  V as CollaborationHeader
};
//# sourceMappingURL=collaboration-header.js.map
