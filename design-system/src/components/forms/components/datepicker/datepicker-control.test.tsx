import type { Ref } from 'react';

import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { DatePickerControl } from './datepicker-control';

import type { DatePickerControlProps } from './datepicker-control';
import type { RenderType } from '@test/test-utils';

vi.mock('@components/datepicker/next', () => ({
  Datepicker: ({
    inputRef,
    placeholder,
    value,
    onChange,
  }: {
    inputRef: Ref<HTMLInputElement>;
    placeholder: string;
    value?: Date | Date[] | null;
    onChange(val: { date: Date | null | undefined }): void;
  }) => (
    <>
      <input
        ref={inputRef}
        placeholder={placeholder}
        value={value instanceof Date ? value.toISOString() : ''}
        onChange={(e) => onChange({ date: e.target.value ? new Date(e.target.value) : null })}
      />
      <button
        type="button"
        onClick={() => onChange({ date: undefined })}
      >
        clear date
      </button>
    </>
  ),
}));

const defaultProps = {
  'data-testid': 'data-testid',
  defaultValue: undefined,
  placeholder: 'placeholder',
  name: 'datePicker',
  highlightedDate: new Date('2023-01-25'),
} as const satisfies DatePickerControlProps;

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DatePickerControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <DatePickerControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
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

  it('should set form value to null when the date is cleared', async () => {
    renderComponent({ defaultValue: new Date('2023-01-25') });

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.clear(input);

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ datePicker: null }),
        expect.anything(),
      );
    });
  });

  it('should set form value to undefined when the datepicker fires with undefined', async () => {
    renderComponent();

    await userEvent.click(screen.getByRole('button', { name: /clear date/i }));

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ datePicker: undefined }),
        expect.anything(),
      );
    });
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          datePicker: zod
            .any()
            .refine((value) => value !== undefined && value !== null, 'Required'),
        })}
        resolverType="zod"
      >
        <DatePickerControl {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const input = screen.getByPlaceholderText(defaultProps.placeholder);

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(input).toHaveFocus();
    });
  });
});
