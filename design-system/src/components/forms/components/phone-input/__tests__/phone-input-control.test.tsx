import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { Button } from '@components/button';
import { FormProviderControlWrapper } from '@test/form-provider-utils';
import {
  render,
  renderUseCountriesTranslation,
  screen,
  testHelpers,
  waitFor,
  within,
} from '@test/test-utils';

import { PhoneInputControl, type PhoneInputControlProps } from '../phone-input-control';

import type { RenderType } from '@test/test-utils';

const countryCodeAriaLabel = 'Select country aria label';
const defaultProps: PhoneInputControlProps = {
  'data-testid': 'mock-testid',
  name: 'phoneInput',
  countryCodeAriaLabel,
};

const mockOnSubmit = testHelpers.fn();
const setupUser = () => userEvent.setup({ delay: null });

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<PhoneInputControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <PhoneInputControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderControlWrapper>,
  );
};

describe('phone-input-control - tests', () => {
  const { t: tCountry } = renderUseCountriesTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component with input and country select', () => {
    renderComponent();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByLabelText(countryCodeAriaLabel)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should submit form with undefined phoneInput when no value is provided', async () => {
    renderComponent();

    const user = setupUser();
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.click(submitButton);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        phoneInput: undefined,
      }),
      expect.anything(),
    );
  });

  it('should select a country and update the dial code', async () => {
    renderComponent();

    const user = setupUser();
    const countrySelectContainer = screen.getByLabelText(countryCodeAriaLabel);
    // The aria-label is applied to the Select Root (not always the combobox itself),
    // so we resolve the actual interactive element in a resilient way.
    const countrySelect = (() => {
      try {
        return within(countrySelectContainer).getByRole('combobox');
      } catch {
        return countrySelectContainer as unknown as HTMLElement;
      }
    })();

    // Open country select dropdown
    await user.click(countrySelect);

    // Wait for dropdown options to appear and select Australia.
    // In CI, the dropdown container is not always exposed as role="listbox",
    // but the options are reliably role="option".
    const ausLabelNode = await screen.findByText(tCountry('AUS'));
    const ausOption = (ausLabelNode.closest('[role="option"]') ?? ausLabelNode) as HTMLElement;

    await user.click(ausOption);

    // Ensure the dropdown closed so the dial code assertion can't match an option row.
    await waitFor(() => {
      expect(screen.queryAllByRole('option')).toHaveLength(0);
    });

    // Wait for country selection to complete - verify dial code appears
    const dialCode = await screen.findByText('+61', undefined, { timeout: 5000 });

    expect(dialCode).toBeInTheDocument();
  });

  it('should update form value when typing phone number', async () => {
    renderComponent();

    const user = setupUser();
    const input = screen.getByRole('textbox');
    const testValue = '123123';

    await user.type(input, testValue);

    // Wait for text input to be updated in form state
    await expect.poll(() => input).toHaveValue(testValue);
  });

  it('should submit form with complete phone input value (country and text)', async () => {
    renderComponent();

    const user = setupUser();
    const input = screen.getByRole('textbox');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    const testValue = '123123';

    // Select country
    const countrySelectContainer = screen.getByLabelText(countryCodeAriaLabel);
    const countrySelect = (() => {
      try {
        return within(countrySelectContainer).getByRole('combobox');
      } catch {
        return countrySelectContainer as unknown as HTMLElement;
      }
    })();

    await user.click(countrySelect);

    // BaseUI dropdown doesn't always expose role="listbox" in tests.
    const ausLabelNode = await screen.findByText(tCountry('AUS'));
    const ausOption = (ausLabelNode.closest('[role="option"]') ?? ausLabelNode) as HTMLElement;

    await user.click(ausOption);

    // Wait for country selection to complete
    await screen.findByText('+61', undefined, { timeout: 5000 });

    // Type phone number
    await user.type(input, testValue);

    // Wait for input value to be updated
    await expect.poll(() => input).toHaveValue(testValue);

    // Submit form
    await user.click(submitButton);

    // Wait for form submission to complete with updated values
    await expect
      .poll(() => {
        const { lastCall } = mockOnSubmit.mock;

        if (!lastCall) throw new Error('Mock not called yet');

        return lastCall;
      })
      .toEqual([
        expect.objectContaining({
          phoneInput: {
            country: {
              id: 'AU',
              dialCode: '+61',
              label: tCountry('AUS'),
            },
            text: testValue,
          },
        }),
        expect.anything(),
      ]);
  });

  it('should focus the input when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          phoneInput: zod
            .any()
            .refine(
              (value) => typeof value?.text === 'string' && value.text.length > 0,
              'Required',
            ),
        })}
        resolverType="zod"
      >
        <PhoneInputControl {...defaultProps} />
        <Button type="submit">Submit</Button>
      </FormProviderControlWrapper>,
    );

    const input = screen.getByRole('textbox');

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(input).toHaveFocus();
    });
  });
});
