import { jsx as o } from "react/jsx-runtime";
import { ChevronDown as g } from "@carbon/icons-react";
import { TRIGGER_TYPE as n } from "baseui/popover";
import { ParagraphSmall as f } from "baseui/typography";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as b } from "../../themes/utilities.js";
import { Button as w } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../menu/stateless-menu/stateless-menu.overrides.js";
import { Menu as y } from "../menu/menu.js";
import { Popover as v } from "../popover/popover.js";
import "../popover/popover.styles.js";
import { DropdownListItem as k } from "./components/dropdown-list-item.js";
const H = ({
  dataTestId: m = "dropdown",
  options: p = [],
  children: l,
  size: a,
  textForTooltip: c,
  placement: s = "auto",
  buttonKind: d = "primary"
}) => {
  const [h, i] = b(), e = p.filter((t) => t.isActive), u = (t, r) => {
    t.onClick(), r == null || r();
  };
  return /* @__PURE__ */ o(
    v,
    {
      placement: s,
      accessibilityType: "menu",
      triggerType: e.length > 0 ? n.click : n.hover,
      content: ({ close: t }) => e.length > 0 ? /* @__PURE__ */ o(
        y,
        {
          dataTestId: `${m}__menu`,
          itemLabelTemplate: (r) => /* @__PURE__ */ o(k, { item: r }),
          items: e,
          onItemSelect: ({ item: r }) => u(r, t)
        }
      ) : /* @__PURE__ */ o(
        "div",
        {
          className: h({
            padding: i.spacing.spacingXl,
            backgroundColor: i.colors.neutral,
            width: "250px"
          }),
          children: /* @__PURE__ */ o(
            f,
            {
              $style: { textAlign: "center", margin: 0, color: i.colors.textBase },
              children: c
            }
          )
        }
      ),
      showArrow: !0,
      overrides: {
        Arrow: {
          style: ({ $theme: t }) => ({
            backgroundColor: e.length > 0 ? "#fff" : t.colors.neutral
          })
        }
      },
      children: /* @__PURE__ */ o(
        w,
        {
          "data-testid": `${m}__button`,
          size: a,
          type: "button",
          disabled: e.length === 0,
          endEnhancer: () => /* @__PURE__ */ o(
            g,
            {
              size: 16,
              color: "neutralSubdued"
            }
          ),
          kind: d,
          children: l
        }
      )
    }
  );
};
export {
  H as Dropdown
};
//# sourceMappingURL=dropdown.js.map
