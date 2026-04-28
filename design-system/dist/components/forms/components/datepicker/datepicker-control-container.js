import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { DatePickerControl as e } from "./datepicker-control.js";
const a = (o) => {
  const r = m();
  return /* @__PURE__ */ t(
    e,
    {
      ...r,
      ...o
    }
  );
};
export {
  a as DatePickerControlContainer
};
//# sourceMappingURL=datepicker-control-container.js.map
