import { jsxs as a, Fragment as p, jsx as o } from "react/jsx-runtime";
import { useState as c } from "react";
import { Search as l } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as d } from "../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as u, COMMON_ICON_SIZE_16 as f } from "../../../../constants/common.constants.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as h } from "../../../utils/hooks/use-css.js";
import { Modal as _ } from "../../../modal/modal.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { SuggestionInput as C } from "../../../suggestion-input/suggestion-input.js";
import { customModalOverrides as O } from "./search-icon-button-with-modal.overrides.js";
function z({
  "data-testid": r = "page-header__search",
  onSelect: e,
  ...i
}) {
  const [s, t] = c(!1), { theme: n } = h();
  return /* @__PURE__ */ a(p, { children: [
    /* @__PURE__ */ o(
      _,
      {
        isOpen: s,
        onClose: () => {
          t(!1);
        },
        autoFocus: !0,
        overrides: O,
        children: /* @__PURE__ */ o(
          C,
          {
            ...i,
            "data-testid": `${r}__input`,
            onSelect: (m) => {
              e(m), t(!1);
            }
          }
        )
      }
    ),
    /* @__PURE__ */ o(
      d,
      {
        "data-testid": `${r}--icon-button`,
        size: u,
        kind: "tertiary",
        onClick: () => t(!0),
        children: /* @__PURE__ */ o(
          l,
          {
            height: f,
            color: n.colors.neutral
          }
        )
      }
    )
  ] });
}
export {
  z as SearchIconButtonWithModal
};
//# sourceMappingURL=search-icon-button-with-modal.js.map
