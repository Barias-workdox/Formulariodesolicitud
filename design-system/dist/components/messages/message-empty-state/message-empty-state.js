import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { Chat as a } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as n } from "../../utils/i18n/utils.js";
import { BackgroundIcon as i } from "../../background-icon/background-icon.js";
import { Text as l } from "../../text/text.js";
import { useCss as p } from "../../utils/hooks/use-css.js";
const c = {
  emptyStateStyles: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "264px",
    margin: "0 auto"
  },
  boldText: (t) => ({
    color: t.colors.neutral,
    fontWeight: 500
  })
}, M = ({ emptyMessage: t }) => {
  const { emptyStateStyles: s, boldText: m } = p(c), { t: e } = n();
  return /* @__PURE__ */ o("div", { className: s, children: [
    /* @__PURE__ */ r(
      i,
      {
        shape: "round",
        Icon: a,
        iconColor: "brandMedium",
        backgroundColor: "brandWashed",
        size: "44px"
      }
    ),
    t ?? /* @__PURE__ */ o(
      l,
      {
        variant: "bodySmall",
        color: "neutralSubdued",
        textAlign: "center",
        children: [
          e("messages.emptyState.writeAMessage"),
          /* @__PURE__ */ r("span", { className: m, children: ` @${e("messages.emptyState.mention")} ` }),
          e("messages.emptyState.askForInformation")
        ]
      }
    )
  ] });
};
export {
  M as MessageEmptyState
};
//# sourceMappingURL=message-empty-state.js.map
