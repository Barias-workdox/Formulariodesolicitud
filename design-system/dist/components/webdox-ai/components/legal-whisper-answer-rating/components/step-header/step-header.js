import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { ChevronLeft as p } from "@carbon/icons-react";
import "../../../../../button/button.js";
import { IconButton as e } from "../../../../../button/variants/icon-button/icon-button.js";
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
import { Text as n } from "../../../../../text/text.js";
import "../../styled-components/styled-container.js";
import "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import { StyledTitleContainer as a } from "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
const A = ({
  "data-testid": r,
  onBack: o,
  title: i
}) => /* @__PURE__ */ m(a, { children: [
  /* @__PURE__ */ t(
    e,
    {
      onClick: o,
      size: "32px",
      "data-testid": `${r}--back-button`,
      children: /* @__PURE__ */ t(p, {})
    }
  ),
  /* @__PURE__ */ t(
    n,
    {
      variant: "body",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      margin: 0,
      children: i
    }
  )
] });
export {
  A as StepHeader
};
//# sourceMappingURL=step-header.js.map
