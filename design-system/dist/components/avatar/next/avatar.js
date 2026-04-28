import { jsx as e } from "react/jsx-runtime";
import { useMemo as l } from "react";
import { mergeOverrides as b } from "baseui";
import { Avatar as $ } from "baseui/avatar";
import { StatefulTooltipNext as M } from "../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { COMMON_HEIGHT_32 as w } from "../../../constants/common.constants.js";
import { getAvatarColorConfig as B, processInitials as H, getAvatarOverrides as N } from "./avatar.overrides.js";
import { AvatarAnchor as m } from "./avatar.styles.js";
const F = ({
  dataTestId: a = "avatar",
  disabled: r,
  size: t = w,
  initials: p,
  name: o = "",
  overrides: c,
  zIndex: C,
  src: g,
  kind: v = "users",
  appearance: f = "filled",
  clickable: n = !1,
  onClick: s,
  href: d,
  showTooltip: h = !0
}) => {
  const i = l(() => B(v, f), [v, f]), x = l(() => H(p, t, o), [p, t, o]), O = l(() => {
    const W = N({
      backgroundColor: i.backgroundColor,
      textColor: i.textColor,
      disabled: !!r,
      dataTestId: a,
      size: t,
      clickable: !!n,
      name: o
    });
    return b(W, c);
  }, [
    i.backgroundColor,
    i.textColor,
    r,
    a,
    t,
    n,
    o,
    c
  ]), u = /* @__PURE__ */ e(
    $,
    {
      size: t,
      initials: x,
      name: o,
      src: g,
      overrides: O
    }
  ), A = d ? /* @__PURE__ */ e(
    m,
    {
      $as: "a",
      href: d,
      onClick: n ? s : void 0,
      "aria-disabled": r,
      "data-testid": `${a}--link`,
      children: u
    }
  ) : n && s ? /* @__PURE__ */ e(
    m,
    {
      $as: "button",
      role: "button",
      onClick: s,
      disabled: r,
      "aria-disabled": r,
      "data-testid": `${a}--button`,
      children: u
    }
  ) : /* @__PURE__ */ e(m, { "aria-disabled": r, children: u });
  return h ? /* @__PURE__ */ e(
    M,
    {
      content: o,
      showArrow: !0,
      placement: "bottom",
      zIndex: C,
      children: A
    }
  ) : A;
};
export {
  F as Avatar
};
//# sourceMappingURL=avatar.js.map
