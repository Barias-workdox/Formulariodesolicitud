import { jsx as f } from "react/jsx-runtime";
import { useMemo as m } from "react";
import { mergeOverridesDeep as l } from "../utils/baseui/helpers.js";
import { StatefulMenuWithInfiniteScroll as c } from "../menu/stateful-menu-with-infinite-scroll/stateful-menu-with-infinite-scroll.js";
import { Select as u } from "../select/select.js";
import { optionContentOverrideStyle as S } from "./select-with-pagination.styles.js";
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
        component: c,
        props: { dataTestId: e, isLoadingMore: t, onLoadMore: o }
      }
    }),
    [e, t, o]
  ), s = m(
    () => l(i, r),
    [i, r]
  );
  return /* @__PURE__ */ f(
    u,
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
