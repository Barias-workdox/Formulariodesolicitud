import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { InputControl as n } from "./input-control.js";
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
  f as InputControlContainer
};
//# sourceMappingURL=input-control-container.js.map
