import { jsx as t } from "react/jsx-runtime";
import { DocumentTasks as e } from "@carbon/icons-react";
import { Button as a } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as s } from "../../../../../utils/i18n/utils.js";
import { getButtonOverrides as d } from "../../webdox-ai-document-viewer-wrapper.styles.js";
const J = ({
  "data-testid": r,
  $isFirstChild: o,
  $isLastChild: i,
  disabled: m,
  onExplain: p
}) => {
  const { t: n } = s();
  return /* @__PURE__ */ t(
    a,
    {
      "data-testid": r,
      disabled: m,
      kind: "action-brain",
      size: "32px",
      endEnhancer: /* @__PURE__ */ t(e, {}),
      onClick: p,
      overrides: d({ $isFirstChild: o, $isLastChild: i }),
      children: n("general.explain")
    }
  );
};
export {
  J as ExplainAction
};
//# sourceMappingURL=explain-action.js.map
