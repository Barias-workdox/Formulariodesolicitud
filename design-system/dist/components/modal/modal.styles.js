import { ModalCloseButton as e } from "./components/modal-close-button/modal-close-button.js";
const s = ({ zIndex: o, canClose: t }) => ({
  Root: {
    style: {
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex: o
    }
  },
  Close: {
    props: {
      canClose: t
    },
    component: e
  }
});
export {
  s as modalOverrides
};
//# sourceMappingURL=modal.styles.js.map
