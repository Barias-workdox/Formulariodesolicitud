import { jsx as r } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { SwitchControl as i } from "./switch-control.js";
const f = (o) => {
  const t = m();
  return /* @__PURE__ */ r(
    i,
    {
      ...t,
      ...o
    }
  );
};
export {
  f as SwitchControlContainer
};
//# sourceMappingURL=switch-control-container.js.map
