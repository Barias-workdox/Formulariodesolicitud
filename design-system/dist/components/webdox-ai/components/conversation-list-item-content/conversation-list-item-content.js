import { jsxs as n, Fragment as m, jsx as t } from "react/jsx-runtime";
import { Edit as h, TrashCan as u } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as p } from "../../../button/variants/icon-button/icon-button.js";
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
import { StatefulTooltipNext as l } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { TruncatedText as f } from "../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../utils/i18n/utils.js";
import { StyledTitleWrapper as k } from "./styled-components/styled-title-wrapper.js";
const Q = ({
  dataTestId: o = "conversation-list-item-content",
  zIndex: r,
  conversation: i,
  isHovered: a,
  isSelected: c,
  onEditConversation: d,
  onDeleteConversation: s
}) => {
  const { t: e } = T();
  return /* @__PURE__ */ n(m, { children: [
    /* @__PURE__ */ t(k, { children: /* @__PURE__ */ t(
      f,
      {
        zIndex: r,
        textProps: { variant: "body", color: "neutralMedium", margin: 0 },
        tooltipProps: {
          placement: "topLeft",
          content: i.title
        },
        children: i.title
      }
    ) }),
    (a || c) && /* @__PURE__ */ n(m, { children: [
      /* @__PURE__ */ t(
        l,
        {
          content: e("general.rename"),
          showArrow: !0,
          zIndex: r,
          children: /* @__PURE__ */ t(
            p,
            {
              dataTestId: `${o}--edit-button`,
              onClick: d,
              size: "24px",
              kind: "link-tertiary",
              children: /* @__PURE__ */ t(h, {})
            }
          )
        }
      ),
      /* @__PURE__ */ t(
        l,
        {
          content: e("general.delete"),
          showArrow: !0,
          zIndex: r,
          children: /* @__PURE__ */ t(
            p,
            {
              dataTestId: `${o}--delete-button`,
              onClick: s,
              size: "24px",
              kind: "link-tertiary",
              children: /* @__PURE__ */ t(u, {})
            }
          )
        }
      )
    ] })
  ] });
};
export {
  Q as ConversationListItemContent
};
//# sourceMappingURL=conversation-list-item-content.js.map
