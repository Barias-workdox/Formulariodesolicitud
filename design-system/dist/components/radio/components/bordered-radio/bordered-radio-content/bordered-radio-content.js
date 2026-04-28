import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { Text as o } from "../../../../text/text.js";
import { useCss as d } from "../../../../utils/hooks/use-css.js";
import { styles as s } from "./bordered-radio-content.styles.js";
const x = ({
  title: r,
  description: e,
  icon: n
}) => {
  const { containerStyles: i } = d(s);
  return /* @__PURE__ */ a("div", { className: i, children: [
    n,
    r && /* @__PURE__ */ t(
      o,
      {
        variant: "body",
        color: "neutralSubdued",
        textAlign: "center",
        fontWeight: 500,
        margin: 0,
        children: r
      }
    ),
    e && /* @__PURE__ */ t(
      o,
      {
        variant: "body",
        color: "neutralSubdued",
        textAlign: "center",
        margin: 0,
        children: e
      }
    )
  ] });
};
export {
  x as BorderedRadioContent
};
//# sourceMappingURL=bordered-radio-content.js.map
