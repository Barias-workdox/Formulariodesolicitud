import { jsxs as f, jsx as t } from "react/jsx-runtime";
import { Chat as b } from "@carbon/icons-react";
import "baseui/typography";
import { useCss as C } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/input";
import "baseui/popover";
import "baseui";
import "../../../../menu/stateful-menu/stateful-menu.js";
import "../../../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../../utils/i18n/utils.js";
import "baseui/avatar";
import "baseui/tooltip";
import { COMMON_ICON_SIZE_32 as h } from "../../../../../constants/common.constants.js";
import "../../../../avatar/avatar.styles.js";
import "baseui/modal";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../text/text.js";
import "../../../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "@formkit/auto-animate/react";
import "react-use";
import "../../../../background-icon/background-icon.styles.js";
import "../../../../messages/message-list/message-list.styles.js";
import "baseui/menu";
import "../../../../menu/stateless-menu/stateless-menu.overrides.js";
import "dompurify";
import "baseui/tag";
import { Messages as N } from "../../../../messages/messages.js";
import { HeaderTab as g } from "../header-tab/header-tab.js";
import { styles as M } from "./comments-tab.styles.js";
const Mt = ({
  "data-testid": o = "comments-tab",
  currentUserId: r,
  messages: i,
  users: m,
  isLoading: p,
  canCreate: e,
  onCreate: s,
  onPageEnd: a,
  onClose: n
}) => {
  const { t: c } = u(), { containerStyles: l, tabContentStyles: d } = C(M);
  return /* @__PURE__ */ f("div", { className: l, children: [
    /* @__PURE__ */ t(
      g,
      {
        "data-testid": o,
        title: c("contractNegotiationCollaboration.commentsTab.comments"),
        onClose: n,
        startEnhancerProps: {
          backgroundColor: "brandWashed",
          Icon: b,
          size: h
        }
      }
    ),
    /* @__PURE__ */ t("div", { className: d, children: /* @__PURE__ */ t(
      N,
      {
        "data-testid": o,
        canCreate: e,
        canDelete: !1,
        canUpdate: !1,
        currentUserId: r,
        direction: "reverse",
        isLoading: p,
        isMentionable: !0,
        isPaginated: !0,
        messages: i,
        onCreate: s,
        onPageEnd: a,
        users: m
      }
    ) })
  ] });
};
export {
  Mt as CommentsTab
};
//# sourceMappingURL=comments-tab.js.map
