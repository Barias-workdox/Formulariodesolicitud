import { jsx as F } from "react/jsx-runtime";
import { forwardRef as G } from "react";
import { Block as H } from "baseui/block";
import { spacing as o } from "../utils/spacing.js";
const O = G(function(i, d) {
  const {
    backgroundColor: p,
    bg: c,
    p: t,
    px: g,
    py: m,
    pl: f,
    pr: s,
    pt: e,
    pb: l,
    m: n,
    mx: r,
    my: a,
    ml: B,
    mr: _,
    mt: h,
    mb: R,
    paddingLeft: k,
    paddingRight: L,
    paddingBottom: T,
    paddingTop: b,
    marginLeft: u,
    marginRight: x,
    marginBottom: y,
    marginTop: C,
    ...j
  } = i, w = k ?? o(f || g || t || 0), $ = L ?? o(s || g || t || 0), q = T ?? o(l || m || t || 0), v = b ?? o(e || m || t || 0), z = u ?? o(B || r || n || 0), A = x ?? o(_ || r || n || 0), D = C ?? o(h || a || n || 0), E = y ?? o(R || a || n || 0);
  return /* @__PURE__ */ F(
    H,
    {
      ...j,
      ref: d,
      backgroundColor: p || c,
      paddingLeft: w,
      paddingRight: $,
      paddingBottom: q,
      paddingTop: v,
      marginLeft: z,
      marginRight: A,
      marginTop: D,
      marginBottom: E,
      children: i.children
    }
  );
});
export {
  O as Block
};
//# sourceMappingURL=block.js.map
