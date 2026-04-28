import { jsx as t, jsxs as k } from "react/jsx-runtime";
import { Edit as f, TrashCan as u } from "@carbon/icons-react";
import "../../../../../../../button/button.js";
import { IconButton as p } from "../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../modal/regular-modal.js";
import "../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../../../../list/list.js";
import "../../../../../../../list/virtualized-list.js";
import "../../../../../../../list/components/avatar-list-item/avatar-list-item.js";
import "../../../../../../../list/components/file-list-item/file-list-item.js";
import { ListItem as x } from "../../../../../../../list/components/list-item/list-item.js";
import { BlockedFeatureTooltip as e } from "../../../../../blocked-feature-tooltip/blocked-feature-tooltip.js";
import "../../styled-components/styled-empty-state-container.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-popover-content.js";
import "../../styled-components/styled-prompts-list.js";
import "../../styled-components/styled-header.js";
import { StyledListItemEndEnhancer as B } from "../../styled-components/styled-list-item-end-enhancer.js";
import "../../styled-components/styled-list-container.js";
import { listItemOverrides as C } from "./custom-prompt-item.overrides.js";
const Z = ({
  "data-testid": r = "custom-prompt-item",
  isEditingDisabled: o,
  itemData: { content: n, title: d },
  zIndex: m,
  onClick: l,
  onDelete: a,
  onEdit: s
}) => {
  const c = (i) => {
    i.stopPropagation(), a();
  }, h = (i) => {
    i.stopPropagation(), s();
  };
  return /* @__PURE__ */ t(
    x,
    {
      "data-testid": r,
      onClick: l,
      overrides: C,
      label: d || n,
      endEnhancer: /* @__PURE__ */ k(B, { children: [
        /* @__PURE__ */ t(
          e,
          {
            isBlocked: o,
            zIndex: m,
            children: /* @__PURE__ */ t(
              p,
              {
                "data-testid": `${r}--edit-button`,
                kind: "link-tertiary",
                onClick: h,
                size: "32px",
                disabled: o,
                children: /* @__PURE__ */ t(f, {})
              }
            )
          }
        ),
        /* @__PURE__ */ t(
          e,
          {
            isBlocked: o,
            zIndex: m,
            children: /* @__PURE__ */ t(
              p,
              {
                "data-testid": `${r}--delete-button`,
                kind: "link-tertiary",
                onClick: c,
                size: "32px",
                disabled: o,
                children: /* @__PURE__ */ t(u, {})
              }
            )
          }
        )
      ] })
    }
  );
};
export {
  Z as CustomPromptItem
};
//# sourceMappingURL=custom-prompt-item.js.map
