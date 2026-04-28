import { jsx as i } from "react/jsx-runtime";
import { SendAlt as p } from "@carbon/icons-react";
import { Button as a } from "../../../../../../../../button/button.js";
import "../../../../../../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as n, COMMON_ICON_SIZE_16 as m } from "../../../../../../../../../constants/common.constants.js";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../../modal/regular-modal.js";
import "../../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { InlineComposerTextareaContainer as s } from "../../../../../../../../messages/message-composer/containers/inline-composer-textarea-container/inline-composer-textarea-container.js";
import { CHAT_SHORTCUT_HEIGHT as o } from "../../../../../../../constants/webdox-ai.constants.js";
const d = {
  style: ({ $theme: r }) => ({
    ...r.typography.ParagraphSmall,
    height: o,
    maxHeight: o,
    padding: r.spacing.spacingXs,
    width: "100%",
    "[placeholder]:empty::before": {
      ...r.typography.ParagraphSmall
    }
  })
}, c = {
  style: ({ $theme: r }) => ({
    background: r.colors.bgBase,
    overflow: "auto",
    paddingTop: 0,
    alignItems: "center",
    width: "100%"
  })
}, l = {
  style: ({ $theme: r }) => ({
    flexDirection: "column",
    gap: r.spacing.spacingXs
  })
}, g = {
  style: {
    padding: 0
  }
}, N = ({
  placeholder: r,
  buttonText: t,
  buttonKind: e = "primary-brain"
}) => ({
  Textarea: {
    component: s,
    props: {
      placeholder: r,
      overrides: {
        EditableDiv: d,
        ComposerWrapper: c,
        Container: l,
        SendButton: {
          component: a,
          props: {
            startEnhancer: /* @__PURE__ */ i(p, { size: m }),
            children: t,
            size: n,
            kind: e
          }
        }
      }
    }
  },
  Root: g
});
export {
  N as getMessageComposerOverrides
};
//# sourceMappingURL=chat-shortcut-content.overrides.js.map
