import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { TextareaControl } from './textarea-control';

import type { TextareaControlProps } from './textarea-control';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const newText = 'new text';

const defaultProps = {
  name: 'name',
  defaultValue: '',
  placeholder: 'placeholder',
} as const satisfies TextareaControlProps;

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TextareaControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <TextareaControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('textarea-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const textarea = screen.getByPlaceholderText(defaultProps.placeholder);
    const submitButton = screen.getByText('Submit');

    // Check before typing in textarea
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        name: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after typing in textarea
    await userEvent.type(textarea, newText);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        name: newText,
      }),
      expect.anything(),
    );
  });

  it('should focus the textarea when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          name: zod.string().min(1, 'Required'),
        })}
        resolverType="zod"
      >
        <TextareaControl {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const textarea = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(textarea).toHaveFocus();
    });
  });
});
