import { jsx as i, jsxs as l } from "react/jsx-runtime";
import { useMemo as n } from "react";
import { CloseOutline as u, CheckmarkOutline as f } from "@carbon/icons-react";
import { BackgroundIcon as m } from "../../background-icon/background-icon.js";
import { getFileCounts as h } from "../file-upload-manager.utils.js";
import { Spinner as C } from "../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { Text as d } from "../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as x } from "../../utils/i18n/utils.js";
import { themedStyled as c } from "../../../themes/utilities.js";
const v = c("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: o.spacing.spacingXs,
  width: "100%"
})), y = c("div", ({ $theme: o }) => ({
  display: "flex",
  alignItems: "center",
  gap: o.spacing.spacingXs
}));
function H({
  files: o,
  status: e
}) {
  const { t } = x(), r = e === "uploading", p = e === "canceled", a = n(
    () => h(o),
    [o]
  ), g = n(() => t(`fileUploadManager.progress.${e}`, {
    count: a.completed,
    total: o.length
  }), [e, o.length, a.completed, t]), s = n(() => r ? /* @__PURE__ */ i(
    C,
    {
      size: "sm",
      "data-testid": "file-upload-manager--spinner"
    }
  ) : p ? /* @__PURE__ */ i(
    m,
    {
      size: "24px",
      Icon: u,
      iconColor: "negative",
      backgroundColor: "negativeSubtle"
    }
  ) : /* @__PURE__ */ i(
    m,
    {
      size: "24px",
      Icon: f,
      iconColor: "positive",
      backgroundColor: "positiveSubtle"
    }
  ), [p, r]);
  return /* @__PURE__ */ l(v, { children: [
    /* @__PURE__ */ i(
      d,
      {
        variant: "body",
        margin: 0,
        padding: 0,
        fontWeight: "500",
        children: t("fileUploadManager.uploads")
      }
    ),
    (o.length > 0 || e === "canceled") && e !== "idle" && /* @__PURE__ */ l(y, { children: [
      s,
      /* @__PURE__ */ i(
        d,
        {
          variant: "bodySmall",
          margin: 0,
          padding: 0,
          fontWeight: "400",
          children: g
        }
      )
    ] })
  ] });
}
export {
  H as FileUploadManagerTitle
};
//# sourceMappingURL=file-upload-manager-title.js.map
