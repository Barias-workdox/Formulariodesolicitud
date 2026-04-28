import { jsx as e } from "react/jsx-runtime";
import { NotebookReference as t } from "@carbon/icons-react";
import { COMMON_ICON_SIZE_16 as m } from "../../../constants/common.constants.js";
import { SelectPlaceholder as i } from "./components/select-placeholder.js";
const s = ({
  placeholder: o
}) => ({
  Placeholder: {
    component: ({ $disabled: r }) => /* @__PURE__ */ e(
      i,
      {
        isDisabled: r,
        placeholder: o
      }
    )
  },
  DropdownListItem: {
    style: {
      padding: "0"
    }
  },
  SelectArrow: {
    component: () => /* @__PURE__ */ e(t, { size: m })
  }
});
export {
  s as getUserSelectOverrides
};
//# sourceMappingURL=user-select.overrides.js.map
