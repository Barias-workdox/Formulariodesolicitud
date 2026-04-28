import { jsx as o } from "react/jsx-runtime";
import { Modal as e } from "../../modal/modal.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import { Spinner as t } from "../spinner.js";
const i = {
  DialogContainer: {
    style: {
      backgroundColor: "rgba(255,255,255,.85)"
    }
  },
  Dialog: {
    style: {
      width: "auto",
      height: "auto",
      backgroundColor: "unset"
    }
  }
}, d = ({ isOpen: r }) => /* @__PURE__ */ o(
  e,
  {
    isOpen: r,
    overrides: i,
    closeable: !1,
    children: /* @__PURE__ */ o(t, {})
  }
);
export {
  d as FullSpinner
};
//# sourceMappingURL=full-spinner.js.map
