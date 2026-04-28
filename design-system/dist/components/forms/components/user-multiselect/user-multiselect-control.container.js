import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as e } from "react-hook-form";
import { UserMultiselectControl as m } from "./user-multiselect-control.js";
const u = (o) => {
  const t = e();
  return /* @__PURE__ */ r(
    m,
    {
      ...t,
      ...o
    }
  );
};
export {
  u as UserMultiselectControlContainer
};
//# sourceMappingURL=user-multiselect-control.container.js.map
