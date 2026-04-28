import { jsx as t } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as s } from "../../utils/i18n/utils.js";
import { Text as e } from "../../text/text.js";
import { useCss as i } from "../../utils/hooks/use-css.js";
const a = {
  containerStyles: (o) => ({
    "::before": {
      content: '""',
      display: "block",
      width: "10px",
      height: "10px",
      backgroundColor: o.colors.positiveDepressed,
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      borderRadius: "50%"
    },
    position: "relative",
    paddingLeft: `calc(10px + ${o.spacing.spacingXs})`,
    marginBottom: o.spacing.spacingMd
  })
}, y = () => {
  const { containerStyles: o } = i(a), { t: r } = s();
  return /* @__PURE__ */ t("div", { className: o, children: /* @__PURE__ */ t(
    e,
    {
      variant: "upperDetails",
      color: "neutralSubdued",
      children: r("messages.newMessage")
    }
  ) });
};
export {
  y as NewMessageLabel
};
//# sourceMappingURL=new-message-label.js.map
