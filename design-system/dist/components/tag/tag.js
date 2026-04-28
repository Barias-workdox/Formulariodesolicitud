import { jsxs as g, jsx as l } from "react/jsx-runtime";
import { useMemo as p } from "react";
import { Tag as f } from "baseui/tag";
import { mergeOverridesDeep as c } from "../utils/baseui/helpers.js";
import { useCss as u } from "../utils/hooks/use-css.js";
import { tagStyles as O, tagOverrides as v } from "./tag.styles.js";
const x = {};
function h({
  "data-testid": e = "design-system-tag",
  icon: r,
  children: i,
  kind: s = "neutral",
  overrides: t = x,
  variant: o = "solid",
  closeable: m = !1,
  ...n
}) {
  const { iconContainerStyles: a } = u(O), d = p(
    () => c(v({ $variant: o, $kind: s, dataTestId: e }), t),
    [t, o, s, e]
  );
  return /* @__PURE__ */ g(
    f,
    {
      closeable: m,
      overrides: d,
      ...n,
      kind: "neutral",
      children: [
        r && /* @__PURE__ */ l("span", { className: a, children: r }),
        i
      ]
    }
  );
}
export {
  h as Tag
};
//# sourceMappingURL=tag.js.map
