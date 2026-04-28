import { jsx as t } from "react/jsx-runtime";
import { Close as n } from "@carbon/icons-react";
import "../../../../../button/button.js";
import { IconButton as s } from "../../../../../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltipNext as a } from "../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../../utils/i18n/utils.js";
import { getButtonOverrides as l } from "../../webdox-ai-document-viewer-wrapper.styles.js";
const J = ({
  "data-testid": o,
  onClose: r,
  zIndex: i,
  $isFirstChild: m,
  $isLastChild: p
}) => {
  const { t: e } = c();
  return /* @__PURE__ */ t(
    a,
    {
      showArrow: !0,
      content: e("general.close"),
      zIndex: i,
      children: /* @__PURE__ */ t(
        s,
        {
          "data-testid": o,
          kind: "action-brain",
          onClick: r,
          overrides: l({ $isFirstChild: m, $isLastChild: p }),
          size: "32px",
          children: /* @__PURE__ */ t(n, {})
        }
      )
    }
  );
};
export {
  J as CloseAction
};
//# sourceMappingURL=close-action.js.map
