import { jsx as m } from "react/jsx-runtime";
import { RecentlyViewed as p } from "@carbon/icons-react";
import { BackgroundIcon as n } from "../../../background-icon/background-icon.js";
import "../../../text/text.js";
import { useCss as l } from "../../../utils/hooks/use-css.js";
import { TitleLayout as c } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../../../utils/i18n/utils.js";
import { formatDate as u } from "../../../utils/strings/date.utils.js";
import { COMMON_ICON_SIZE_32 as f } from "../../../../constants/common.constants.js";
import { useLocale as D } from "../../../../contexts/locale-provider/locale-provider.js";
import { styles as y, lastUpdateTitleLayoutOverridesStyles as T } from "./document-approval-details-last-update.styles.js";
const g = (o, r) => {
  const t = o.reduce(
    (e, i) => e.concat(i.resources.map(({ updatedAt: s }) => new Date(s))),
    []
  );
  if (!t.length)
    return "";
  const a = Math.max(...t.map((e) => e.getTime()));
  return u(new Date(a).toISOString(), r);
}, B = ({
  subtasks: o,
  showSubtitleText: r = !0
}) => {
  const { t } = d(), { lastUpdateWrapperStyles: a, theme: e } = l(y), { locale: i } = D();
  return /* @__PURE__ */ m("div", { className: a, children: /* @__PURE__ */ m(
    c,
    {
      overrides: T(e),
      startEnhancer: /* @__PURE__ */ m(
        n,
        {
          Icon: p,
          size: f,
          backgroundColor: "brandWashed"
        }
      ),
      titleText: t("collaborationDetails.approvalActivity"),
      ...r && {
        subtitleText: t("collaborationDetails.updatedText.updated", {
          date: g(o, i)
        })
      }
    }
  ) });
};
export {
  B as DocumentApprovalDetailsLastUpdate,
  g as getLastUpdateDate
};
//# sourceMappingURL=document-approval-details-last-update.js.map
