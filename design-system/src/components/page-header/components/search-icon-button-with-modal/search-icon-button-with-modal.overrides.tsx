import type { ModalOverrides } from 'baseui/modal';

export const customModalOverrides: ModalOverrides = {
  DialogContainer: {
    style: {
      alignItems: 'start',
    },
  },
  Dialog: {
    style: {
      width: '100%',
    },
  },
  Close: {
    style: {
      display: 'none',
    },
  },
};
