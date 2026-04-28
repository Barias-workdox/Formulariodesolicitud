import { jsx as t, jsxs as u } from "react/jsx-runtime";
import { Close as b } from "@carbon/icons-react";
import { Button as f } from "../../../../../button/button.js";
import { IconButton as T } from "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as x } from "../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { FullScreenHeader as C } from "../../../../../layouts/full-screen-layout/full-screen-layout.js";
import { StatefulTooltipNext as h } from "../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { TruncatedText as y } from "../../../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as B } from "../../../../../utils/i18n/utils.js";
import { CopyToClipboardButton as g, getAllCopyToClipboardButtonStates as w } from "../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { StyledButtonsContainer as S } from "../styled-buttons-container.js";
import { StyledEndEnhancerContainer as A } from "../styled-end-enhancer-container.js";
import { fullScreenHeaderOverrides as v } from "./brain-viewer-modal-header.overrides.js";
const et = ({
  "data-testid": e = "modal-header",
  title: i,
  clipboardItem: p,
  zIndex: n,
  copyButtonTexts: o = {},
  onClose: m
}) => {
  const { theme: d } = x(), { t: r } = B();
  return /* @__PURE__ */ t(
    C,
    {
      $padding: d.spacing.spacingMd,
      overrides: v,
      endEnhancer: /* @__PURE__ */ u(A, { children: [
        /* @__PURE__ */ t(S, { children: /* @__PURE__ */ t(
          g,
          {
            "data-testid": `${e}--copy-button`,
            value: p,
            children: ({ buttonState: a }) => {
              const { Icon: l, mainButtonText: c, mainTooltipText: s } = w(
                o.buttonText ?? r("webdoxAI.tableCopyToClipboardButton.defaultTooltipText"),
                o.copiedTooltipText ?? r("webdoxAI.tableCopyToClipboardButton.copiedTooltipText"),
                o.buttonText ?? r("webdoxAI.tableCopyToClipboardButton.defaultText"),
                o.copiedButtonText ?? r("webdoxAI.tableCopyToClipboardButton.defaultText")
              )[a];
              return /* @__PURE__ */ t(
                h,
                {
                  content: s,
                  showArrow: !0,
                  placement: "bottom",
                  zIndex: n,
                  children: /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(
                    f,
                    {
                      "data-testid": `${e}__copy-button--trigger`,
                      kind: "secondary",
                      size: "32px",
                      startEnhancer: /* @__PURE__ */ t(l, {}),
                      children: c
                    }
                  ) })
                }
              );
            }
          }
        ) }),
        /* @__PURE__ */ t(
          T,
          {
            "data-testid": `${e}--close-button`,
            kind: "control",
            size: "32px",
            onClick: m,
            children: /* @__PURE__ */ t(b, { size: 16 })
          }
        )
      ] }),
      children: /* @__PURE__ */ t(
        y,
        {
          textProps: { variant: "bodySmall", fontWeight: "500", margin: 0 },
          tooltipProps: {
            content: i,
            zIndex: n
          },
          children: i
        }
      )
    }
  );
};
export {
  et as BrainViewerModalHeader
};
//# sourceMappingURL=brain-viewer-modal-header.js.map
