import { jsx as r } from "react/jsx-runtime";
import { useCss as t } from "../../../../utils/hooks/use-css.js";
const n = ({ children: e }) => {
  const { theme: o } = t();
  return /* @__PURE__ */ r(
    "div",
    {
      style: {
        height: "32px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: o.colors.brandWashed,
        border: `1px solid ${o.colors.neutral}`,
        borderRadius: "8px",
        boxSizing: "border-box"
      },
      children: e
    }
  );
};
export {
  n as MessageBoxSlotExample
};
//# sourceMappingURL=message-box-slot-example.js.map
