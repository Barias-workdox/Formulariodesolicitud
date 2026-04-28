import { jsxs as p, jsx as r } from "react/jsx-runtime";
import { SearchInput as s } from "./components/search-input/search-input.js";
import { StyledContainer as S, StyledBody as u } from "./search-container.styles.js";
const f = ({
  dataTestId: t,
  children: e,
  searchValue: n,
  searchPlaceholder: a,
  minWidth: o,
  maxWidth: h,
  maxHeight: i,
  isFiltrable: m = !0,
  autoFocus: d = !0,
  onSearchChange: c
}) => /* @__PURE__ */ p(
  S,
  {
    $minWidth: o,
    $maxWidth: h,
    $maxHeight: i,
    children: [
      m && /* @__PURE__ */ r(
        s,
        {
          dataTestId: `${t}--search-input`,
          autoFocus: d,
          searchValue: n,
          searchPlaceholder: a,
          onSearchChange: c
        }
      ),
      /* @__PURE__ */ r(u, { children: e })
    ]
  }
);
export {
  f as SearchContainer
};
//# sourceMappingURL=search-container.js.map
