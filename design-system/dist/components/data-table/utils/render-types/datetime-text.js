import { jsx as o } from "react/jsx-runtime";
import { useDateUtilsWithLocale as m } from "../../../utils/hooks/use-date-util-with-locale.js";
import { SimpleText as r } from "./simple-text.js";
const p = ({ value: t }) => {
  const { formatDatetimeAsText: e } = m();
  return /* @__PURE__ */ o(r, { value: e(t) });
};
export {
  p as DatetimeAsText
};
//# sourceMappingURL=datetime-text.js.map
