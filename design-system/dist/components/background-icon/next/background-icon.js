import { jsxs as O, jsx as a } from "react/jsx-runtime";
import { useMemo as m } from "react";
import { DISABLED_COLORS as _, BACKGROUND_ICON_COLORS as u, BACKGROUND_ICON_DEFAULTS as t, BACKGROUND_ICON_SIZE_MAP as S, BACKGROUND_ICON_TEST_ID as B } from "./background-icon.constants.js";
import { StyledRoot as $, StyledIconWrapper as D } from "./background-icon.styles.js";
import { Badge as N } from "./components/badge/badge.js";
const g = (o) => o === "brand" || o === "neutral", E = ({
  dataTestId: o = B,
  icon: s,
  size: n = t.size,
  kind: r = t.kind,
  appearance: i = t.appearance,
  shape: c = t.shape,
  disabled: e = !1,
  badge: C
}) => {
  const d = m(
    () => e ? _ : u[r][i],
    [e, r, i]
  ), { iconSize: l } = S[n], p = C && g(r);
  return /* @__PURE__ */ O(
    $,
    {
      "data-testid": `${o}--wrapper`,
      $backgroundColor: d.backgroundColor,
      $size: n,
      $shape: c,
      $disabled: e,
      "aria-hidden": "true",
      role: "presentation",
      children: [
        /* @__PURE__ */ a(
          D,
          {
            "data-testid": `${o}--icon`,
            $iconColor: d.iconColor,
            $disabled: e,
            children: /* @__PURE__ */ a(
              s,
              {
                size: l,
                "aria-hidden": "true"
              }
            )
          }
        ),
        p && /* @__PURE__ */ a(
          N,
          {
            kind: r,
            size: n,
            shape: c,
            "data-testid": `${o}--badge`
          }
        )
      ]
    }
  );
};
export {
  E as BackgroundIcon
};
//# sourceMappingURL=background-icon.js.map
