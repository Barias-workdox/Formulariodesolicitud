import { jsx as t, jsxs as i } from "react/jsx-runtime";
import { CollapsibleBox as v } from "../../../../../../collapsible-box/collapsible-box.js";
import { Text as r } from "../../../../../../text/text.js";
import { StatefulTooltipNext as C } from "../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as x } from "../../../../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as T } from "../../../../../../utils/hooks/use-date-util-with-locale.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as D } from "../../../../../../utils/i18n/utils.js";
import { ThirdPartyStatus as $ } from "../../../activity-tab/components/third-party-status/third-party-status.js";
import "@carbon/icons-react";
import "baseui/list";
import "react";
import "../../../../../../file-type-icon/file-type-icon.styles.js";
import "baseui/tooltip";
import { DocumentStatusTag as W } from "../../../documents-tab/components/document-status-tag/document-status-tag.js";
import { styles as a, collapsibleBoxOverrides as U } from "./collapsible-info.styles.js";
const Z = ({
  document: { id: p, updatedAt: l, thirdParties: c, officeDocumentVersion: d },
  status: u
}) => {
  const {
    approvalsContainerStyles: h,
    collapsibleContainerStyles: f,
    lastEditionContainerStyles: g,
    statusContainerStyles: y,
    thirdPartiesContainerStyles: N,
    theme: e
  } = x(a), {
    user: { firstName: S, lastName: b }
  } = d, n = `${S} ${b}`, { t: o } = D(), { formatDateAsText: s } = T();
  return /* @__PURE__ */ t(
    v,
    {
      initialState: { isExpanded: !1 },
      title: o("contractNegotiationCollaboration.showSummary"),
      overrides: U(e),
      children: /* @__PURE__ */ i("div", { className: f, children: [
        /* @__PURE__ */ i("div", { className: y, children: [
          /* @__PURE__ */ t(
            r,
            {
              variant: "upperDetails",
              margin: 0,
              fontWeight: "500",
              $style: a.titleTextStyles(e),
              children: o("contractNegotiationCollaboration.state")
            }
          ),
          /* @__PURE__ */ t(
            W,
            {
              useLongText: !0,
              status: u
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: g, children: [
          /* @__PURE__ */ t(
            r,
            {
              variant: "upperDetails",
              margin: 0,
              fontWeight: "500",
              $style: a.titleTextStyles(e),
              children: o("contractNegotiationCollaboration.lastUpdated")
            }
          ),
          /* @__PURE__ */ t(
            C,
            {
              showArrow: !0,
              placement: "bottom",
              content: o("contractNegotiationCollaboration.lastUpdatedDate", {
                date: s(l, !0),
                user: n
              }),
              children: /* @__PURE__ */ t(
                r,
                {
                  variant: "bodySmall",
                  margin: 0,
                  color: "neutralSubdued",
                  fontWeight: "400",
                  children: o("contractNegotiationCollaboration.lastUpdatedDate", {
                    date: s(l, !0),
                    user: n
                  })
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: h, children: [
          /* @__PURE__ */ t(
            r,
            {
              variant: "upperDetails",
              margin: 0,
              fontWeight: "500",
              $style: a.titleTextStyles(e),
              children: o("contractNegotiationCollaboration.activityTab.approvers")
            }
          ),
          /* @__PURE__ */ t("div", { className: N, children: c.map((m) => /* @__PURE__ */ t(
            $,
            {
              thirdParty: m
            },
            `${p}-${m.id}`
          )) })
        ] })
      ] })
    }
  );
};
export {
  Z as CollapsibleInfo
};
//# sourceMappingURL=collapsible-info.js.map
