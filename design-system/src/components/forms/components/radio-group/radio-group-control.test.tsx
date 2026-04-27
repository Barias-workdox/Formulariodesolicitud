import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { RadioGroupControlContainer } from './radio-group-control-container';

import type { RadioGroupControlContainerProps } from './radio-group-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: RadioGroupControlContainerProps = {
  name: 'radio',
  defaultValue: undefined,
  labelKey: 'label',
  valueKey: 'id',
  options: [
    {
      id: '1',
      label: 'label 1',
    },
    { id: '2', label: 'label 2' },
  ],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<RadioGroupControlContainerProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <RadioGroupControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('radio-group-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', async () => {
    renderComponent();

    // Select all radio buttons within the radio group
    const radioButtonsOptions = screen.getAllByRole('radio');
    const [firstRadio] = radioButtonsOptions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [{ id: selectedRadioId }] = defaultProps.options as any;

    // Assert that no radio button is selected
    radioButtonsOptions.forEach((radioButton) => {
      expect(radioButton).not.toBeChecked();
    });

    const submitButton = screen.getByRole('button');

    // Check before checking a radio
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        radio: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after checking a radio
    await userEvent.click(firstRadio);
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        radio: selectedRadioId,
      }),
      expect.anything(),
    );
  });

  it('should focus the radio group when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          radio: zod
            .any()
            .refine((value) => typeof value === 'string' && value.length > 0, 'Required'),
        })}
        resolverType="zod"
      >
        <RadioGroupControlContainer {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const radioGroupRoot = screen.getByTestId(
      'design-system__radio-group--component-radio-group-root',
    );

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(radioGroupRoot).toHaveFocus();
    });
  });
});
