import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { AddAlt as C } from "@carbon/icons-react";
import { Button as k } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
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
import "baseui/popover";
import "../../../../../popover/popover.styles.js";
import { StatelessPopover as v } from "../../../../../popover/stateless-popover.js";
import { Text as a } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as P } from "../../../../../utils/i18n/utils.js";
import { BlockedFeatureTooltip as $ } from "../../../blocked-feature-tooltip/blocked-feature-tooltip.js";
import { CustomPromptItem as b } from "./components/custom-prompt-item/custom-prompt-item.js";
import { CustomPromptsEmptyState as A } from "./components/custom-prompts-empty-state/custom-prompts-empty-state.js";
import { styles as d } from "./custom-prompts-popover.styles.js";
import "./styled-components/styled-empty-state-container.js";
import { StyledFooter as B } from "./styled-components/styled-footer.js";
import { StyledPopoverContent as T } from "./styled-components/styled-popover-content.js";
import { StyledPromptsList as _ } from "./styled-components/styled-prompts-list.js";
import { StyledHeader as g } from "./styled-components/styled-header.js";
import "./styled-components/styled-list-item-end-enhancer.js";
import { StyledListContainer as F } from "./styled-components/styled-list-container.js";
const ht = ({
  "data-testid": p = "custom-prompts-popover",
  zIndex: r,
  children: c,
  prompts: e = [],
  isEditingDisabled: i,
  isOpen: f,
  onClose: n,
  onCreateButtonClick: u,
  onCustomPromptClick: h,
  onCustomPromptDelete: y,
  onCustomPromptEdit: S
}) => {
  const { t: l } = P(), { theme: s } = x();
  return /* @__PURE__ */ t(
    v,
    {
      isOpen: f,
      onClickOutside: n,
      ignoreBoundary: !0,
      placement: "topLeft",
      onEsc: n,
      autoFocus: !1,
      zIndex: r,
      content: /* @__PURE__ */ m(T, { children: [
        e.length === 0 ? /* @__PURE__ */ t(A, {}) : /* @__PURE__ */ m(F, { children: [
          /* @__PURE__ */ m(g, { children: [
            /* @__PURE__ */ t(
              a,
              {
                variant: "upperDetails",
                color: "neutralSubdued",
                margin: 0,
                $style: d.titleTextStyles(s),
                children: l("webdoxAI.chat.customPrompts.myPrompts")
              }
            ),
            /* @__PURE__ */ t(
              a,
              {
                variant: "upperDetails",
                color: "brand",
                margin: 0,
                $style: d.titleTextStyles(s),
                children: `(${e.length})`
              }
            )
          ] }),
          /* @__PURE__ */ t(_, { children: e.map((o) => /* @__PURE__ */ t(
            b,
            {
              "data-testid": `${p}__item-${o.id}`,
              isEditingDisabled: i,
              itemData: o,
              zIndex: r,
              onClick: () => h(o),
              onDelete: () => y(o),
              onEdit: () => S(o)
            },
            o.id
          )) })
        ] }),
        /* @__PURE__ */ t(B, { children: /* @__PURE__ */ t(
          $,
          {
            isBlocked: i,
            zIndex: r,
            children: /* @__PURE__ */ t(
              k,
              {
                "data-testid": `${p}__create-button`,
                kind: "link-secondary",
                size: "32px",
                startEnhancer: /* @__PURE__ */ t(C, {}),
                onClick: u,
                disabled: i,
                children: l("webdoxAI.chat.customPrompts.addCustomPrompt")
              }
            )
          }
        ) })
      ] }),
      children: c
    }
  );
};
export {
  ht as CustomPromptsPopover
};
//# sourceMappingURL=custom-prompts-popover.js.map
