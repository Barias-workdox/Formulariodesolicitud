import { jsx as o } from "react/jsx-runtime";
import { OverflowMenuHorizontal as u } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as s } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulMenu as c } from "../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../menu/stateless-menu/stateless-menu.overrides.js";
import { Popover as a } from "../../../popover/popover.js";
import "baseui/popover";
import "../../../popover/popover.styles.js";
const A = ({
  dataTestId: r = "breadcrumbs-menu",
  breadcrumbs: i
}) => {
  const e = i.map(({ label: t, onClick: n }, m) => ({
    "data-testid": `${r}__item-${m}`,
    id: `breadcrumb-${m}`,
    label: t,
    handleClick: n
  })), p = ({ item: { handleClick: t } }) => {
    t == null || t();
  };
  return /* @__PURE__ */ o(
    a,
    {
      placement: "bottom",
      content: () => /* @__PURE__ */ o(
        c,
        {
          "data-testid": r,
          items: e,
          onItemSelect: p
        }
      ),
      children: /* @__PURE__ */ o(
        s,
        {
          "data-testid": `${r}__button`,
          kind: "ghost-tertiary",
          size: "24px",
          children: /* @__PURE__ */ o(u, {})
        }
      )
    }
  );
};
export {
  A as BreadcrumbsMenu
};
//# sourceMappingURL=breadcrumbs-menu.js.map
