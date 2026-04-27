import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Modal } from './modal';
import {
  RegularModalBody,
  RegularModalFooter,
  RegularModalHeader,
  RegularModalLabel,
} from './regular-modal';
import { SectionedModalBody, SectionedModalFooter, SectionedModalHeader } from './sectioned-modal';

import type { ModalProps } from './modal';
import type { RenderType } from '@test/test-utils';

const modalData = {
  header: 'Header Info',
  body: 'Body Info',
  footer: 'Footer Info',
  label: 'Label text',
};

const mockOnClick = testHelpers.fn();

const defaultProps: ModalProps = {
  isOpen: true,
  onClose: mockOnClick,
};

/** Utility to render a regular modal quickly with default props */
const renderRegularModal = (props?: Partial<ModalProps>): RenderType => {
  const { header, body, footer, label } = modalData;

  return render(
    <Modal
      {...defaultProps}
      {...props}
    >
      <RegularModalHeader>
        <RegularModalLabel>{label}</RegularModalLabel>
        {header}
      </RegularModalHeader>
      <RegularModalBody>{body}</RegularModalBody>
      <RegularModalFooter>{footer}</RegularModalFooter>
    </Modal>,
  );
};

/** Utility to render a sectioned modal quickly with default props */
const renderSectionedModal = (props?: Partial<ModalProps>): RenderType => {
  const { header, body, footer } = modalData;

  return render(
    <Modal
      {...defaultProps}
      {...props}
    >
      <SectionedModalHeader>{header}</SectionedModalHeader>
      <SectionedModalBody>{body}</SectionedModalBody>
      <SectionedModalFooter>{footer}</SectionedModalFooter>
    </Modal>,
  );
};

describe('Modal - test', () => {
  it('Should render regular correctly with default props', () => {
    renderRegularModal();

    expect(screen.getByText(modalData.header)).toBeInTheDocument();
  });

  it('Should render sectioned correctly with default props', () => {
    renderSectionedModal();
    expect(screen.getByText(modalData.header).className).toContain("borderBottomWidth: '1px'");
  });

  it('Should close the modal when the button is pressed', async () => {
    renderRegularModal();

    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(screen.getByLabelText('Close'));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
