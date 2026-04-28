import { jsx as t } from "react/jsx-runtime";
import { useMemo as c } from "react";
import { Radio as f } from "baseui/radio";
import { mergeOverridesDeep as O } from "../../../utils/baseui/helpers.js";
import { BorderedRadioContent as b } from "./bordered-radio-content/bordered-radio-content.js";
import { getOverrides as g } from "./bordered-radio.styles.js";
const h = ({
  "data-testid": d,
  icon: i,
  title: m,
  description: s,
  overrides: r,
  value: e,
  ...a
}) => {
  const o = d ?? `radio-${e}`, n = c(() => {
    const p = g({
      "data-testid": o
    });
    return O(p, r);
  }, [o, r]);
  return /* @__PURE__ */ t(
    f,
    {
      ...a,
      value: e,
      overrides: n,
      labelPlacement: "bottom",
      children: /* @__PURE__ */ t(
        b,
        {
          description: s,
          icon: i,
          title: m
        }
      )
    }
  );
};
export {
  h as BorderedRadio
};
//# sourceMappingURL=bordered-radio.js.map
