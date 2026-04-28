import { jsx as f } from "react/jsx-runtime";
import { useMemo as m } from "react";
import { StatefulMenuWithInfiniteScroll as l } from "../../menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.js";
import { Select as c } from "../../select/next/select.js";
import { mergeOverridesDeep as u } from "../../utils/baseui/helpers.js";
import { optionContentOverrideStyle as S } from "../select-with-pagination.styles.js";
const x = ({
  "data-testid": e = "select",
  isLoadingMore: t,
  options: n = [],
  overrides: r,
  onLoadMore: o,
  ...p
}) => {
  const i = m(
    () => ({
      OptionContent: {
        style: S
      },
      StatefulMenu: {
        component: l,
        props: {
          dataTestId: e,
          isLoadingMore: t,
          onLoadMore: o
        }
      }
    }),
    [e, t, o]
  ), s = m(
    () => u(i, r),
    [i, r]
  );
  return /* @__PURE__ */ f(
    c,
    {
      "data-testid": e,
      options: n,
      overrides: s,
      ...p
    }
  );
};
export {
  x as SelectWithPagination
};
//# sourceMappingURL=select-with-pagination.js.map
