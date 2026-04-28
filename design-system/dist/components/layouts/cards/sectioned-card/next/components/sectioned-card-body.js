import { jsx as s, Fragment as p } from "react/jsx-runtime";
import { themedStyled as b } from "../../../../../../themes/utilities.js";
import { getAllowedComponent as S } from "../../../../../../utils/react.utils.js";
import { ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS as g } from "../constants/allowed-elements.constant.js";
import { useSectionedCard as B } from "../sectioned-card.provider.js";
import { getBorderRadiusSize as R, getSlotPadding as f } from "../utils/get-size-map.js";
const e = (o) => `1px solid ${o}`, m = b(
  "div",
  ({ $theme: o, $paddingSpacing: d, $hasBorderTop: t, $borderRadius: r = "borderNone" }) => ({
    padding: o.spacing[d],
    borderTop: t ? e(o.colors.neutralSubtle) : "none",
    borderLeft: e(o.colors.neutralSubtle),
    borderRight: e(o.colors.neutralSubtle),
    borderBottom: e(o.colors.neutralSubtle),
    borderRadius: `0 0 ${o.borders[r]} ${o.borders[r]}`,
    flexGrow: 1
  })
), O = ({ children: o, id: d }) => {
  const { size: t, cornerSize: r, activeKey: n, hasBorderHeader: l, footer: i } = B(), a = R(r), c = f(t), u = !!S(i, g) ? void 0 : a;
  return d === n || n === void 0 ? /* @__PURE__ */ s(
    m,
    {
      $hasBorderTop: l,
      $paddingSpacing: c,
      $borderRadius: u,
      children: o
    }
  ) : /* @__PURE__ */ s(p, {});
};
export {
  m as BodyWrapper,
  O as SectionedCardBody
};
//# sourceMappingURL=sectioned-card-body.js.map
