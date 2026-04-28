import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { Modal as d } from "../modal/modal.js";
import "../modal/regular-modal.js";
import { SectionedModalHeader as s } from "../modal/sectioned-modal.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../utils/i18n/utils.js";
import { ConfirmDeleteModalStep as c } from "./components/steps/confirm-delete-modal-step.js";
import { StartingDeleteModalStep as S } from "./components/steps/starting-delete-modal-step.js";
import { InProgressDeleteModalStep as D } from "./components/steps/in-progress-delete-modal-step.js";
import "react";
import "baseui/progress-bar";
import "baseui";
import "@carbon/icons-react";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
import { ALL_DELETE_MODAL_STATUSES as M } from "./delete-modal.constants.js";
import { DeleteModalDisclaimerText as T } from "./components/delete-modal-disclaimer-text.js";
const i = {
  confirm: c,
  starting: S,
  in_progress: D
}, L = ({
  zIndex: m,
  status: o = M.confirm,
  isOpen: e = !1,
  ...r
}) => {
  const { t: p } = f(), { onClose: l } = r, n = r.variant === "simple" ? i.confirm : i[o];
  return /* @__PURE__ */ a(
    d,
    {
      isOpen: e,
      onClose: () => l(o),
      zIndex: m,
      children: [
        /* @__PURE__ */ t(s, { children: p(`deleteModal.modal.${o}.header`) }),
        /* @__PURE__ */ t(n, { ...r })
      ]
    }
  );
};
L.DisclaimerText = T;
export {
  L as DeleteModal
};
//# sourceMappingURL=delete-modal.js.map
