import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { useMemo as i } from "react";
import { Draggable as W, ChevronLeft as N, OverflowMenuHorizontal as P, Close as j, ChevronUp as y, ChevronDown as V } from "@carbon/icons-react";
import "../button/button.js";
import { IconButton as d } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { TruncatedText as _ } from "../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as D } from "../utils/i18n/utils.js";
import { getAllowedComponent as U } from "../../utils/react.utils.js";
import { ALLOWED_ENHANCER_ELEMENTS as q } from "./constants/allowed-elements.constant.js";
import { getButtonAriaLabelOverride as l } from "./header.overrides.js";
import { HeaderWrapper as F, HeaderSection as v } from "./header.styled.js";
import { composeDataTestId as G } from "./utils/compose-data-test-id.js";
import { getMapSize as J, getPaddingSize as K, getActionButtonSize as Q, getTitleWeight as X, getTextVariant as Y } from "./utils/size-maps.js";
const Re = ({
  title: c,
  dataTestId: b,
  size: t = "xsmall",
  borderRadius: f = "borderSm",
  enhancer: T,
  actions: $,
  isDraggable: A,
  isDisabled: o,
  iconButton: L,
  isExpanded: m,
  onCollapsibleButtonClick: g,
  onBackButtonClick: h,
  onClose: u
}) => {
  const { t: r } = D(), S = U(T, q), x = !!h, B = !!A && t !== "medium", C = !!u, I = !!g, s = J(t), O = K(t), a = Q(t), z = Y(t), k = X(t), n = G(b ?? ""), R = i(
    () => l(r("general.menu")),
    [r]
  ), w = i(
    () => l(r("general.drag")),
    [r]
  ), E = i(
    () => l(r(m ? "general.collapse" : "general.expand")),
    [r, m]
  ), H = i(() => l(r("general.back")), [r]), M = i(
    () => l(r("general.close")),
    [r]
  );
  return /* @__PURE__ */ e("header", { children: /* @__PURE__ */ p(
    F,
    {
      "data-testid": n,
      $isDisabled: o,
      $borderRadius: f,
      $padding: O,
      $gap: s,
      children: [
        /* @__PURE__ */ p(v, { $gap: s, children: [
          B && /* @__PURE__ */ e(
            d,
            {
              dataTestId: `${n}--draggable`,
              size: a,
              kind: "ghost-tertiary",
              overrides: w,
              disabled: o,
              children: /* @__PURE__ */ e(W, {})
            }
          ),
          x && /* @__PURE__ */ e(
            d,
            {
              dataTestId: `${n}--back-button`,
              size: a,
              onClick: h,
              overrides: H,
              disabled: o,
              children: /* @__PURE__ */ e(N, {})
            }
          ),
          S,
          /* @__PURE__ */ e(
            _,
            {
              textProps: {
                variant: z,
                color: o ? "neutralDepressed" : "neutralStrong",
                fontWeight: k,
                margin: 0
              },
              tooltipProps: { content: c },
              children: c
            }
          )
        ] }),
        /* @__PURE__ */ p(v, { $gap: s, children: [
          $,
          L && /* @__PURE__ */ e(
            d,
            {
              size: a,
              dataTestId: `${n}--overflow-menu`,
              kind: "tertiary",
              overrides: R,
              disabled: o,
              children: /* @__PURE__ */ e(P, {})
            }
          ),
          C && /* @__PURE__ */ e(
            d,
            {
              dataTestId: `${n}--close-button`,
              size: a,
              disabled: o,
              onClick: u,
              overrides: M,
              children: /* @__PURE__ */ e(j, {})
            }
          ),
          I && /* @__PURE__ */ e(
            d,
            {
              dataTestId: `${n}--expand`,
              overrides: E,
              disabled: o,
              size: a,
              onClick: g,
              children: m ? /* @__PURE__ */ e(y, {}) : /* @__PURE__ */ e(V, {})
            }
          )
        ] })
      ]
    }
  ) });
};
export {
  Re as HeaderComponent
};
//# sourceMappingURL=header.js.map
