import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { RadioGroupControl as i } from "./radio-group-control.js";
const a = (o) => {
  const r = m();
  return /* @__PURE__ */ t(
    i,
    {
      ...r,
      ...o
    }
  );
};
export {
  a as RadioGroupControlContainer
};
//# sourceMappingURL=radio-group-control-container.js.map
