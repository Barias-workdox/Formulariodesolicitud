import { jsx as t } from "react/jsx-runtime";
import { OverflowMenuVertical as C } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as b } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { Spinner as h } from "../../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Popover as k } from "../../../popover/popover.js";
import "baseui/popover";
import "../../../popover/popover.styles.js";
import { useCss as v } from "../../../utils/hooks/use-css.js";
import { MenuListItem as M } from "./menu-list-item/menu-list-item.js";
import { tableMenuContainerStyles as _ } from "./table-menu.styles.js";
const G = ({
  "data-testid": i = "design-system__table-menu",
  isLoading: e,
  options: p,
  disabled: m,
  show: u = !0,
  placement: c = "bottom",
  onOpen: l
}) => {
  const { css: a } = v(), d = (o, r) => {
    o(), r();
  };
  return /* @__PURE__ */ t("div", { className: a(_), children: u && (e ? /* @__PURE__ */ t(h, { size: "sm" }) : /* @__PURE__ */ t(
    k,
    {
      placement: c,
      onOpen: l,
      content: ({ close: o }) => !m && /* @__PURE__ */ t("div", { children: p.map((r, n) => {
        if ("CustomOption" in r)
          return r.CustomOption;
        if ("Icon" in r) {
          const { onClick: s, ...f } = r;
          return /* @__PURE__ */ t(
            M,
            {
              dataTestId: `${i}__item--${n}`,
              onClick: () => s && d(o, s),
              ...f
            },
            `menu-list-item-${n}`
          );
        }
      }) }),
      returnFocus: !0,
      autoFocus: !0,
      children: /* @__PURE__ */ t(
        b,
        {
          "data-testid": `${i}--button`,
          size: "32px",
          kind: "link-tertiary",
          disabled: m || e,
          children: /* @__PURE__ */ t(C, { size: 20 })
        }
      )
    }
  )) });
};
export {
  G as TableMenu
};
//# sourceMappingURL=table-menu.js.map
