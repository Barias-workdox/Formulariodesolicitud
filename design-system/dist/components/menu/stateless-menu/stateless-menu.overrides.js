import { jsx as s } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import { getItemIndex as c } from "../../../utils/baseui.utils.js";
import { PLACEMENT as g } from "baseui/popover";
import "baseui";
import "../../popover/popover.styles.js";
import { MenuItem as f, getItemLabel as u } from "../components/menu-item.js";
import "@carbon/icons-react";
import "../../truncated-text/truncated-text.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
const b = l(function({ dataTestId: i, items: p, itemLabelKey: e, itemLabelTemplate: t, ...r }, n) {
  const {
    item: { id: o }
  } = r, a = c(p, o);
  return /* @__PURE__ */ s(
    f,
    {
      ref: n,
      ...r,
      baseDataTestId: i,
      index: a,
      getItemLabel: (d) => u({ ...d, itemLabelKey: e, itemLabelTemplate: t })
    }
  );
}), H = ({
  dataTestId: m = "menu",
  items: i,
  itemLabelKey: p = "label",
  itemLabelTemplate: e,
  optionListBorderBottom: t = !0,
  placementChildMenu: r = g.rightBottom,
  menuWidth: n
} = {}) => ({
  OptgroupHeader: {
    style: ({ $theme: o }) => ({
      ...o.typography.ParagraphSmall,
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: o.spacing.spacingMd,
      color: o.colors.neutral,
      fontWeight: 500,
      borderBottom: t ? "" : `1px solid ${o.colors.divisionLine}`
    })
  },
  List: {
    style: () => ({
      padding: 0,
      minWidth: n,
      boxShadow: "none",
      ":focus": {
        outline: "none"
      }
    })
  },
  Option: {
    props: {
      dataTestId: m,
      items: i,
      itemLabelKey: p,
      itemLabelTemplate: e,
      optionListBorderBottom: t,
      placementChildMenu: r
    },
    component: b
  }
});
export {
  H as getBaseOverrides
};
//# sourceMappingURL=stateless-menu.overrides.js.map
