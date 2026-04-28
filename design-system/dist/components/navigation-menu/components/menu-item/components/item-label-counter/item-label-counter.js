import { jsx as n } from "react/jsx-runtime";
import { Tag as i } from "../../../../../tag/next/tag.js";
import { useThousandSeparatorLocale as m } from "../../../../../../hooks/use-thousand-separator-locale.js";
const u = ({
  dataTestId: t = "item-label-counter",
  isActive: e,
  disabled: r,
  counter: o = 0
}) => {
  const a = m(o);
  return /* @__PURE__ */ n(
    i,
    {
      "data-testid": t,
      kind: e ? "brand" : "neutral",
      variant: "outlined",
      shape: "pill",
      disabled: r,
      size: "sm",
      children: a
    }
  );
};
export {
  u as ItemLabelCounter
};
//# sourceMappingURL=item-label-counter.js.map
