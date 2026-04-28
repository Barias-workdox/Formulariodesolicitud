import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { DynamicTextInputControl as n } from "./dynamic-text-input-control.js";
const u = (o) => {
  const t = m();
  return /* @__PURE__ */ r(
    n,
    {
      ...t,
      ...o
    }
  );
};
export {
  u as DynamicTextInputControlContainer
};
//# sourceMappingURL=dynamic-text-input-control-container.js.map
