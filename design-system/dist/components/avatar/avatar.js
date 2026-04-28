import { jsx as r, Fragment as u } from "react/jsx-runtime";
import { useMemo as A } from "react";
import { Avatar as O } from "baseui/avatar";
import { StatefulTooltipNext as h } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { mergeOverridesDeep as l } from "../utils/baseui/helpers.js";
import { COMMON_HEIGHT_32 as g } from "../../constants/common.constants.js";
import { getAvatarOverrides as x } from "./avatar.overrides.js";
import { AvatarAnchor as M } from "./avatar.styles.js";
const D = ({
  "data-testid": e = "avatar",
  backgroundColor: o = "brandSubdued",
  disabled: m,
  size: t = g,
  initials: p,
  name: a = "",
  overrides: i,
  showTooltip: s = !0,
  zIndex: v,
  src: c
}) => {
  const d = A(() => {
    const f = x({
      backgroundColor: o,
      disabled: m,
      "data-testid": e,
      size: t
    });
    return l(f, i);
  }, [o, m, e, t, i]), n = /* @__PURE__ */ r(
    O,
    {
      size: t,
      initials: p,
      name: a,
      src: c,
      overrides: d
    }
  );
  return s ? /* @__PURE__ */ r(
    h,
    {
      content: a,
      showArrow: !0,
      placement: "bottom",
      zIndex: v,
      children: /* @__PURE__ */ r(M, { children: n })
    }
  ) : /* @__PURE__ */ r(u, { children: n });
};
export {
  D as Avatar
};
//# sourceMappingURL=avatar.js.map
