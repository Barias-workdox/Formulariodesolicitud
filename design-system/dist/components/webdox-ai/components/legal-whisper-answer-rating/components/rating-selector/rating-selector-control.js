import { jsx as t } from "react/jsx-runtime";
import { Controller as a } from "react-hook-form";
import { RatingSelector as d } from "./rating-selector.js";
const p = ({
  "data-testid": r,
  name: o,
  defaultValue: e
}) => /* @__PURE__ */ t(
  a,
  {
    name: o,
    defaultValue: e,
    render: ({ field: { ref: i, ...n } }) => /* @__PURE__ */ t(
      d,
      {
        ref: i,
        "data-testid": r,
        ...n
      }
    )
  }
);
export {
  p as RatingSelectorControl
};
//# sourceMappingURL=rating-selector-control.js.map
