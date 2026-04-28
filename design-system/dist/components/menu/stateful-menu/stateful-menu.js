import { jsx as f } from "react/jsx-runtime";
import { forwardRef as O } from "react";
import { StatefulMenu as I } from "baseui/menu";
import { COMMON_FLOATING_MAX_HEIGHT as d } from "../../../constants/common.constants.js";
import { getItemIndex as x } from "../../../utils/baseui.utils.js";
import { PLACEMENT as S } from "baseui/popover";
import "baseui";
import "../../popover/popover.styles.js";
import { useCss as b } from "../../utils/hooks/use-css.js";
import { MenuItem as h, getItemLabel as L } from "../components/menu-item.js";
import "@carbon/icons-react";
import "../../truncated-text/truncated-text.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { menuItemListItemStyles as M } from "../components/menu-item.styles.js";
const C = O(function({ dataTestId: m, items: e, ...n }, i) {
  const {
    item: { id: p }
  } = n, t = x(e, p);
  return /* @__PURE__ */ f(
    h,
    {
      ref: i,
      ...n,
      index: t,
      baseDataTestId: m
    }
  );
}), J = ({
  dataTestId: r = "menu",
  itemLabelKey: m = "label",
  itemLabelTemplate: e,
  optionListBorderBottom: n = !0,
  placementChildMenu: i = S.rightBottom,
  menuWidth: p,
  overrides: t = {},
  ...a
}) => {
  var l, s, u;
  const { theme: c } = b(), { items: g } = a, y = typeof p == "number" ? `${p}px` : p;
  return /* @__PURE__ */ f(
    I,
    {
      ...a,
      overrides: {
        ...t,
        OptgroupHeader: {
          ...t.OptgroupHeader,
          style: ({ $theme: o }) => ({
            ...o.typography.ParagraphSmall,
            overflow: "hidden",
            whiteSpace: "nowrap",
            padding: o.spacing.spacingMd,
            color: o.colors.neutral,
            fontWeight: 500,
            borderBottom: n ? "" : `1px solid ${o.colors.divisionLine}`
          })
        },
        List: {
          ...t == null ? void 0 : t.List,
          style: () => {
            var o;
            return {
              padding: 0,
              minWidth: y,
              maxHeight: d,
              boxShadow: "none",
              listStyleType: "none",
              ":focus": {
                outline: "none"
              },
              ...(o = t.List) == null ? void 0 : o.style
            };
          }
        },
        Option: {
          props: {
            dataTestId: r,
            items: g,
            optionListBorderBottom: n,
            placementChildMenu: i,
            getItemLabel: (o) => L({ ...o, itemLabelKey: m, itemLabelTemplate: e }),
            ...(l = t.Option) == null ? void 0 : l.props
          },
          style: M({ theme: c, optionListBorderBottom: n }),
          ...(s = t.Option) == null ? void 0 : s.style,
          /**
           * This component override sometimes doesn't work, but it is correctly implemented
           * based on baseui documentation. To avoid the problem, just send the override with
           * component: undefined from the consumer and use the Option props and styles overrides only.
           *
           * Always try to use this implementation and use the component: undefined override only as a
           * last resort
           */
          component: C,
          ...(u = t.Option) == null ? void 0 : u.component
        }
      }
    }
  );
};
export {
  J as StatefulMenu
};
//# sourceMappingURL=stateful-menu.js.map
