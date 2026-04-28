import "react/jsx-runtime";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import { SectionedModalHeader as t, SectionedModalBody as r, SectionedModalFooter as d } from "../modal/sectioned-modal.js";
import { themedWithStyle as e } from "../../themes/utilities.js";
const h = e(t, ({ $style: o }) => ({
  border: "none",
  ...o
})), H = e(
  r,
  ({ $style: o }) => ({
    lineHeight: "200%",
    overflowY: "auto",
    maxHeight: "60vh",
    ...o
  })
), S = e(d, ({ $style: o }) => ({
  border: "none",
  ...o
}));
export {
  H as DeleteModalBody,
  S as DeleteModalFooter,
  h as DeleteModalHeader
};
//# sourceMappingURL=delete-modal.styles.js.map
