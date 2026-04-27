import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { TextareaControlContainer } from './textarea-control-container';

import type { TextareaControlContainerProps } from './textarea-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const newText = 'new text';

const defaultProps: TextareaControlContainerProps = {
  name: 'name',
  defaultValue: '',
  placeholder: 'placeholder',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TextareaControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <TextareaControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('textarea-control-container - tests', () => {
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
});
