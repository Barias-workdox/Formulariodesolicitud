import { jsx as t } from "react/jsx-runtime";
import { Notification as r } from "../../notification/next/notification.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../utils/i18n/utils.js";
import { themedStyled as s } from "../../../themes/utilities.js";
const p = s("div", ({ $theme: o }) => ({
  marginTop: o.spacing.spacingSm,
  width: "fit-content"
})), S = ({
  distributionMode: o = "disabled"
}) => {
  const { t: i } = n(), e = {
    disabled: {
      title: `${i("decisionTree.distributionModeOptions.disabled")} ${i("decisionTree.distributionModeOptions.freeLabel")}`,
      description: i("decisionTree.distributionModeOptions.defaultDescription")
    },
    global_sequential: {
      title: i("decisionTree.distributionModeOptions.globalSequential"),
      description: i("decisionTree.distributionModeOptions.globalSequentialDescription")
    }
  };
  return /* @__PURE__ */ t(p, { children: /* @__PURE__ */ t(
    r,
    {
      size: "small",
      ...e[o]
    }
  ) });
};
export {
  S as GroupActionNotification
};
//# sourceMappingURL=group-action-notification.js.map
