import { jsx as t } from "react/jsx-runtime";
import { forwardRef as n } from "react";
import { Close as l } from "@carbon/icons-react";
import "../button/button.js";
import { IconButton as s } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../utils/i18n/utils.js";
const d = n(
  function({
    "data-testid": r = "clear-button",
    "aria-label": o,
    onClick: i,
    iconColor: m,
    overrides: p
  }, e) {
    const { t: a } = f();
    return /* @__PURE__ */ t(
      s,
      {
        "data-testid": r,
        ref: e,
        kind: "ghost-tertiary",
        size: "24px",
        "aria-label": o,
        onClick: i,
        overrides: p,
        children: /* @__PURE__ */ t(
          l,
          {
            title: a("general.close"),
            fill: m
          }
        )
      }
    );
  }
);
d.displayName = "ClearButton";
export {
  d as ClearButton
};
//# sourceMappingURL=clear-button.js.map
