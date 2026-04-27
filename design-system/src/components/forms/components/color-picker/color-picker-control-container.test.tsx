import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { ColorPickerControlContainer } from './color-picker-control-container';

import type { ColorPickerControlContainerProps } from './color-picker-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: ColorPickerControlContainerProps = {
  name: 'color-picker',
  defaultValue: '#FF0000',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ColorPickerControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <ColorPickerControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('color-picker-control-container - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    const submitButton = screen.getByText('Submit');

    await userEvent.click(submitButton);

    waitFor(() =>
      expect(mockOnSubmit).toHaveBeenLastCalledWith(
        expect.objectContaining({
          [defaultProps.name]: defaultProps.defaultValue,
        }),
        expect.anything(),
      ),
    );
  });

  it('should change the value', async () => {
    renderComponent();

    const colorPickerElement: HTMLInputElement = screen.getByLabelText(defaultProps.name ?? '');
    const submitButton = screen.getByText('Submit');
    const testValue = '#FFFFFF';

    await userEvent.type(colorPickerElement, testValue);
    await userEvent.click(submitButton);

    waitFor(() =>
      expect(mockOnSubmit).toHaveBeenLastCalledWith(
        expect.objectContaining({
          [defaultProps.name]: testValue,
        }),
        expect.anything(),
      ),
    );
  });
});
