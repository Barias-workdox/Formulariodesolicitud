import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { Button } from '@components/button';
import { FormProviderControlWrapper } from '@test/form-provider-utils';
import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

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
    <FormProviderControlWrapper
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
    </FormProviderControlWrapper>,
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

  it('should focus the button when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          files: zod.any().refine((value) => Array.isArray(value) && value.length > 0, 'Required'),
        })}
        resolverType="zod"
        values={{ files: [] }}
      >
        <FileUploaderControl
          {...defaultProps}
          selectedFiles={[]}
          defaultValue={[]}
        />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const hiddenInput = screen.getByTestId(`${defaultProps['data-testid']}--hidden-input`);

    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(hiddenInput).toHaveFocus();
    });
  });
});
