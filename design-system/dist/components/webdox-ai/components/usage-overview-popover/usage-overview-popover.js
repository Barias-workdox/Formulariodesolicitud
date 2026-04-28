import { jsx as n, jsxs as a } from "react/jsx-runtime";
import { Popover as d } from "../../../popover/popover.js";
import "react";
import "baseui/popover";
import "baseui";
import "../../../popover/popover.styles.js";
import { addExtraProps as P } from "../../../../utils/add-extra-props.js";
import { UsageOverviewPopoverHeader as f } from "./components/usage-overview-popover-header/usage-overview-popover-header.js";
import { UsageOverviewPopoverBody as w } from "./components/usage-overview-popover-body/usage-overview-popover-body.js";
import "./styled-components/styled-header.js";
import { StyledPopoverContent as x } from "./styled-components/styled-popover-content.js";
import "./styled-components/styled-title-container.js";
import "./styled-components/styled-body.js";
import "./styled-components/styled-progress-bar-container.js";
const o = ({
  children: t,
  header: r,
  body: e,
  footer: p,
  placement: m,
  zIndex: i
}) => /* @__PURE__ */ n(
  d,
  {
    placement: m,
    zIndex: i,
    content: ({ close: s }) => {
      const v = r ? P(r, { close: s }) : null;
      return /* @__PURE__ */ a(x, { children: [
        v,
        e,
        p
      ] });
    },
    showArrow: !0,
    children: t
  }
);
o.Header = f;
o.Body = w;
export {
  o as UsageOverviewPopover
};
//# sourceMappingURL=usage-overview-popover.js.map
