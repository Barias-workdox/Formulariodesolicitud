import { jsx as t } from "react/jsx-runtime";
import { useState as a, useEffect as m } from "react";
import { Text as c } from "../../../text/text.js";
import { TEXT_ROTATOR_TRANSITION_DURATION as T } from "./text-rotator.constants.js";
import { StyledOverflowContainer as d, StyledTextRotatorContainer as f, StyledTextContainer as p } from "./text-rotator.styles.js";
const R = ({ texts: e, align: o }) => {
  const [i, l] = a(0);
  return m(() => {
    const n = setInterval(() => {
      l((r) => r === e.length - 1 ? 0 : r + 1);
    }, T);
    return () => clearInterval(n);
  }, [e.length]), /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(
    f,
    {
      $textIndex: i,
      $align: o,
      children: e.map((n, r) => /* @__PURE__ */ t(p, { children: /* @__PURE__ */ t(
        c,
        {
          variant: "microCopy",
          margin: 0,
          color: "neutral",
          children: n
        }
      ) }, r))
    }
  ) });
};
export {
  R as TextRotator
};
//# sourceMappingURL=text-rotator.js.map
