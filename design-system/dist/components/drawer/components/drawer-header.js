import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { Close as p } from "@carbon/icons-react";
import { StyledNavigationItem as i } from "baseui/header-navigation";
import { useCss as l } from "../../utils/hooks/use-css.js";
import { IconButton as c } from "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { HeaderNavigation as g } from "../../navigation/header-navigation.js";
import { drawerHeaderStyles as f } from "./drawer.styles.js";
const I = ({
  "data-testid": o = "design-system__drawer--component",
  children: m,
  onClose: s,
  icon: n,
  title: a
}) => {
  const { headerContainerStyles: d, theme: r } = l(f);
  return /* @__PURE__ */ e(g, { showBorderBottom: !0, children: [
    /* @__PURE__ */ t(i, { $style: { paddingLeft: r.sizing.scale300 }, children: /* @__PURE__ */ e("div", { className: d, children: [
      n,
      a
    ] }) }),
    m,
    /* @__PURE__ */ t(
      i,
      {
        $style: {
          marginLeft: "auto",
          paddingRight: r.sizing.scale300,
          paddingLeft: r.sizing.scale300
        },
        children: /* @__PURE__ */ t(
          c,
          {
            "data-testid": `${o}-close-drawer-button`,
            kind: "control",
            size: "32px",
            onClick: s,
            children: /* @__PURE__ */ t(p, { size: 16 })
          }
        )
      }
    )
  ] });
};
export {
  I as DrawerHeader
};
//# sourceMappingURL=drawer-header.js.map
