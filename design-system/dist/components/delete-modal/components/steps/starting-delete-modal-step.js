import { jsxs as o, Fragment as a, jsx as t } from "react/jsx-runtime";
import { Button as l } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as d } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import { SectionedModalBody as c, SectionedModalFooter as s } from "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { ALL_DELETE_MODAL_STATUSES as f } from "../../delete-modal.constants.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../../utils/i18n/utils.js";
import { DeleteModalCountdown as u } from "../delete-modal-countdown.js";
const H = ({
  "data-testid": r,
  startingText: i,
  onClose: e,
  onTimeout: m
}) => {
  const { t: p } = g(), { theme: n } = d();
  return /* @__PURE__ */ o(a, { children: [
    /* @__PURE__ */ o(
      c,
      {
        $style: { display: "flex", flexDirection: "column", gap: n.spacing.spacingMd },
        children: [
          i,
          /* @__PURE__ */ t(u, { onComplete: m })
        ]
      }
    ),
    /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(
      l,
      {
        "data-testid": `${r}__cancel`,
        type: "button",
        kind: "tertiary",
        onClick: () => e(f.starting),
        children: p("general.cancel")
      }
    ) })
  ] });
};
export {
  H as StartingDeleteModalStep
};
//# sourceMappingURL=starting-delete-modal-step.js.map
