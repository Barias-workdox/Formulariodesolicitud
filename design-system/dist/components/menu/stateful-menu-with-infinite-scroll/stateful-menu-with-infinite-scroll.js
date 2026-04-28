import { jsx as S } from "react/jsx-runtime";
import { useMemo as n } from "react";
import { StatefulMenu as d } from "baseui/menu";
import { mergeOverridesDeep as a } from "../../utils/baseui/helpers.js";
import { StyledListWithInfiniteScroll as v } from "./components/styled-list-with-infinite-scroll.js";
const I = ({
  dataTestId: t = "menu",
  isLoadingMore: e,
  items: r,
  overrides: p = {},
  onLoadMore: s,
  ...c
}) => {
  const u = Array.isArray(r) ? [...r] : { ...r }, {
    List: { style: o, props: i },
    ...l
  } = p, m = n(
    () => ({
      List: {
        component: v,
        props: {
          ...i,
          dataTestId: `${t}__list`,
          isLoadingMore: e,
          onLoadMore: s
        },
        style: o
      },
      EmptyState: {
        style: ({ $theme: y }) => ({
          color: y.colors.neutralSubdued
        })
      }
    }),
    [t, e, i, o, s]
  ), f = n(
    () => a(m, l),
    [m, l]
  );
  return /* @__PURE__ */ S(
    d,
    {
      ...c,
      items: u,
      overrides: f
    }
  );
};
export {
  I as StatefulMenuWithInfiniteScroll
};
//# sourceMappingURL=stateful-menu-with-infinite-scroll.js.map
