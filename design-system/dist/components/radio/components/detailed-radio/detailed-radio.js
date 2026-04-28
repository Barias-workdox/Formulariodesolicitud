import { jsx as o } from "react/jsx-runtime";
import { useMemo as c } from "react";
import { Radio as f } from "baseui/radio";
import { mergeOverridesDeep as l } from "../../../utils/baseui/helpers.js";
import { DetailedRadioContent as O } from "./components/detailed-radio-content/detailed-radio-content.js";
import { detailedRadioOverrides as R } from "./detailed-radio.styles.js";
const x = ({
  "data-testid": d,
  children: i,
  description: a,
  icon: m,
  overrides: t,
  value: r,
  ...s
}) => {
  const e = d ?? `radio-${r}`, n = c(() => {
    const p = R({
      "data-testid": e
    });
    return l(p, t);
  }, [e, t]);
  return /* @__PURE__ */ o(
    f,
    {
      ...s,
      value: r,
      labelPlacement: "right",
      overrides: n,
      children: /* @__PURE__ */ o(
        O,
        {
          "data-testid": e,
          description: a,
          icon: m,
          children: i
        }
      )
    }
  );
};
export {
  x as DetailedRadio
};
//# sourceMappingURL=detailed-radio.js.map
