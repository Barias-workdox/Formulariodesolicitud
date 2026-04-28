import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as n } from "react-hook-form";
import { PhoneInputControl as m } from "./phone-input-control.js";
const f = (o) => {
  const t = n();
  return /* @__PURE__ */ r(
    m,
    {
      ...t,
      ...o
    }
  );
};
export {
  f as PhoneInputControlContainer
};
//# sourceMappingURL=phone-input-control-container.js.map
