import { jsx as t } from "react/jsx-runtime";
import { useMemo as s } from "react";
import "baseui/popover";
import { mergeOverridesDeep as v } from "../../../../utils/baseui/helpers.js";
import "../../../../text/text.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import "@carbon/icons-react";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "../../../../information-popover/components/information-popover-header/information-popover-header.styles.js";
import { InformationPopover as P } from "../../../../information-popover/information-popover.js";
import { InformationPopoverContent as c } from "./components/information-popover-content/information-popover-content.js";
import { InformationPopoverTitle as u } from "./components/information-popover-title/information-popover-title.js";
import "./components/popover-title-with-icon/popover-title-with-icon.js";
import { getInformationPopoverOverrides as I } from "./webdox-ai-button-information-popover.overrides.js";
const H = ({
  "data-testid": r,
  user: m,
  variant: o,
  children: p,
  overrides: i = {},
  isDisabled: e,
  sendTextValue: n,
  onSubmit: f,
  ...a
}) => {
  const d = s(() => v(
    I({ popoverVariant: o }),
    i
  ), [i, o]);
  return /* @__PURE__ */ t(
    P,
    {
      ...a,
      "data-testid": r,
      overrides: d,
      title: /* @__PURE__ */ t(
        u,
        {
          "data-testid": `${r}__title`,
          popoverVariant: o,
          user: m
        }
      ),
      content: /* @__PURE__ */ t(
        c,
        {
          "data-testid": `${r}__content`,
          popoverVariant: o,
          isDisabled: e,
          onSubmit: f,
          sendTextValue: n
        }
      ),
      children: p
    }
  );
};
export {
  H as WebdoxAIButtonInformationPopover
};
//# sourceMappingURL=webdox-ai-button-information-popover.js.map
