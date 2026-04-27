import { useState } from 'react';

import { userEvent } from '@testing-library/user-event';

import { formatDatetimeAsText } from '@components/utils/strings/date.utils';
import { testHelpers, screen, render } from '@test/test-utils';

import { Datepicker } from '../datepicker';
import { DATE_RANGE_SEPARATOR } from '../datepicker.constants';

import type { DatepickerProps } from '../datepicker';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'datepicker';
const placeholderText = 'Example placeholder';
const onChangeMock = testHelpers.fn();

const DatePickerTestComponent = (props?: Partial<DatepickerProps>): JSX.Element => {
  const [value, setValue] = useState<Date | Date[]>();

  /** Callback to handle datepicker change event. */
  const handleChange = (value) => {
    const { date } = value;

    setValue(Array.isArray(date) ? date : [date]);
    onChangeMock(value);
  };

  return (
    <Datepicker
      data-testid={baseTestId}
      placeholder={placeholderText}
      leading={<div>Leading Enhancer</div>}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DatepickerProps>): RenderType => {
  return render(<DatePickerTestComponent {...props} />);
};

beforeAll(() => {
  testHelpers.setSystemTime(new Date('2025-01-01T12:00:00Z'));
});

beforeEach(() => {
  testHelpers.clearAllMocks();
});

describe('Datepicker', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(screen.getByText('Leading Enhancer')).toBeInTheDocument();
  });

  it('should execute `onChange` function correctly', async () => {
    const date = new Date('2025-01-10T03:00:00.000Z');

    renderComponent();

    const input = screen.getByPlaceholderText(placeholderText);

    await userEvent.click(input);
    await screen.findByTestId(`${baseTestId}--calendar`);
    await userEvent.click(screen.getByText('10'));
    await userEvent.tab();

    expect(onChangeMock).toHaveBeenCalledWith({ date });
    expect(input).toHaveValue(formatDatetimeAsText(date.toString(), 'es', false));
  });

  it('should execute `onChange` function correctly when range prop is true', async () => {
    const date = new Date('2025-01-10T03:00:00.000Z');
    const date2 = new Date('2025-01-15T03:00:00.000Z');

    renderComponent({ range: true });

    const input = screen.getByPlaceholderText(placeholderText);

    await userEvent.click(input);
    await screen.findByTestId(`${baseTestId}--calendar`);
    await userEvent.click(screen.getByText('10'));
    await userEvent.click(screen.getByText('15'));

    expect(onChangeMock).toHaveBeenLastCalledWith({ date: [date, date2] });
    expect(input).toHaveValue(
      `${formatDatetimeAsText(date.toString(), 'es', false)}${DATE_RANGE_SEPARATOR}${formatDatetimeAsText(date2.toString(), 'es', false)}`,
    );
  });
});
