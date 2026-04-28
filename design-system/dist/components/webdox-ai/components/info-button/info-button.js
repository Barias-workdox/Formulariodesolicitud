import { jsx as o } from "react/jsx-runtime";
import { useMemo as v } from "react";
import { Information as T } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as B } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as O } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import { mergeOverridesDeep as h } from "../../../utils/baseui/helpers.js";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as x } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { DSTrans as g } from "../../../utils/i18n/translation-component.js";
import { getBaseOverrides as I } from "./info-button.overrides.js";
const H = ({
  "data-testid": e,
  disabled: i = !1,
  isLoading: m = !1,
  showTooltip: p = !0,
  tooltipText: s,
  zIndex: n,
  buttonKind: d = "tertiary-brain",
  overrides: a = {
    Button: {},
    Tooltip: {}
  },
  onClick: f
}) => {
  const { theme: l } = O(), { Button: u, Tooltip: t } = a, { Tooltip: r } = I(l), c = v(
    () => h(r, t),
    [r, t]
  );
  return /* @__PURE__ */ o(
    x,
    {
      showArrow: !0,
      placement: "bottom",
      zIndex: n,
      content: p ? /* @__PURE__ */ o(g, { i18nKey: s }) : void 0,
      overrides: c,
      children: /* @__PURE__ */ o(
        B,
        {
          "data-testid": e,
          size: "32px",
          disabled: i,
          isLoading: m,
          kind: d,
          onClick: f,
          overrides: u,
          children: /* @__PURE__ */ o(T, {})
        }
      )
    }
  );
};
export {
  H as InfoButton
};
//# sourceMappingURL=info-button.js.map
