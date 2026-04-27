import { userEvent } from '@testing-library/user-event';

import { render, screen } from '@test/test-utils';

import { DocumentDownload } from '../document-download';

import type { DocumentDownloadProps } from '../document-download';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';

const onDeleteMock = vi.fn();
const onDownloadMock = vi.fn();

const defaultProps: DocumentDownloadProps = {
  'data-testid': dataTestId,
  filename: 'filename',
  onDelete: onDeleteMock,
  onDownload: onDownloadMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentDownloadProps>): RenderType => {
  return render(
    <DocumentDownload
      {...defaultProps}
      {...props}
    />,
  );
};

describe('document-download - tests', () => {
  it('should render successfully', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${dataTestId}--download-button`));

    expect(onDownloadMock).toHaveBeenCalled();
    expect(screen.getByText('filename')).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--delete-button`)).not.toBeInTheDocument();
  });

  it('should render with delete button enabled', async () => {
    renderComponent({ showDeleteButton: true });

    await userEvent.click(screen.getByTestId(`${dataTestId}--delete-button`));

    expect(onDeleteMock).toHaveBeenCalled();
    expect(screen.getByTestId(`${dataTestId}--delete-button`)).toBeInTheDocument();
  });

  it('should render the delete as disabled', async () => {
    renderComponent({ showDeleteButton: true, isDeleting: true });

    expect(screen.getByTestId(`${dataTestId}--delete-button`)).toBeDisabled();
  });
});
