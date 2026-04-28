import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as i } from "react-hook-form";
import { SelectWithPaginationControl as n } from "./select-with-pagination-control.js";
const l = (o) => {
  const t = i();
  return /* @__PURE__ */ r(
    n,
    {
      ...t,
      ...o
    }
  );
};
export {
  l as SelectWithPaginationControlContainer
};
//# sourceMappingURL=select-with-pagination-control-container.js.map
