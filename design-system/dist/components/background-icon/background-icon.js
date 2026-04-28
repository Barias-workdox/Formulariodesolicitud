import { jsx as i } from "react/jsx-runtime";
import { COMMON_HEIGHT_32 as f } from "../../constants/common.constants.js";
import { getOverride as b, getOverrideProps as g } from "../../utils/overrides.utils.js";
import { StyledRoot as u } from "./background-icon.styles.js";
import { DeclarativeIcon as O } from "./components/declarative-icon/declarative-icon.js";
const B = ({
  "data-testid": o = "background-icon-next",
  backgroundColor: n = "brandDepressed",
  children: s,
  disabled: r = !1,
  Icon: t,
  iconColor: c = "brand",
  onClick: e,
  overrides: p,
  shape: m = "round",
  size: a = f,
  ...l
}) => {
  const { Root: d } = p || {}, $ = b(d ?? {}) || u;
  return /* @__PURE__ */ i(
    $,
    {
      "data-testid": `${o}--wrapper`,
      ...g(d),
      ...l,
      $backgroundColor: n,
      $size: a,
      $shape: m,
      $disabled: r,
      $isClickable: !!e,
      onClick: e,
      children: t ? /* @__PURE__ */ i(
        O,
        {
          Icon: t,
          "data-testid": `${o}--icon`,
          iconColor: c,
          size: a,
          disabled: r
        }
      ) : s
    }
  );
};
export {
  B as BackgroundIcon
};
//# sourceMappingURL=background-icon.js.map
