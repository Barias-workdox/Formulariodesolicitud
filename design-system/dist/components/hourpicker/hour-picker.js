import { jsx as p } from "react/jsx-runtime";
import { Button as i } from "../button/next/button.js";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedStyled as l } from "../../themes/utilities.js";
const m = () => Array.from(Array(24).keys()).map((r) => {
  const t = r.toString();
  return {
    value: t,
    name: r === 23 ? `${t.padStart(2, "0")}:00 - 00:00` : `${t.padStart(2, "0")}:00 - ${String(r + 1).padStart(2, "0")}:00`
  };
}), u = l("div", ({ $theme: r }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, auto)",
  gap: r.spacing.spacingXs
})), $ = ({
  dataTestId: r = "hour-picker",
  value: t,
  updateLaboralSchedule: n
}) => /* @__PURE__ */ p(u, { children: m().map((e, o) => {
  const a = t.includes(o);
  return /* @__PURE__ */ p(
    i,
    {
      dataTestId: `${r}__hour-${e.value}`,
      size: "44px",
      type: "button",
      kind: a ? "brand" : "neutral",
      appearance: a ? "outlined" : "tonal",
      isSelected: a,
      onClick: () => n(o),
      children: e.name
    },
    `hour-${e.value}`
  );
}) });
export {
  $ as HourPicker,
  m as laboralScheduleOptions
};
//# sourceMappingURL=hour-picker.js.map
