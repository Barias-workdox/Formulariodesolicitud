import { jsxs as h, jsx as v } from "react/jsx-runtime";
import { useMemo as C } from "react";
import { getMessageCardColorsMap as M } from "../../message-card.styles.js";
import { Text as O } from "../../../text/text.js";
import { getOverride as a, getOverrideProps as l } from "../../../../utils/overrides.utils.js";
import { StyledRoot as R } from "./message-card-title.styles.js";
const P = ({
  "data-testid": m = "message-card-title",
  disabled: t,
  Icon: e,
  showIcon: n = !1,
  isActive: o,
  isHovered: r = !1,
  service: i = "default",
  title: f,
  titleDirection: p,
  overrides: c
}) => {
  const { Root: s, Title: d } = c || {}, g = a(s) || R, T = a(d) || O, { titleTextColor: x } = C(
    () => M({
      $disabled: t,
      $isActive: o,
      $isHovered: r
    })[i],
    [t, o, r, i]
  );
  return /* @__PURE__ */ h(
    g,
    {
      $direction: p,
      "data-testid": m,
      ...l(s),
      children: [
        e && n && e,
        /* @__PURE__ */ v(
          T,
          {
            variant: "body",
            margin: 0,
            fontWeight: "700",
            color: x,
            width: "100%",
            ...l(d),
            children: f
          }
        )
      ]
    }
  );
};
export {
  P as MessageCardTitle
};
//# sourceMappingURL=message-card-title.js.map
