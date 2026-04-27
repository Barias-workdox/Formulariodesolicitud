import { Button } from '@components/button';
import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FileUploaderControl } from '../file-uploader/file-uploader-control';

import type { FileUploaderControlProps } from '../file-uploader/file-uploader-control';
import type { RenderType } from '@test/test-utils';

const acceptedExtensionsNames = 'Word';

const defaultProps: FileUploaderControlProps = {
  'data-testid': 'data-testid',
  defaultValue: [],
  name: 'files',
  accept: [],
  selectedFiles: [],
};

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<FileUploaderControlProps>): RenderType => {
  return render(
    <FormProviderWrapper
      onSubmit={mockOnSubmit}
      values={{
        files: defaultProps.defaultValue,
      }}
    >
      <FileUploaderControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('file-uploader-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully without accepted extensions', () => {
    renderComponent();
    const { t } = renderUseTranslation();

    expect(screen.getByText(t('fileuploader.dragAndDropMessage'))).toBeInTheDocument();
  });

  it('should render the component successfully with accepted extensions', () => {
    renderComponent({ acceptedExtensionsNames });
    const { t } = renderUseTranslation();

    expect(screen.getByText(t('fileuploader.dragAndDropMessage'))).toBeInTheDocument();
    expect(
      screen.getByText(
        t('fileuploader.allowedExtensions', { allowedExtensions: acceptedExtensionsNames }),
      ),
    ).toBeInTheDocument();
  });
});
