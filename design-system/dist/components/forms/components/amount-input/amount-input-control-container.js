import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { AmountInputControl as n } from "./amount-input-control.js";
const f = (o) => {
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
  f as AmountInputControlContainer
};
//# sourceMappingURL=amount-input-control-container.js.map
