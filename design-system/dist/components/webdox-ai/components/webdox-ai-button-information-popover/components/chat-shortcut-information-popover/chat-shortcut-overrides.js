import { jsx as t } from "react/jsx-runtime";
import { SendAlt as e } from "@carbon/icons-react";
import { Button as i } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_32 as p, COMMON_ICON_SIZE_16 as a } from "../../../../../../constants/common.constants.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { InlineComposerTextareaContainer as n } from "../../../../../messages/message-composer/containers/inline-composer-textarea-container/inline-composer-textarea-container.js";
const w = ({
  isActive: r
}) => ({
  Body: {
    style: {
      opacity: r ? "1" : "0.8"
    }
  }
}), s = {
  style: ({ $theme: r }) => ({
    ...r.typography.ParagraphSmall,
    height: "76px",
    padding: r.spacing.spacingXs,
    width: "100%",
    "[placeholder]:empty::before": {
      ...r.typography.ParagraphSmall
    }
  })
}, m = {
  style: ({ $theme: r }) => ({
    background: r.colors.bgBase,
    overflow: "auto",
    paddingTop: 0,
    alignItems: "center",
    width: "100%"
  })
}, c = {
  style: ({ $theme: r }) => ({
    flexDirection: "column",
    gap: r.spacing.spacingXs
  })
}, d = {
  style: {
    padding: 0
  }
}, D = ({
  placeholder: r,
  buttonText: o
}) => ({
  Textarea: {
    component: n,
    props: {
      placeholder: r,
      overrides: {
        EditableDiv: s,
        ComposerWrapper: m,
        Container: c,
        SendButton: {
          component: i,
          props: {
            startEnhancer: /* @__PURE__ */ t(e, { size: a }),
            children: o,
            size: p,
            kind: "primary-brain"
          }
        }
      }
    }
  },
  Root: d
});
export {
  w as getChatShortcutInformationPopoverOverrides,
  D as getMessageComposerOverrides
};
//# sourceMappingURL=chat-shortcut-overrides.js.map
