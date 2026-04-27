import { userEvent } from '@testing-library/user-event';

import {
  render,
  renderUseCountriesTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';
import {
  sovereignCountryCodes,
  nonUnSovereignCountryCodes,
} from '../../../utils/constants/country-code.constants';

import { CountryControlContainer } from './country-control-container';

import type { CountryControlContainerProps } from './country-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: CountryControlContainerProps = {
  'data-testid': 'dataTestId',
  placeholder: 'placeholder',
  name: 'country',
  defaultValue: undefined,
  countryCodes: ['CHL', 'ARG', 'BRA', 'FRA'],
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CountryControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <CountryControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('country-control-container - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component with supplied countryCodes', async () => {
    renderComponent();

    const { t } = renderUseCountriesTranslation();

    const selectedValue = {
      id: 'ARG',
      label: t('ARG'),
    };
    const submitButton = screen.getByRole('button');

    // Check before selecting an option
    await userEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        country: defaultProps.defaultValue,
      }),
      expect.anything(),
    );

    // Check after selecting an option
    const select = screen.getByRole('combobox');

    await userEvent.click(select);

    // All options displayed when the select is clicked
    const allOptions = screen.getAllByRole('option');

    expect(allOptions).toHaveLength((defaultProps.countryCodes as string[]).length);

    // Select ARG from the displayed values
    const selectedOption = screen.getByText(selectedValue.label);

    await userEvent.click(selectedOption);
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenLastCalledWith(
        expect.objectContaining({
          country: [selectedValue],
        }),
        expect.anything(),
      );
    });
  });

  it('should render the component when countryCodes is undefined', async () => {
    renderComponent({ countryCodes: undefined });

    // Check after selecting an option
    const select = screen.getByRole('combobox');

    await userEvent.click(select);

    // All options displayed when the select is clicked
    const allOptions = screen.getAllByRole('option');

    // When countryCodes is undefined, it defaults to countries only (sovereign + non-UN sovereign)
    const expectedCountries = [...sovereignCountryCodes, ...nonUnSovereignCountryCodes];

    expect(allOptions).toHaveLength(expectedCountries.length);
  });
});
