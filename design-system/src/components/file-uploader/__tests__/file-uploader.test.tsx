import { render, renderUseTranslation, screen } from '@test/test-utils';

import { FileUploader } from '../file-uploader';

import type { FileUploaderProps } from '../file-uploader';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const dataTestId = 'testid';
const acceptedExtensionsNames = 'Word';
const customTitle = 'Custom Title';

const defaultProps: FileUploaderProps = {
  'data-testid': dataTestId,
  accept: [],
  selectedFiles: [],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FileUploaderProps>): RenderType =>
  render(
    <FileUploader
      {...defaultProps}
      {...props}
    />,
  );

describe('file-uploader: tests', () => {
  it('should render the component successfully without accepted extensions', () => {
    renderComponent();

    expect(screen.getByText(t('fileuploader.dragAndDropMessage'))).toBeInTheDocument();
  });

  it('should render the component successfully with accepted extensions', () => {
    renderComponent({ acceptedExtensionsNames });

    expect(screen.getByText(t('fileuploader.dragAndDropMessage'))).toBeInTheDocument();
    expect(
      screen.getByText(
        t('fileuploader.allowedExtensions', { allowedExtensions: acceptedExtensionsNames }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component successfully with custom title', () => {
    renderComponent({ title: customTitle });
    expect(screen.queryByText(t('fileuploader.dragAndDropMessage'))).not.toBeInTheDocument();
    expect(screen.getByText(customTitle)).toBeInTheDocument();
  });

  it('should render the default title when title is an empty string', () => {
    renderComponent({ title: ' ' });
    expect(screen.getByText(t('fileuploader.dragAndDropMessage'))).toBeInTheDocument();
  });
});
