import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { CountryControl as n } from "./country-control.js";
const f = (o) => {
  const r = m();
  return /* @__PURE__ */ t(
    n,
    {
      ...r,
      ...o
    }
  );
};
export {
  f as CountryControlContainer
};
//# sourceMappingURL=country-control-container.js.map
