import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { CloseOutline as s, CheckmarkOutline as u, OverflowMenuVertical as d } from "@carbon/icons-react";
import { Button as f } from "../../../../../../button/button.js";
import { IconButton as h } from "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as b } from "../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulMenu as C } from "../../../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import { Popover as O } from "../../../../../../popover/popover.js";
import "baseui/popover";
import "../../../../../../popover/popover.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../../../../../../utils/i18n/utils.js";
import { styles as k } from "./responsible-header-options.styles.js";
const X = ({
  "data-testid": o,
  onFinalize: i,
  onCancel: e
}) => {
  const { containerStyles: n, theme: m } = b(k), { t: r } = g(), p = [
    {
      id: "cancel",
      label: r("contractNegotiationCollaboration.cancel"),
      startEnhancer: /* @__PURE__ */ t(s, {})
    }
  ], a = {
    cancel: () => e()
  };
  return /* @__PURE__ */ l("div", { className: n, children: [
    /* @__PURE__ */ t(
      f,
      {
        "data-testid": `${o}__finalize`,
        size: "compact",
        startEnhancer: /* @__PURE__ */ t(u, {}),
        onClick: i,
        children: r("contractNegotiationCollaboration.finalize")
      }
    ),
    /* @__PURE__ */ t(
      O,
      {
        ignoreBoundary: !0,
        placement: "bottomRight",
        content: /* @__PURE__ */ t(
          C,
          {
            items: p,
            onItemSelect: ({ item: { id: c } }) => a[c]()
          }
        ),
        children: /* @__PURE__ */ t(
          h,
          {
            type: "button",
            size: "32px",
            kind: "control",
            "data-testid": `${o}__overflow`,
            children: /* @__PURE__ */ t(d, { color: m.colors.neutral })
          }
        )
      }
    )
  ] });
};
export {
  X as ResponsibleHeaderOptions
};
//# sourceMappingURL=responsible-header-options.js.map
