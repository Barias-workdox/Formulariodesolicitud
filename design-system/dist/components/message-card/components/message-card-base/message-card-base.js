import { jsx as s, jsxs as x, Fragment as q } from "react/jsx-runtime";
import { useMemo as M } from "react";
import { BackgroundIcon as E } from "../../../background-icon/background-icon.js";
import { withIsHovered as G } from "../../../hocs/with-is-hovered.js";
import { Text as H } from "../../../text/text.js";
import { noop as i } from "../../../../utils/noop.js";
import { getOverride as d, getOverrideProps as m } from "../../../../utils/overrides.utils.js";
import { getMessageCardColorsMap as J } from "../../message-card.styles.js";
import { MessageCardTitle as K } from "../message-card-title/message-card-title.js";
import { StyledBaseButton as L } from "./message-card-base.styles.js";
const N = ({
  "data-testid": e = "message-card",
  disabled: n = !1,
  isActive: r = !1,
  service: a = "default",
  titleDirection: O = "row",
  iconShape: p = "round",
  iconPosition: t = "default",
  isHovered: l = !1,
  Icon: o,
  title: v,
  description: u,
  overrides: w,
  onBlur: D = i,
  onClick: _ = i,
  onFocus: T = i
}) => {
  const {
    BackgroundIcon: c,
    Button: f,
    Description: g,
    Title: C
  } = w || {}, B = d(c) || E, b = d(f) || L, j = d(g) || H, y = d(C) || K, { backgroundIcon: $, contentTextColor: I } = M(
    () => J({
      $disabled: n,
      $isActive: r,
      $isHovered: l
    })[a],
    [n, r, l, a]
  ), z = !!u, h = M(() => {
    if (!o)
      return null;
    const { iconColor: F, backgroundColor: S } = $;
    return /* @__PURE__ */ s(
      B,
      {
        "data-testid": `${e}__title-icon-${t}`,
        Icon: o,
        shape: p,
        size: "24px",
        iconColor: F,
        backgroundColor: S,
        ...m(c)
      }
    );
  }, [
    o,
    B,
    e,
    p,
    t,
    $,
    c
  ]), k = () => /* @__PURE__ */ x(q, { children: [
    /* @__PURE__ */ s(
      y,
      {
        "data-testid": `${e}__title`,
        Icon: h,
        showIcon: t === "default",
        title: v,
        disabled: n,
        isActive: r,
        isHovered: l,
        service: a,
        titleDirection: O,
        ...m(C)
      }
    ),
    z && /* @__PURE__ */ s(
      j,
      {
        variant: "bodySmall",
        margin: 0,
        color: I,
        width: "100%",
        ...m(g),
        children: u
      }
    )
  ] });
  return /* @__PURE__ */ x(
    b,
    {
      $service: a,
      "data-testid": `${e}--button`,
      disabled: n,
      "aria-selected": r,
      $iconPosition: t,
      onBlur: D,
      onClick: _,
      onFocus: T,
      $isActive: r,
      ...m(f),
      children: [
        o && t === "left" && h,
        o && t === "left" ? /* @__PURE__ */ s("div", { children: k() }) : k()
      ]
    }
  );
}, tt = G(N);
export {
  tt as MessageCardBase
};
//# sourceMappingURL=message-card-base.js.map
