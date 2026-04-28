import { jsx as o } from "react/jsx-runtime";
import { HeaderNavigation as a, StyledNavigationList as n } from "baseui/header-navigation";
const s = ({
  children: i,
  showBorderBottom: e,
  overrides: t = {}
}) => /* @__PURE__ */ o(
  a,
  {
    overrides: {
      Root: {
        style: ({ $theme: r }) => ({
          paddingLeft: "1rem",
          paddingRight: "1rem",
          background: "white",
          borderBottom: e ? `1px solid ${r.colors.divisionLine}` : "none"
        }),
        ...t.Root
      }
    },
    children: /* @__PURE__ */ o(n, { $align: "center", children: i })
  }
);
export {
  s as HeaderNavigation
};
//# sourceMappingURL=header-navigation.js.map
