import { jsxs as f, jsx as t } from "react/jsx-runtime";
import { RecentlyViewed as y } from "@carbon/icons-react";
import { Timeline as b } from "../../../../timeline/timeline.js";
import "react";
import "../../../../text/text.js";
import "baseui";
import { useCss as h } from "../../../../utils/hooks/use-css.js";
import "react-i18next";
import "baseui/progress-steps";
import { COMMON_ICON_SIZE_32 as u } from "../../../../../constants/common.constants.js";
import "../../../../background-icon/background-icon.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import { useTranslation as C } from "../../../../utils/i18n/utils.js";
import { HeaderTab as N } from "../header-tab/header-tab.js";
import { HistoryElement as T } from "./components/history-element/history-element.js";
import { styles as g } from "./history-tab.styles.js";
const D = ({
  "data-testid": i = "history-tab",
  isLoading: m,
  activities: o,
  responsible: e,
  onPageEnd: s,
  onClose: a
}) => {
  const { t: n } = C(), { containerStyles: p, tabContentStyles: c } = h(g);
  return /* @__PURE__ */ f("div", { className: p, children: [
    /* @__PURE__ */ t(
      N,
      {
        "data-testid": i,
        title: n("contractNegotiationCollaboration.historyTab.activityHistory"),
        onClose: a,
        startEnhancerProps: {
          backgroundColor: "brandWashed",
          Icon: y,
          size: u
        }
      }
    ),
    /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(
      b,
      {
        isPaginated: !0,
        isLoading: m,
        onPageEnd: s,
        activities: o.map((r, d) => {
          const l = o.length - 1 === d;
          return {
            id: r.id,
            component: /* @__PURE__ */ t(
              T,
              {
                activity: r,
                responsible: e,
                isLast: l
              }
            )
          };
        })
      }
    ) })
  ] });
};
export {
  D as HistoryTab
};
//# sourceMappingURL=history-tab.js.map
