import type { ModalOverrides } from 'baseui/modal';

/** ModalOverrides */
export const getModalOverrides = ({ zIndex }: { zIndex: number }): ModalOverrides => ({
  Close: {
    style: {
      display: 'none',
    },
  },
  Root: {
    style: {
      zIndex,
    },
  },
  Dialog: {
    style: {
      margin: 0,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
  },
});
