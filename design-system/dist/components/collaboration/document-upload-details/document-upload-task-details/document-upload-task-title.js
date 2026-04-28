import { jsx as t } from "react/jsx-runtime";
import { TitleLayout as u } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { useTranslation as d } from "../../../utils/i18n/utils.js";
import { Text as o } from "../../../text/text.js";
import { useCss as p } from "../../../utils/hooks/use-css.js";
import { taskStyles as f } from "./document-upload-task-details.styles.js";
const k = ({
  uniqueId: e,
  documentTypeLabel: r,
  categoryLabel: a,
  description: i,
  required: l = !1
}) => {
  const { taskLabelsContainer: n } = p(f), { t: m } = d(), s = i || r, c = a || m(`collaborationUploadDetails.${l ? "required" : "optional"}Document`);
  return /* @__PURE__ */ t("div", { className: n, children: /* @__PURE__ */ t(
    u,
    {
      titleText: /* @__PURE__ */ t(
        o,
        {
          variant: "bodySmall",
          fontWeight: "500",
          margin: 0,
          color: "neutral",
          whiteSpace: "normal",
          children: `${e} - ${s}`
        }
      ),
      subtitleText: /* @__PURE__ */ t(
        o,
        {
          variant: "bodySmall",
          margin: 0,
          color: "neutralSubdued",
          children: c
        }
      )
    }
  ) });
};
export {
  k as DocumentUploadTaskTitle
};
//# sourceMappingURL=document-upload-task-title.js.map
