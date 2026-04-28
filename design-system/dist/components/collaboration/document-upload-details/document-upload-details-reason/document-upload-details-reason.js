import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { Information as n } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../utils/i18n/utils.js";
import { Text as i } from "../../../text/text.js";
import { useCss as c } from "../../../utils/hooks/use-css.js";
import { reasonStyles as e } from "./document-upload-details-reason.styles.js";
const N = ({ reason: a }) => {
  const { wrapper: s, title: l, theme: o } = c(e), { t: m } = p();
  return /* @__PURE__ */ t("div", { className: s, children: [
    /* @__PURE__ */ t("div", { className: l, children: [
      /* @__PURE__ */ r(
        n,
        {
          size: 16,
          width: 14,
          height: 14,
          color: o.colors.neutral
        }
      ),
      /* @__PURE__ */ r(
        i,
        {
          variant: "bodySmall",
          margin: 0,
          color: o.colors.neutral,
          marginLeft: o.spacing.spacingXs,
          fontWeight: "500",
          children: m("collaborationUploadDetails.reason")
        }
      )
    ] }),
    /* @__PURE__ */ r(
      i,
      {
        variant: "bodySmall",
        $style: e.reasonText(o),
        fontWeight: 400,
        color: o.colors.neutralSubdued,
        children: a
      }
    )
  ] });
};
export {
  N as DocumentUploadDetailsReason
};
//# sourceMappingURL=document-upload-details-reason.js.map
