import { jsxs as r, jsx as n } from "react/jsx-runtime";
import { useCss as c } from "../../utils/hooks/use-css.js";
import { titleLayoutStyles as y, TitleLayoutContainer as m, TitleLayoutTitleContainer as C, TitleLayoutSubtitleContainer as d } from "./title-layout.styles.js";
const p = ({
  titleText: e,
  startEnhancer: o = null,
  subtitleText: l = null,
  onClick: a = null,
  overrides: t = {},
  "data-testid": s
}) => {
  const i = o !== null, { iconContainer: u } = c(y, { hasIcon: i, overrides: t });
  return /* @__PURE__ */ r(
    m,
    {
      "data-testid": s,
      $hasIcon: i,
      $style: t.Root,
      onClick: a,
      children: [
        /* @__PURE__ */ n("div", { className: u, children: o }),
        /* @__PURE__ */ n(
          C,
          {
            $hasSubtitle: l !== null,
            $style: t.TitleContainer,
            children: e
          }
        ),
        l && /* @__PURE__ */ n(d, { $style: t.SubtitleContainer, children: l })
      ]
    }
  );
};
export {
  p as TitleLayout
};
//# sourceMappingURL=title-layout.js.map
