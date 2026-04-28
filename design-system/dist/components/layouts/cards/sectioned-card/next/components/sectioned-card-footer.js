import { jsx as d } from "react/jsx-runtime";
import { Footer as m } from "../../../../../footer/footer.container.js";
import { useSectionedCard as n } from "../sectioned-card.provider.js";
import { getFooterSize as a, getBorderRadiusSize as c } from "../utils/get-size-map.js";
const u = (e) => {
  const { size: o, cornerSize: r, isDisabled: t } = n(), i = a(o), s = c(r);
  return /* @__PURE__ */ d(
    m,
    {
      ...e,
      isDisabled: t,
      borderRadius: s,
      size: i
    }
  );
};
export {
  u as SectionedCardFooter
};
//# sourceMappingURL=sectioned-card-footer.js.map
