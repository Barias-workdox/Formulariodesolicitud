import { jsx as r } from "react/jsx-runtime";
import { EntitiesMultiSelect as i } from "../../../entities-multiselect/entities-multiselect.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import { useFormContext as e } from "react-hook-form";
const u = (t) => {
  const o = e();
  return /* @__PURE__ */ r(
    i,
    {
      ...o,
      ...t
    }
  );
};
export {
  u as EntitiesMultiselectControlContainer
};
//# sourceMappingURL=entities-multiselect-control-container.js.map
