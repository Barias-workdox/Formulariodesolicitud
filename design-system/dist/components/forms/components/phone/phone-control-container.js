import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { PhoneControl as n } from "./phone-control.js";
const h = (o) => {
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
  h as PhoneControlContainer
};
//# sourceMappingURL=phone-control-container.js.map
