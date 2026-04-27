import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import icon from '../../assets/icons/doc.svg';

import { DocumentViewerModal } from './document-viewer-modal';

import type { DocumentViewerModalProps } from './document-viewer-modal';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

vitest.mock('@webdoxclm/document-viewer-front', () => ({
  DocumentViewer: () => <div>Document Viewer</div>,
}));

const defaultProps = {
  isOpen: true,
  onClose: mockOnClick,
  documentName: 'Document name',
  documentUrl: icon,
  isLoading: false,
};

/** Utility to render component quickly with default props */
const renderComponent = (props?: Partial<DocumentViewerModalProps>): RenderType => {
  return render(
    <DocumentViewerModal
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentViewerModal', () => {
  it('should renders correctly', () => {
    renderComponent();

    expect(screen.getByLabelText('dialog')).toBeInTheDocument();
    expect(screen.getByTitle('Document viewer')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.documentName)).toBeInTheDocument();
  });

  it('should display the spinner', () => {
    renderComponent({ isLoading: true });

    expect(screen.getByLabelText('Spinner')).toBeInTheDocument();
    expect(screen.queryByTitle('Document embed')).not.toBeInTheDocument();
  });

  it('should display the error message', () => {
    renderComponent({ documentUrl: '' });

    expect(screen.getByText('Vista previa no disponible')).toBeInTheDocument();
  });

  it('should not be the modal on screen', () => {
    renderComponent({ isOpen: false });

    expect(screen.queryByLabelText('dialog')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Document embed')).not.toBeInTheDocument();
  });

  it('should execute correctly when the back buttons are clicked', async () => {
    renderComponent();

    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(screen.getByLabelText('BackButton'));
    expect(mockOnClick.mock.calls.length).toBe(1);
    await userEvent.click(screen.getByLabelText('CloseButton'));
    expect(mockOnClick.mock.calls.length).toBe(2);
  });

  it('should render the document viewer', () => {
    renderComponent({ attachmentUrl: 'custom-attachment', documentUrl: '', locale: 'es' });

    expect(screen.getByText('Document Viewer')).toBeInTheDocument();
  });
});
