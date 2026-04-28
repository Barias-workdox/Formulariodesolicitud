import { jsx as t, Fragment as u } from "react/jsx-runtime";
import { useState as d, useMemo as h } from "react";
import { SettingsAdjust as O } from "@carbon/icons-react";
import { isValidElementType as S } from "react-is";
import "../../../button/button.js";
import { IconButton as w } from "../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as b } from "../../../../constants/common.constants.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulMenu as x } from "../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import { StatelessPopover as E } from "../../../popover/stateless-popover.js";
import { StatefulTooltipNext as I } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { sortAlphabetically as g } from "../../../../utils/array.utils.js";
const U = ({
  hiddenFilters: e,
  disabled: n,
  tooltipText: p,
  addVisibleFilter: s
}) => {
  const [l, o] = d(!1), a = h(
    () => e.map(({ id: i, label: m, startEnhancer: r, focusOnShow: f }) => ({
      id: i,
      label: m,
      startEnhancer: S(r) ? /* @__PURE__ */ t(r, {}) : void 0,
      focusOnShow: f
    })).sort(g("label")),
    [e]
  ), c = ({ item: i }) => {
    const { id: m, focusOnShow: r } = i;
    s(m), r && o(!1);
  };
  return e.length !== 0 ? /* @__PURE__ */ t(
    E,
    {
      isOpen: l,
      showArrow: !0,
      placement: "bottomLeft",
      onEsc: () => o(!1),
      onClickOutside: () => o(!1),
      content: () => /* @__PURE__ */ t(
        x,
        {
          items: a,
          onItemSelect: c
        }
      ),
      children: /* @__PURE__ */ t(
        I,
        {
          content: p,
          placement: "bottom",
          showArrow: !0,
          children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
            w,
            {
              size: b,
              kind: "tertiary",
              onClick: () => o(!0),
              "data-testid": "filters_group--extra-filters-button",
              disabled: n,
              children: /* @__PURE__ */ t(O, {})
            }
          ) })
        }
      )
    }
  ) : /* @__PURE__ */ t(u, {});
};
export {
  U as ExtraFiltersIconButton
};
//# sourceMappingURL=extra-filters-icon-button.js.map
