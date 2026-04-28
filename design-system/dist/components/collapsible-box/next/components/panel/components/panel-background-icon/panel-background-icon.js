import { jsx as t } from "react/jsx-runtime";
import { BackgroundIcon as n } from "../../../../../../background-icon/background-icon.js";
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE as m } from "../../../../collapsible-box.constants.js";
import { useCollapsibleBoxContext as i } from "../../../../collapsible-box.context.js";
const E = (o) => {
  const { size: r } = i(), e = m[r];
  return /* @__PURE__ */ t(
    n,
    {
      ...o,
      size: e
    }
  );
};
export {
  E as PanelBackgroundIcon
};
//# sourceMappingURL=panel-background-icon.js.map
