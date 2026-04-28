import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { useCss as n } from "../../components/utils/hooks/use-css.js";
const c = ({ fill: o, height: l = "16", width: s = "16" }) => {
  const { theme: r } = n(), L = o ?? r.colors.neutral;
  return /* @__PURE__ */ e(
    "svg",
    {
      width: s,
      height: l,
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t(
          "path",
          {
            d: "M12.1016 0.0976562L13.0297 2.36052L15.6017 3.59776L13.0297 4.83547L12.1016 7.09787L11.1735 4.83547L8.60146 3.59776L11.1735 2.36052L12.1016 0.0976562Z",
            fill: L
          }
        ),
        /* @__PURE__ */ t(
          "path",
          {
            d: "M6.60156 3.60156L8.21901 7.54514L12.7013 9.70133L8.21901 11.8583L6.60156 15.8011L4.98412 11.8583L0.501796 9.70133L4.98412 7.54514L6.60156 3.60156Z",
            fill: L
          }
        )
      ]
    }
  );
};
export {
  c as StarIcon
};
//# sourceMappingURL=star-icon.js.map
