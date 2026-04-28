import { jsx as o } from "react/jsx-runtime";
import { useDateUtilsWithLocale as r } from "../../../utils/hooks/use-date-util-with-locale.js";
import { SimpleText as m } from "./simple-text.js";
const p = ({ value: t }) => {
  const { formatDateAsText: e } = r();
  return /* @__PURE__ */ o(m, { value: e(t) });
};
export {
  p as DateAsText
};
//# sourceMappingURL=date-text.js.map
