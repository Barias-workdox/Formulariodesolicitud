import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { Close as n } from "@carbon/icons-react";
import "../../../../../button/button.js";
import { IconButton as l } from "../../../../../button/variants/icon-button/icon-button.js";
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
import { Text as t } from "../../../../../text/text.js";
import { StyledHeader as a } from "../../styled-components/styled-header.js";
import "../../styled-components/styled-popover-content.js";
import { StyledTitleContainer as c } from "../../styled-components/styled-title-container.js";
import "../../styled-components/styled-body.js";
import "../../styled-components/styled-progress-bar-container.js";
const U = ({
  title: i,
  subtitle: m,
  startEnhancer: e,
  close: p
}) => /* @__PURE__ */ o(a, { children: [
  e,
  /* @__PURE__ */ o(c, { children: [
    /* @__PURE__ */ r(
      t,
      {
        variant: "h2",
        margin: 0,
        color: "neutralStrong",
        fontWeight: "700",
        children: i
      }
    ),
    /* @__PURE__ */ r(
      t,
      {
        variant: "bodySmall",
        margin: 0,
        color: "neutralStrong",
        children: m
      }
    )
  ] }),
  /* @__PURE__ */ r(
    l,
    {
      onClick: p,
      size: "32px",
      children: /* @__PURE__ */ r(n, {})
    }
  )
] });
export {
  U as UsageOverviewPopoverHeader
};
//# sourceMappingURL=usage-overview-popover-header.js.map
