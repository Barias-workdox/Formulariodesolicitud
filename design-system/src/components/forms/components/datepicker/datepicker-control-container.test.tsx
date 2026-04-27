import { render, screen, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { DatePickerControl } from './datepicker-control';

import type { DatePickerControlProps } from './datepicker-control';
import type { RenderType } from '@test/test-utils';

const defaultProps: DatePickerControlProps = {
  'data-testid': 'data-testid',
  defaultValue: undefined,
  placeholder: 'placeholder',
  name: 'datePicker',
  highlightedDate: new Date('2023-25-01'),
};

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DatePickerControlProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <DatePickerControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('datepicker-control - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    renderComponent();

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });
});
