import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as e } from "react-hook-form";
import { UserSelectControl as m } from "./user-select-control.js";
const C = (o) => {
  const r = e();
  return /* @__PURE__ */ t(
    m,
    {
      ...r,
      ...o
    }
  );
};
export {
  C as UserSelectControlContainer
};
//# sourceMappingURL=user-select-control-container.js.map
