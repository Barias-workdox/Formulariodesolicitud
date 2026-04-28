import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { WatsonHealthStackedScrolling_1 as y } from "@carbon/icons-react";
import { FileTypeIcon as v } from "../../../../file-type-icon/file-type-icon.js";
import { Text as a } from "../../../../text/text.js";
import { useCss as u } from "../../../../utils/hooks/use-css.js";
import { TitleLayout as C } from "../../../../layouts/title-layout/title-layout.js";
import "../../../../layouts/title-layout/title-layout.styles.js";
import { Select as S } from "../../../../select/select.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../../utils/i18n/utils.js";
import { COMMON_ICON_SIZE_32 as N } from "../../../../../constants/common.constants.js";
import { HeaderTab as x } from "../header-tab/header-tab.js";
import { styles as E } from "./activity-tab.styles.js";
import { ThirdPartyStatus as W } from "./components/third-party-status/third-party-status.js";
const s = (o) => /* @__PURE__ */ t(
  C,
  {
    startEnhancer: /* @__PURE__ */ t(
      v,
      {
        fileExtension: o.fileExt,
        "data-testid": "document-activity-tab--file-type-icon",
        size: 20
      }
    ),
    titleText: /* @__PURE__ */ t(
      a,
      {
        variant: "bodySmall",
        margin: 0,
        fontWeight: "400",
        color: "neutralDepressed",
        children: o.label
      }
    )
  }
), K = ({
  "data-testid": o,
  documents: m,
  selectedDocument: e,
  handleOnChange: c,
  onClose: d
}) => {
  const {
    activityTabContainer: p,
    tabMainContainer: b,
    approversContainerStyles: f,
    selectContainerStyles: h,
    thirdPartyGridContainerStyles: g,
    theme: n
  } = u(E), { t: r } = T();
  return /* @__PURE__ */ l("div", { className: p, children: [
    /* @__PURE__ */ t(
      x,
      {
        "data-testid": o,
        title: r("contractNegotiationCollaboration.activityTab.title"),
        onClose: d,
        startEnhancerProps: {
          backgroundColor: "brandWashed",
          Icon: y,
          size: N
        }
      }
    ),
    /* @__PURE__ */ t("div", { className: b, children: /* @__PURE__ */ l("div", { className: f, children: [
      /* @__PURE__ */ t(
        a,
        {
          variant: "bodySmall",
          margin: 0,
          marginBottom: n.spacing.spacingMd,
          fontWeight: "500",
          color: n.colors.neutralStrong,
          children: r("contractNegotiationCollaboration.activityTab.approvers")
        }
      ),
      /* @__PURE__ */ t(
        a,
        {
          variant: "bodySmall",
          margin: 0,
          fontWeight: "400",
          color: "neutralSubdued",
          children: r("contractNegotiationCollaboration.activityTab.filterByDocument")
        }
      ),
      /* @__PURE__ */ t("div", { className: h, children: /* @__PURE__ */ t(
        S,
        {
          "data-testid": `${o}--select`,
          options: m,
          value: e,
          searchable: !1,
          onChange: ([i]) => c(i),
          getValueLabel: ({ option: i }) => s(i),
          getOptionLabel: ({ option: i }) => s(i)
        }
      ) }),
      /* @__PURE__ */ t("div", { className: g, children: e.thirdParties.map((i) => /* @__PURE__ */ t(
        W,
        {
          thirdParty: i
        },
        i.id
      )) })
    ] }) })
  ] });
};
export {
  K as ActivityTab
};
//# sourceMappingURL=activity-tab.js.map
