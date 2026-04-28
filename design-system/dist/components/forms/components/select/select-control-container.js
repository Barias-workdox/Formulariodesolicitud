import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { SelectControl as e } from "./select-control.js";
const C = (o) => {
  const t = m();
  return /* @__PURE__ */ r(
    e,
    {
      ...t,
      ...o
    }
  );
};
export {
  C as SelectControlContainer
};
//# sourceMappingURL=select-control-container.js.map
