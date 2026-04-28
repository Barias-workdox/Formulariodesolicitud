import { jsx as t } from "react/jsx-runtime";
import { useMemo as c } from "react";
import "../../../button/button.js";
import { IconButton as f } from "../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as l } from "../../../../constants/common.constants.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "baseui/modal";
import { mergeOverridesDeep as u } from "../../../utils/baseui/helpers.js";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { StatefulTooltipNext as g } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { DSTrans as M } from "../../../utils/i18n/translation-component.js";
const v = {
  Body: {
    style: ({ $theme: r }) => ({
      maxWidth: `calc(${r.spacing.spacing2xs8} * 4)`
    })
  }
}, E = ({
  "data-testid": r,
  disabled: i = !1,
  isLoading: m = !1,
  tooltipText: o,
  zIndex: p,
  popoverOverrides: e,
  children: s,
  buttonKind: n = "tertiary-brain",
  onClick: a
}) => {
  const d = c(() => u(v, e), [e]);
  return /* @__PURE__ */ t(
    g,
    {
      showArrow: !0,
      placement: "bottom",
      zIndex: p,
      content: o ? /* @__PURE__ */ t(M, { i18nKey: o }) : void 0,
      overrides: d,
      children: /* @__PURE__ */ t(
        f,
        {
          "data-testid": r,
          size: l,
          disabled: i,
          isLoading: m,
          kind: n,
          onClick: a,
          children: s
        }
      )
    }
  );
};
export {
  E as FooterMessageButton,
  v as baseOverrides
};
//# sourceMappingURL=footer-message-button.js.map
