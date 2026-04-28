import { jsxs as d, jsx as l } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { isNil as $ } from "lodash";
import { resolveEnhancer as a } from "../../utils/resolve-enhancer.util.js";
import { StyledContainer as h } from "./styled-components/styled-container.js";
import { StyledLeading as y } from "./styled-components/styled-leading.js";
import { StyledPrefixText as S } from "./styled-components/styled-prefix-text.js";
import { StyledRightColumn as u } from "./styled-components/styled-right-column.js";
const b = ({
  "data-testid": m,
  leading: o,
  prefixText: i,
  size: e,
  startEnhancer: r,
  ...t
}) => {
  const { $disabled: n, $isReadOnly: c } = t, f = s(
    () => a(r, t),
    [r, t]
  ), p = s(() => a(o, t), [o, t]);
  return /* @__PURE__ */ d(
    h,
    {
      $size: e,
      $withLeftPadding: $(o),
      children: [
        o && /* @__PURE__ */ l(
          y,
          {
            $size: e,
            $isReadOnly: c,
            "data-testid": `${m}--leading`,
            children: p
          }
        ),
        (i || r) && /* @__PURE__ */ d(u, { $disabled: n, children: [
          f,
          i && /* @__PURE__ */ l(
            S,
            {
              $size: e,
              $disabled: n,
              "data-testid": `${m}--prefix-text`,
              children: i
            }
          )
        ] })
      ]
    }
  );
};
export {
  b as CompoundStartEnhancer
};
//# sourceMappingURL=compound-start-enhancer.js.map
