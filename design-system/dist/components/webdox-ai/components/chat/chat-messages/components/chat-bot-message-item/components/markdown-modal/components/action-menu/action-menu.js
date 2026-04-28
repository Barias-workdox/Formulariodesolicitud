import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { Maximize as l } from "@carbon/icons-react";
import "../../../../../../../../../../button/button.js";
import { IconButton as b } from "../../../../../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as u } from "../../../../../../../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { StatefulTooltipNext as x } from "../../../../../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../../../../../../../utils/i18n/utils.js";
import { CopyToClipboardButton as s } from "../../../../../../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { getBaseOverrides as T } from "../../../../../../../../info-button/info-button.overrides.js";
import { StyledWrapper as f } from "./components/styled-wrapper.js";
const P = ({
  "data-testid": i,
  clipboardItem: e,
  zIndex: r,
  copyButtonTexts: p = {},
  onOpenTableViewer: m
}) => {
  const { theme: d } = u(), { Button: a } = T(d), { t } = c();
  return /* @__PURE__ */ n(f, { children: [
    /* @__PURE__ */ o(
      s,
      {
        "data-testid": `${i}--copy-to-clipboard-button`,
        value: e,
        tooltipText: t("webdoxAI.tableCopyToClipboardButton.defaultTooltipText"),
        copiedTooltipText: t("webdoxAI.tableCopyToClipboardButton.copiedTooltipText"),
        buttonText: t("webdoxAI.tableCopyToClipboardButton.defaultText"),
        copiedButtonText: t("webdoxAI.tableCopyToClipboardButton.defaultText"),
        ...p,
        zIndex: r
      }
    ),
    /* @__PURE__ */ o(
      x,
      {
        zIndex: r,
        content: t("webdoxAI.chat.expandTable"),
        children: /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
          b,
          {
            "data-testid": `${i}--expand-table-button`,
            size: "32px",
            kind: "tertiary",
            overrides: a,
            onClick: m,
            children: /* @__PURE__ */ o(l, {})
          }
        ) })
      }
    )
  ] });
};
export {
  P as ActionMenu
};
//# sourceMappingURL=action-menu.js.map
