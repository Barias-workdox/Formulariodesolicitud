import { jsx as o } from "react/jsx-runtime";
import { View as u, Edit as w, TrashCan as T, PenFountain as x } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../utils/i18n/utils.js";
import "../../../button/button.js";
import { IconButton as b } from "../../../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltip as g } from "../../../tooltip/stateful-tooltip.js";
const v = (r, t = 16, i) => ({
  position: {
    tooltipText: i("table.positionSignature"),
    icon: /* @__PURE__ */ o(
      x,
      {
        width: t,
        height: t
      }
    )
  },
  delete: {
    tooltipText: i("table.delete"),
    icon: /* @__PURE__ */ o(
      T,
      {
        width: t,
        height: t
      }
    )
  },
  edit: {
    tooltipText: i("table.edit"),
    icon: /* @__PURE__ */ o(
      w,
      {
        width: t,
        height: t
      }
    )
  },
  view: {
    tooltipText: i("table.view"),
    icon: /* @__PURE__ */ o(
      u,
      {
        width: t,
        height: t
      }
    )
  }
})[r], X = ({
  "data-testid": r,
  action: t,
  buttonKind: i = "link-tertiary",
  onClick: e,
  disabled: p = !1,
  tooltipText: m,
  tooltipProps: a = {},
  size: c,
  showTooltip: l = !0
}) => {
  const { t: d } = f(), { content: h, ...s } = a, n = v(t, c, d);
  return /* @__PURE__ */ o(
    g,
    {
      placement: "bottom",
      showArrow: !0,
      content: l ? h ?? m ?? n.tooltipText : void 0,
      ...s,
      children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
        b,
        {
          "data-testid": r,
          disabled: p,
          kind: i,
          shape: "circle",
          onClick: e,
          size: "32px",
          children: n.icon
        }
      ) })
    }
  );
};
export {
  X as TableAction,
  v as getActionData
};
//# sourceMappingURL=table-action.js.map
