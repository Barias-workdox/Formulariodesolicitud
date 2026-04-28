import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { Draggable as H, ArrowLeft as M, Minimize as P, Maximize as v, Close as C } from "@carbon/icons-react";
import { IconButton as d } from "../../../button/variants/icon-button/icon-button.js";
import { COMMON_ICON_SIZE_16 as c } from "../../../../constants/common.constants.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as k } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as s } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { TruncatedText as h } from "../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as L } from "../../../utils/i18n/utils.js";
import { useDynamicDialog as A } from "../context/dynamic-dialog.context.js";
import { DIALOG_Z_INDEX as t } from "../dynamic-dialog.constants.js";
import { StyledDialogHeader as _, StyledDragHandle as N, StyledHeaderMainRow as B, StyledHeaderContent as V, StyledHeaderTexts as $, StyledHeaderActions as j } from "./styled-components.js";
const fe = ({
  dataTestId: g = "dynamic-dialog-header",
  title: i,
  icon: m,
  description: n,
  showDescription: u = !0,
  showBackButton: f = !0,
  actions: p,
  showActions: w = !0,
  visible: x = !0,
  className: y,
  onBackButtonClick: D
}) => {
  const { theme: O } = k(), { t: l } = L(), {
    fullViewport: r,
    draggable: S,
    toggleFullViewport: I,
    close: T,
    closable: z,
    isMobile: a,
    handleDragStart: b
  } = A();
  return x ? /* @__PURE__ */ o(
    _,
    {
      "data-testid": g,
      className: y,
      $draggable: !1,
      $fullViewport: r,
      $isMobile: a,
      children: [
        S && !r && !a && /* @__PURE__ */ e(
          N,
          {
            "data-testid": "drag-handle",
            onPointerDown: b,
            children: /* @__PURE__ */ e(
              H,
              {
                width: c,
                height: c,
                color: O.colors.neutralSubdued,
                style: {
                  rotate: "90deg"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ o(B, { children: [
          f && /* @__PURE__ */ e(
            d,
            {
              onClick: D,
              size: "32px",
              kind: "control",
              children: /* @__PURE__ */ e(M, {})
            }
          ),
          /* @__PURE__ */ o(V, { children: [
            m && m,
            /* @__PURE__ */ o($, { children: [
              i && /* @__PURE__ */ e(
                h,
                {
                  textProps: {
                    variant: "h2",
                    fontWeight: "bold",
                    color: "neutralStrong",
                    margin: 0,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                  },
                  tooltipProps: {
                    content: i
                  },
                  zIndex: t.TOOLTIP,
                  children: i
                }
              ),
              n && u && /* @__PURE__ */ e(
                h,
                {
                  textProps: {
                    variant: "bodySmall",
                    color: "neutral",
                    margin: 0,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                  },
                  tooltipProps: {
                    content: n
                  },
                  zIndex: t.TOOLTIP,
                  children: n
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ o(j, { children: [
            p && w && p,
            !a && /* @__PURE__ */ e(
              s,
              {
                content: l(r ? "dynamicDialog.header.actions.minimize" : "dynamicDialog.header.actions.expand"),
                ignoreBoundary: !0,
                placement: "auto",
                popoverMargin: 8,
                zIndex: t.TOOLTIP,
                showArrow: !0,
                children: /* @__PURE__ */ e(
                  d,
                  {
                    onClick: I,
                    size: "32px",
                    kind: "tertiary",
                    children: r ? /* @__PURE__ */ e(P, {}) : /* @__PURE__ */ e(v, {})
                  }
                )
              }
            ),
            z && /* @__PURE__ */ e(
              s,
              {
                content: l("dynamicDialog.header.actions.close"),
                ignoreBoundary: !0,
                placement: "auto",
                popoverMargin: 8,
                zIndex: t.TOOLTIP,
                showArrow: !0,
                children: /* @__PURE__ */ e(
                  d,
                  {
                    onClick: T,
                    size: "32px",
                    kind: "control",
                    children: /* @__PURE__ */ e(C, {})
                  }
                )
              }
            )
          ] })
        ] })
      ]
    }
  ) : null;
};
export {
  fe as DynamicDialogHeader
};
//# sourceMappingURL=dialog-header.js.map
