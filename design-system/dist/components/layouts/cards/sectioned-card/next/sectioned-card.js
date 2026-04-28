import { jsxs as s } from "react/jsx-runtime";
import { getAllowedComponent as e, getAllAllowedComponent as p } from "../../../../../utils/react.utils.js";
import { ALLOWED_SECTIONED_CARD_BODY_ELEMENTS as _ } from "./constants/allowed-body-elements.constant.js";
import { ALLOWED_SECTIONED_CARD_HEADER_ELEMENTS as C, ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS as D } from "./constants/allowed-elements.constant.js";
import { SectionedCardWrapper as A } from "./sectioned-card.styled.js";
import { getBorderRadiusSize as c } from "./utils/get-size-map.js";
const N = ({
  header: r,
  body: t,
  footer: E,
  hasElevation: d,
  cornerSize: n
}) => {
  const l = e(r, C), o = e(E, D), m = p(t, _), i = !!o, a = c(n);
  return /* @__PURE__ */ s(
    A,
    {
      $hasElevation: d,
      $borderRadius: a,
      children: [
        l,
        m,
        i && o
      ]
    }
  );
};
export {
  N as SectionedCardComponent
};
//# sourceMappingURL=sectioned-card.js.map
