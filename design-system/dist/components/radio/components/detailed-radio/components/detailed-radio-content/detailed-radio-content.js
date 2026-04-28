import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { Text as l } from "../../../../../text/text.js";
import { useCss as m } from "../../../../../utils/hooks/use-css.js";
import { styles as c } from "./detailed-radio-content.styles.js";
const C = ({
  children: i,
  description: n,
  icon: t,
  "data-testid": r
}) => {
  const { contentContainerStyles: s, textContainerStyles: a, iconContainerStyles: d } = m(c);
  return /* @__PURE__ */ e("div", { className: s, children: [
    /* @__PURE__ */ e("div", { className: a, children: [
      /* @__PURE__ */ o(
        l,
        {
          variant: "body",
          fontWeight: "500",
          color: "neutral",
          margin: 0,
          children: i
        }
      ),
      n
    ] }),
    t && /* @__PURE__ */ o(
      "div",
      {
        "data-testid": `${r}--icon`,
        className: d,
        children: t
      }
    )
  ] });
};
export {
  C as DetailedRadioContent
};
//# sourceMappingURL=detailed-radio-content.js.map
