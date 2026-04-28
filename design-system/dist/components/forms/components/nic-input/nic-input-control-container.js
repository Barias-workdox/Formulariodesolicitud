import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { NicInputControl as n } from "./nic-input-control.js";
const C = (o) => {
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
  C as NicInputControlContainer
};
//# sourceMappingURL=nic-input-control-container.js.map
