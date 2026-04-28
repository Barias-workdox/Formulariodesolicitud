import { jsx as t } from "react/jsx-runtime";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as m } from "react-hook-form";
import { TextareaControl as e } from "./textarea-control.js";
const C = (o) => {
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
  C as TextareaControlContainer
};
//# sourceMappingURL=textarea-control-container.js.map
