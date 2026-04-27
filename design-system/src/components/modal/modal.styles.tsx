import { ModalCloseButton } from './components';

import type { ModalProps } from './modal';
import type { ModalOverrides } from 'baseui/modal';

type ModalOverridesParams = ModalProps & { canClose: boolean };

/** Generates custom overrides for a modal component. */
export const modalOverrides = ({ zIndex, canClose }: ModalOverridesParams): ModalOverrides => ({
  Root: {
    style: {
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex,
    },
  },
  Close: {
    props: {
      canClose,
    },
    component: ModalCloseButton,
  },
});
