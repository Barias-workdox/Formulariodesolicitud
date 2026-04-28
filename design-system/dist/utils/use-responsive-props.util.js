import { useMedia as i } from "react-use";
import { mediaQueries as s } from "../themes/v3/tokens/breakpoints.js";
const f = (r, t) => {
  const m = i(s.extralarge), a = i(s.large), l = i(s.medium), n = i(s.small);
  let e;
  return m && "extralarge" in r ? e = "extralarge" : a && "large" in r ? e = "large" : l && "medium" in r ? e = "medium" : n && "small" in r ? e = "small" : e = "extrasmall", e && e in r ? r[e] : t;
};
export {
  f as useResponsiveProps
};
//# sourceMappingURL=use-responsive-props.util.js.map
