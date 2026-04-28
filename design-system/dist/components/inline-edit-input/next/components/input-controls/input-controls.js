import { jsx as t, jsxs as f, Fragment as C } from "react/jsx-runtime";
import { Edit as b, CheckmarkFilled as k, Misuse as w } from "@carbon/icons-react";
import "../../../../button/button.js";
import { IconButton as e } from "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as m } from "../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../../../utils/i18n/utils.js";
import { InlineEditInputMode as x } from "../../inline-edit-input.interfaces.js";
import { StyledInputControlsContainer as $ } from "../../styled-components/styled-input-controls-container.js";
const Y = ({
  "data-testid": o,
  disabled: p,
  mode: l,
  onCancel: s,
  onEdit: c,
  onSubmit: a,
  readOnly: u,
  submitDisabled: h = !1,
  zIndex: i
}) => {
  const { t: r } = g(), d = l === x.CAPTION, n = p || u;
  return /* @__PURE__ */ t(
    $,
    {
      $captionMode: d,
      $disabled: p,
      children: d ? /* @__PURE__ */ t(
        m,
        {
          content: r("general.editContent"),
          showArrow: !0,
          zIndex: i,
          children: /* @__PURE__ */ t(
            e,
            {
              "data-testid": `${o}--edit-button`,
              size: "24px",
              kind: "ghost-tertiary",
              onClick: c,
              disabled: n,
              children: /* @__PURE__ */ t(b, {})
            }
          )
        }
      ) : /* @__PURE__ */ f(C, { children: [
        /* @__PURE__ */ t(
          m,
          {
            content: r("general.confirmEdit"),
            showArrow: !0,
            zIndex: i,
            children: /* @__PURE__ */ t(
              e,
              {
                "data-testid": `${o}--submit-button`,
                size: "24px",
                kind: "positive",
                onClick: a,
                disabled: n || h,
                children: /* @__PURE__ */ t(k, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          m,
          {
            content: r("general.cancelEdit"),
            showArrow: !0,
            zIndex: i,
            children: /* @__PURE__ */ t(
              e,
              {
                "data-testid": `${o}--cancel-button`,
                size: "24px",
                kind: "control",
                onClick: s,
                disabled: n,
                children: /* @__PURE__ */ t(w, {})
              }
            )
          }
        )
      ] })
    }
  );
};
export {
  Y as InputControls
};
//# sourceMappingURL=input-controls.js.map
