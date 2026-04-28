import { jsx as a } from "react/jsx-runtime";
import { themedStyled as m } from "../../../themes/utilities.js";
import { useHeader as d } from "../header.provider.js";
import { composeDataTestId as n } from "../utils/compose-data-test-id.js";
import { getIconSize as p } from "../utils/size-maps.js";
const c = m(
  "span",
  ({ $size: t, $isDisabled: e }) => ({
    opacity: e ? 0.2 : 1,
    fontSize: p(t)
  })
), I = ({ symbol: t, label: e }) => {
  const { size: i, dataTestId: o, isDisabled: r = !1 } = d(), s = n(`${o}-emoji`);
  return /* @__PURE__ */ a(
    c,
    {
      role: "img",
      $size: i ?? "medium",
      "aria-label": e || "",
      "aria-hidden": e ? "false" : "true",
      "data-testid": s,
      $isDisabled: r,
      children: t
    }
  );
};
export {
  I as HeaderEmoji
};
//# sourceMappingURL=header-emoji.js.map
