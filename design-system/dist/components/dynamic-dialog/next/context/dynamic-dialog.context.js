import { createContext as n, useContext as e } from "react";
const t = n(void 0), r = () => {
  const o = e(t);
  if (!o)
    throw new Error("useDynamicDialog must be used within a DynamicDialog component");
  return o;
}, a = t.Provider;
export {
  a as DynamicDialogProvider,
  r as useDynamicDialog
};
//# sourceMappingURL=dynamic-dialog.context.js.map
