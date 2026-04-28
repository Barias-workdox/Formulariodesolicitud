import { jsx as o } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../utils/i18n/utils.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as n } from "../../../../themes/utilities.js";
import { ClearButton as s } from "../../../clear-button/clear-button.js";
import { CloseIconWrapper as c, closeButtonFocusOverrides as a } from "./toast-close-icon.styles.js";
const S = e(
  function(r, t) {
    const [, i] = n(), { t: m } = p();
    return /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(
      s,
      {
        ...r,
        ref: t,
        iconColor: i.colors.iconBase,
        overrides: a,
        "aria-label": m("notification.closeNotification")
      }
    ) });
  }
);
export {
  S as CloseIconToast
};
//# sourceMappingURL=toast-close-icon.js.map
