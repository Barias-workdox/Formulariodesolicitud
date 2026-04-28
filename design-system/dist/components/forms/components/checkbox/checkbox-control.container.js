import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { CheckboxControl as e } from "./checkbox-control.js";
const c = (o) => {
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
  c as CheckboxControlContainer
};
//# sourceMappingURL=checkbox-control.container.js.map
