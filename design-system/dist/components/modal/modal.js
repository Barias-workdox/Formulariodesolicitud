import { jsx as a } from "react/jsx-runtime";
import { useMemo as l } from "react";
import { Modal as c } from "baseui/modal";
import { mergeOverridesDeep as f } from "../utils/baseui/helpers.js";
import { modalOverrides as p } from "./modal.styles.js";
const u = ({
  showCloseButton: e,
  closeable: s = !0,
  zIndex: o,
  autoFocus: d = !1,
  ...m
}) => {
  const { overrides: i } = m, r = e !== void 0 ? e : s, t = l(
    () => f(
      p({
        zIndex: o,
        canClose: r
      }),
      i
    ),
    [r, i, o]
  );
  return /* @__PURE__ */ a(
    c,
    {
      ...m,
      autoFocus: d,
      closeable: r,
      overrides: t
    }
  );
};
export {
  u as Modal
};
//# sourceMappingURL=modal.js.map
