import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { BasicMessageBoxActions as l } from "../basic-message-box-actions/basic-message-box-actions.js";
import { StyledContainer as d } from "./styled-components/styled-container.js";
import { StyledExtraActionsContainer as x } from "./styled-components/styled-extra-actions-container.js";
const B = ({
  extraActions: n,
  primaryButtonIcon: t,
  primaryButtonProps: e,
  primaryButtonText: i,
  secondaryButtonIcon: s,
  secondaryButtonProps: a,
  secondaryButtonText: p,
  onSecondaryButtonClick: c
}) => /* @__PURE__ */ m(d, { children: [
  /* @__PURE__ */ r(x, { children: n && /* @__PURE__ */ r(
    "span",
    {
      onClick: (o) => o.stopPropagation(),
      onKeyDown: (o) => o.stopPropagation(),
      role: "presentation",
      children: n
    }
  ) }),
  /* @__PURE__ */ r(
    l,
    {
      onSecondaryButtonClick: c,
      primaryButtonIcon: t,
      primaryButtonProps: e,
      primaryButtonText: i,
      secondaryButtonIcon: s,
      secondaryButtonProps: a,
      secondaryButtonText: p
    }
  )
] });
export {
  B as MessageBoxActions
};
//# sourceMappingURL=message-box-actions.js.map
