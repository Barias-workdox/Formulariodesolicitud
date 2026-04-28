import { jsx as i } from "react/jsx-runtime";
import { Spinner as s } from "../../../spinner/next/spinner.js";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { getButtonStyles as p } from "../button.utils.js";
const l = ({ disabled: n, kind: r, appearance: t }) => {
  const { theme: o } = m(), {
    spinner: { kind: e }
  } = p(o, r, t);
  return /* @__PURE__ */ i(
    s,
    {
      size: "small",
      kind: n ? "brand" : e
    }
  );
};
export {
  l as ButtonSpinner
};
//# sourceMappingURL=button-spinner.js.map
