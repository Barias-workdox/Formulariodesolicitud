import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { ShrinkScreenFilled as f, Close as I } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as b } from "../../../button/variants/icon-button/icon-button.js";
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
import { POPOVER_Z_INDEX as a } from "../../../popover/popover.constants.js";
import { Select as u } from "../../../select/next/select.js";
import { Tabs as S } from "../../../tabs/tabs.js";
import "baseui/tabs-motion";
import { Tab as x } from "../../../tabs/components/tab/tab.js";
import { Text as C } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as T } from "../../../utils/i18n/utils.js";
import { ReactComponent as _ } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { ActionIconButton as y } from "../action-icon-button/action-icon-button.js";
import { WEBDOX_AI_BUTTON_ICON_SIZE as s, WEBDOX_AI_SELECT_WIDTH as k } from "../webdox-ai-button/webdox-ai-button.constants.js";
import { StyledContainer as A, StyledHeader as B, StyledBrainIconContainer as E, tabsOverrides as g } from "./assistant-layout.styles.js";
const p = ({
  "data-testid": o,
  selectOptions: i,
  selectedOption: r = [],
  children: d,
  onClose: l,
  onClickDynamicView: c,
  onSelectChange: h
}) => {
  var n;
  const { t: e } = T();
  return /* @__PURE__ */ m(A, { children: [
    /* @__PURE__ */ m(B, { children: [
      /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(
        _,
        {
          "data-testid": `${o}--brain-icon`,
          height: s,
          width: s
        }
      ) }),
      /* @__PURE__ */ t(
        C,
        {
          variant: "h2",
          margin: 0,
          fontWeight: "700",
          flex: 1,
          color: "neutralStrong",
          children: e((n = r[0]) == null ? void 0 : n.value)
        }
      ),
      i && /* @__PURE__ */ t(
        u,
        {
          "data-testid": `${o}--select`,
          options: i,
          onChange: h,
          placeholder: e("webdoxAI.chat.assistantSelectPlaceholder"),
          kind: "white",
          size: "sm",
          width: k,
          searchable: !1,
          zIndex: a
        }
      ),
      /* @__PURE__ */ t(
        y,
        {
          dataTestId: `${o}--shrink-screen`,
          Icon: /* @__PURE__ */ t(f, {}),
          tooltipContent: e("webdoxAI.assistantLayout.dynamicViewTooltip"),
          onClick: c,
          zIndex: a
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          "data-testid": `${o}--close-button`,
          kind: "control",
          size: "32px",
          onClick: l,
          children: /* @__PURE__ */ t(I, { size: 16 })
        }
      )
    ] }),
    d
  ] });
}, w = ({
  children: o,
  activeKey: i,
  onChange: r
}) => /* @__PURE__ */ t(
  S,
  {
    "data-testid": "assistant-layout-tabs",
    activeKey: i,
    kind: "medium",
    onChange: r,
    overrides: g,
    children: o
  }
);
p.Tab = x;
p.Tabs = w;
export {
  p as AssistantLayout
};
//# sourceMappingURL=assistant-layout.js.map
