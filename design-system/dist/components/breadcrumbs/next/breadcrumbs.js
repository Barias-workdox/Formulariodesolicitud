import { jsxs as b, jsx as d } from "react/jsx-runtime";
import { Children as f, isValidElement as B, cloneElement as g } from "react";
import { Breadcrumbs as y } from "baseui/breadcrumbs";
import { mergeOverridesDeep as I } from "../../utils/baseui/helpers.js";
import { getOverrides as v } from "./breadcrumbs.styles.js";
import { BreadcrumbsItem as l } from "./components/breadcrumbs-item.js";
import { BreadcrumbsMenu as A } from "./components/breadcrumbs-menu.js";
const c = (m, s, o, n) => {
  const t = o === n - 1, r = o === 0;
  return g(s, { dataTestId: `${m}__item-${o}`, isLast: t, isFirst: r });
}, _ = ({
  dataTestId: m = "breadcrumbs",
  children: s,
  overrides: o = {},
  ...n
}) => {
  if (!s || Array.isArray(s) && s.length === 0)
    return null;
  const t = f.toArray(s).filter(
    (e) => B(e) && e.type === l
  ), r = t.length;
  if (r === 0)
    return null;
  const u = r > 3, i = t.slice(r > 2 ? -2 : -1), p = I(v(), o);
  return /* @__PURE__ */ b(
    y,
    {
      overrides: p,
      ...n,
      children: [
        r > 0 && c(m, t[0], 0, r),
        u && /* @__PURE__ */ d(
          A,
          {
            dataTestId: `${m}__menu`,
            breadcrumbs: t.slice(1, -2).map((e) => {
              var a;
              return {
                label: e.props.label,
                onClick: (a = e.props) == null ? void 0 : a.onClick
              };
            })
          }
        ),
        r > 1 && i.map(
          (e, a) => c(
            m,
            e,
            a + r - i.length,
            r
          )
        )
      ]
    }
  );
};
_.Item = l;
export {
  _ as Breadcrumbs
};
//# sourceMappingURL=breadcrumbs.js.map
