import { jsxs as m, jsx as o } from "react/jsx-runtime";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import { SectionedModalBody as e } from "../../../modal/sectioned-modal.js";
import { ProgressBar as p } from "../../../progress/progress-bar.js";
import "@carbon/icons-react";
import { useCss as s } from "../../../utils/hooks/use-css.js";
import { Text as n } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as a } from "../../../utils/i18n/utils.js";
const W = ({
  isLoading: r = !1
}) => {
  const { t } = a(), { theme: i } = s();
  return /* @__PURE__ */ m(e, { children: [
    /* @__PURE__ */ o(
      n,
      {
        variant: "body",
        marginTop: 0,
        marginBottom: i.spacing.spacingXl,
        fontWeight: "400",
        children: t("deleteModal.modal.in_progress.body")
      }
    ),
    /* @__PURE__ */ o(
      p,
      {
        completed: !r,
        value: 0,
        infinite: !0
      }
    )
  ] });
};
export {
  W as InProgressDeleteModalStep
};
//# sourceMappingURL=in-progress-delete-modal-step.js.map
