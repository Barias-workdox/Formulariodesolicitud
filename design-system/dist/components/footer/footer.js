import { jsxs as S, jsx as l } from "react/jsx-runtime";
import { Text as u } from "../text/text.js";
import { getAllAllowedComponent as x } from "../../utils/react.utils.js";
import { ALLOWED_FOOTER_ACTIONS_ELEMENTS as A } from "./constants/allowed-elements.constant.js";
import { FooterWrapper as C, FooterActionsWrapper as E } from "./footer.styled.js";
import { composeDataTestId as T } from "./utils/compose-data-test-id.js";
import { getGapSize as h, getPaddingSize as $ } from "./utils/size-maps.js";
const b = ({
  text: t,
  dataTestId: a,
  size: o = "small",
  borderRadius: d = "borderSm",
  slot: i,
  isDisabled: e,
  actions: p
}) => {
  const r = i, s = !!t && o !== "large", m = !!r, c = $(o), n = h(o), g = x(p, A), f = T(a ?? "");
  return /* @__PURE__ */ S(
    C,
    {
      "data-testid": f,
      role: "contentinfo",
      $borderRadius: d,
      $padding: c,
      $isDisabled: e,
      $gap: n,
      children: [
        m && r,
        s && /* @__PURE__ */ l(
          u,
          {
            variant: "microCopy",
            color: e ? "neutralDepressed" : "neutral",
            margin: 0,
            children: t
          }
        ),
        /* @__PURE__ */ l(E, { $gap: n, children: g })
      ]
    }
  );
};
export {
  b as FooterComponent
};
//# sourceMappingURL=footer.js.map
