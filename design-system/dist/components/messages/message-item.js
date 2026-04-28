import { jsx as t, Fragment as M, jsxs as i } from "react/jsx-runtime";
import { useState as S, useMemo as v } from "react";
import { CheckmarkOutline as V } from "@carbon/icons-react";
import Y from "dompurify";
import { sanitizeClassUserMention as Z } from "../utils/strings/regex.utils.js";
import { Button as tt } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { Spinner as x } from "../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Tag as et } from "../tag/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as ot } from "../utils/i18n/utils.js";
import { useCss as it } from "../utils/hooks/use-css.js";
import { cleanMentionsForPayload as rt } from "./utils/user-mention.utils.js";
import { MessageAuthor as nt } from "./message-author/message-author.js";
import { MessageComposer as st } from "./message-composer/message-composer.js";
import { userMentionCssClassName as at } from "./message-composer/user-mention.js";
import { MessageContentWrapper as pt, MessageContentBodyWrapper as mt, MessageContent as lt } from "./message-content/message-content.js";
import { MessageDate as ct } from "./message-date/message-date.js";
import { MessageDelete as dt } from "./message-delete/message-delete.js";
import { MessageContainer as ut, MessageHeader as ft } from "./message-layout/message-layout.js";
import "@formkit/auto-animate/react";
import "react-use";
import "../background-icon/background-icon.styles.js";
import "../text/text.js";
import "./message-list/message-list.styles.js";
import "../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../menu/stateless-menu/stateless-menu.overrides.js";
import { MessageOptionsPopover as ht } from "./message-options-popover/message-options-popover.js";
import { NewMessageLabel as yt } from "./new-message-label/new-message-label.js";
import "baseui/input";
import "baseui/popover";
import "../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "baseui/avatar";
import "baseui/tooltip";
import "../avatar/avatar.styles.js";
const gt = {
  mentionedUserStyles: (o) => ({
    color: o.colors.neutral,
    fontWeight: 500
  }),
  footerStyles: {
    display: "flex",
    justifyContent: "space-between"
  },
  spinnerContainerStyles: {
    height: "40px",
    display: "flex"
  },
  resolveButtonContentStyles: (o) => ({
    display: "flex",
    gap: o.spacing.spacing2xs,
    alignItems: "center",
    fontSize: o.typography.ParagraphXSmall.fontSize
  }),
  solvedInquiryTagStyles: (o) => ({
    marginTop: o.spacing.spacing2xs
  }),
  contentSpinnerContainerStyles: (o) => ({
    marginRight: o.spacing.spacingXs
  })
}, he = ({
  dataTestId: o = "message",
  isLoading: q,
  isMentionable: p,
  canUpdate: m,
  canDelete: l,
  currentUserId: A,
  message: e,
  users: c = [],
  barColor: k,
  labelColor: z,
  direction: w,
  isInquiryLoading: N,
  onUpdate: d,
  onDelete: r,
  onInquiryClick: I
}) => {
  var C;
  const [u, n] = S(!1), [_, f] = S(!1), {
    mentionedUserStyles: E,
    footerStyles: $,
    spinnerContainerStyles: b,
    resolveButtonContentStyles: B,
    solvedInquiryTagStyles: D,
    contentSpinnerContainerStyles: L
  } = it(gt), { t: h } = ot(), {
    type: y,
    status: g,
    MenuComponent: P = /* @__PURE__ */ t(M, {}),
    isLoading: j = !1,
    content: s,
    FooterComponent: F = /* @__PURE__ */ t(M, {}),
    CustomContentComponent: H
  } = e, O = e.createdAt !== void 0 || e.updatedAt !== void 0, a = v(() => y === "inquiry", [y]), T = v(() => a && g === "active", [a, g]), W = p ? Z({
    text: s,
    userMentionCssClassName: at,
    mentionedUserStyles: E
  }) : s;
  async function R(X) {
    const { content: G, mentions: J } = rt(X, c), K = {
      ...e,
      content: G
    }, { isSuccess: Q } = await d({ message: K, mentions: J });
    Q && n(!1);
  }
  const U = () => I(e);
  return /* @__PURE__ */ i(
    ut,
    {
      "data-testid": o,
      direction: w,
      children: [
        !e.read && /* @__PURE__ */ t(yt, {}),
        /* @__PURE__ */ i(ft, { children: [
          e.author !== void 0 && /* @__PURE__ */ t(
            nt,
            {
              label: e.author.label,
              barColor: k,
              labelColor: z,
              children: e.author.name
            }
          ),
          P,
          d && r && (m || l) && /* @__PURE__ */ t(
            ht,
            {
              "data-testid": `${o}__options-popover`,
              isLoading: q,
              message: e,
              canUpdate: m,
              canDelete: l,
              onEditClick: () => {
                n(!0);
              },
              onDeleteClick: () => {
                f(!0);
              },
              isAuthor: A === ((C = e.author) == null ? void 0 : C.id)
            }
          )
        ] }),
        u ? /* @__PURE__ */ t(
          st,
          {
            "data-testid": o,
            isEditing: !0,
            isMentionable: p,
            users: c,
            value: s,
            $maxHeight: "7.5rem",
            onUpdate: R,
            onCancel: () => {
              n(!1);
            }
          }
        ) : /* @__PURE__ */ i(pt, { children: [
          /* @__PURE__ */ i(mt, { children: [
            H ?? /* @__PURE__ */ t(lt, { children: /* @__PURE__ */ t(
              "span",
              {
                dangerouslySetInnerHTML: {
                  __html: Y.sanitize(W)
                }
              }
            ) }),
            j && /* @__PURE__ */ t("div", { className: L, children: /* @__PURE__ */ t(x, { size: "sm" }) })
          ] }),
          F
        ] }),
        /* @__PURE__ */ i("div", { className: $, children: [
          O && /* @__PURE__ */ t(
            ct,
            {
              isEditing: u,
              createdAt: e.createdAt,
              updatedAt: e.updatedAt
            }
          ),
          a && (T ? N ? /* @__PURE__ */ t("div", { className: b, children: /* @__PURE__ */ t(x, { size: "sm" }) }) : /* @__PURE__ */ t(
            tt,
            {
              "data-testid": `${o}-message-inquiry-${e.id}`,
              size: "32px",
              kind: "tertiary",
              onClick: U,
              children: /* @__PURE__ */ i("span", { className: B, children: [
                /* @__PURE__ */ t(
                  V,
                  {
                    size: 16,
                    height: 18,
                    width: 18,
                    color: "inherit"
                  }
                ),
                h("messages.inquiry.resolve")
              ] })
            }
          ) : /* @__PURE__ */ t("div", { className: D, children: /* @__PURE__ */ t(
            et,
            {
              kind: "positive",
              variant: "overlay",
              children: h("messages.inquiry.resolved")
            }
          ) }))
        ] }),
        r && /* @__PURE__ */ t(
          dt,
          {
            dataTestId: `${o}__delete-button`,
            show: _,
            message: e,
            onCancel: () => {
              f(!1);
            },
            onConfirm: () => {
              r(e);
            }
          }
        )
      ]
    },
    e.id
  );
};
export {
  he as MessageItem
};
//# sourceMappingURL=message-item.js.map
