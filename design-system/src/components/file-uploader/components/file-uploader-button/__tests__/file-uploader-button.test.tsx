import { userEvent } from '@testing-library/user-event';

import { bytesToShortNotation } from '@components/utils/files/file.utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileUploaderButton } from '../file-uploader-button';

import type { FileType } from '../../../interfaces';
import type { FileUploaderButtonProps } from '../file-uploader-button';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'testid';
const buttonText = 'Upload';
const selectedFiles: FileType[] = [{ size: 1024 }, { size: 1024 }];

const mockHandleOnClick = testHelpers.fn();

const defaultProps: FileUploaderButtonProps = {
  'data-testid': dataTestId,
  text: buttonText,
  selectedFiles: [],
  onClick: mockHandleOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FileUploaderButtonProps>): RenderType =>
  render(
    <FileUploaderButton
      {...defaultProps}
      {...props}
    />,
  );

describe('file-uploader: file-uploader-button tests', () => {
  it('should render the component successfully', async () => {
    renderComponent();

    const button = screen.getByTestId(`${dataTestId}-button`);

    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockHandleOnClick).toHaveBeenCalled();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should render the message of files metadata', () => {
    renderComponent({ selectedFiles });

    const { count, size } = {
      count: selectedFiles.length,
      size: bytesToShortNotation(selectedFiles.reduce((prevSize, { size }) => prevSize + size, 0)),
    };

    expect(size).toEqual('2 KB');
    expect(screen.getByText(t('fileuploader.filesToImport', { count, size }))).toBeInTheDocument();
  });

  it('should render the button with disabled status', () => {
    renderComponent({ disabled: true });

    expect(screen.getByTestId(`${dataTestId}-button`)).toBeDisabled();
  });
});
