import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { ColorPickerControl as i } from "./color-picker-control.js";
const l = (o) => {
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
  l as ColorPickerControlContainer
};
//# sourceMappingURL=color-picker-control-container.js.map
