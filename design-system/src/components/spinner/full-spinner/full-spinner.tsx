import { Modal } from '../../modal';
import { Spinner } from '../spinner';

import type { ModalProps } from '../../modal';

interface FullSpinnerProps {
  isOpen: boolean;
}

/**
 * Base ui overrides for the modal.
 * Removes the dialog background and the close icon of the modal.
 * Sets the background color to a 85% white color.
 */
const modalOverrides: ModalProps['overrides'] = {
  DialogContainer: {
    style: {
      backgroundColor: 'rgba(255,255,255,.85)',
    },
  },
  Dialog: {
    style: {
      width: 'auto',
      height: 'auto',
      backgroundColor: 'unset',
    },
  },
};

/**
 * A utility modal with a loading spinner in the middle.
 * This component is useful to lock whole user interaction with the UI until the modal spinner be closed.
 */
export const FullSpinner = ({ isOpen }: FullSpinnerProps): React.ReactElement => (
  <Modal
    isOpen={isOpen}
    overrides={modalOverrides}
    closeable={false}
  >
    <Spinner />
  </Modal>
);
