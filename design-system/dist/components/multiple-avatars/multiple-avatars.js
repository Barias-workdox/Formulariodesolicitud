import { jsx as r, jsxs as u } from "react/jsx-runtime";
import { Avatar as c } from "../avatar/avatar.js";
import { AvatarAnchor as v } from "../avatar/avatar.styles.js";
import { StatefulTooltipNext as h } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { COMMON_HEIGHT_32 as g } from "../../constants/common.constants.js";
import { MAX_AVATAR_COUNT as A } from "./multiple-avatars.constants.js";
import { getAvatarCounterOverrides as C } from "./multiple-avatars.overrides.js";
import { MultipleAvatarsRoot as M } from "./multiple-avatars.styles.js";
const b = (t) => `+${t > A ? A : t}`, $ = {
  default: "brand",
  companies: "power",
  groups: "neutral",
  brain: "powerSubdued"
}, R = ({
  avatars: t,
  "data-testid": e = "multiple-avatars",
  variant: a = "default",
  size: n = g,
  zIndex: o,
  showTooltip: i = !0
}) => {
  if (t.length === 0)
    return null;
  const [d, ...s] = t, { length: l } = s, p = /* @__PURE__ */ r(
    c,
    {
      "data-testid": `${e}-counter`,
      initials: b(l),
      size: n,
      zIndex: o,
      overrides: C({ variant: a }),
      showTooltip: !1
    }
  );
  return /* @__PURE__ */ u(M, { children: [
    /* @__PURE__ */ r(
      c,
      {
        ...d,
        "data-testid": `${e}-index-1`,
        backgroundColor: $[a],
        size: n,
        zIndex: o,
        showTooltip: i
      }
    ),
    l > 0 && (i ? /* @__PURE__ */ r(
      h,
      {
        zIndex: o,
        showArrow: !0,
        placement: "bottom",
        content: s.map(({ name: m }, f) => /* @__PURE__ */ u("span", { children: [
          m,
          /* @__PURE__ */ r("br", {})
        ] }, `${m}-${f}`)),
        children: /* @__PURE__ */ r(v, { children: p })
      }
    ) : p)
  ] });
};
export {
  R as MultipleAvatars,
  b as getAvatarCounter
};
//# sourceMappingURL=multiple-avatars.js.map
