import { Building, UserAvatar } from '@carbon/icons-react';
import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { RadioGroup } from '../../radio-group';

import { BorderedRadio } from './bordered-radio';

import type { BorderedRadioProps } from './bordered-radio';
import type { RenderType } from '@test/test-utils';

// MOCKS
const mockDataTestId = 'bordered-radio-testid';
const mockTitle = 'Mock title';
const mockDescription = 'Mock description';
const mockOnChange = testHelpers.fn();

/* Default props for the component. */
const defaultProps: BorderedRadioProps = {
  'data-testid': mockDataTestId,
  description: mockDescription,
  icon: <UserAvatar size={24} />,
  onChange: mockOnChange,
};

/**
 * Function that takes in props as an optional parameter and returns a component with
 * defaultProps and the received props
 */
const renderComponent = (props?: Partial<BorderedRadioProps>): RenderType =>
  render(
    <BorderedRadio
      {...defaultProps}
      {...props}
    />,
  );

describe('bordered-radio - tests', () => {
  it('should render with default props', () => {
    renderComponent();

    expect(screen.getByTestId(mockDataTestId)).toBeInTheDocument();
  });

  it('should render the description text', () => {
    renderComponent();

    expect(screen.getByText(mockDescription)).toBeInTheDocument();
  });

  it('should render the icon', () => {
    const iconTestId = 'icon-test-id';
    const mockIconText = 'mock icon text';

    /** Testing ReactNode as icon */
    renderComponent({
      icon: (
        <div>
          <Building data-testid={iconTestId} />
          <span>{mockIconText}</span>
        </div>
      ),
    });

    expect(screen.getByTestId(iconTestId)).toBeInTheDocument();
    expect(screen.getByText(mockIconText)).toBeInTheDocument();
  });

  it('should call the onChange function when clicked', async () => {
    renderComponent();

    const radio = screen.getByTestId(mockDataTestId);

    await userEvent.click(radio);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});

// MOCKS
const radiosLength = 4;
const mockGroupOnChange = testHelpers.fn();
const mockGroupDataTestId = 'radio-group-testid';

/**
 * Renders component wrapped with RadioGroup and default props
 */
const renderWrappedComponent = ({ defaultValue = null, disabled = false } = {}): RenderType =>
  render(
    <RadioGroup
      onChange={mockGroupOnChange}
      value={defaultValue}
      data-testid={mockGroupDataTestId}
      disabled={disabled}
    >
      {Array.from(Array(radiosLength).keys()).map((index: number) => (
        <BorderedRadio
          key={index}
          data-testid={`${mockDataTestId}-${index}`}
          title={`${mockTitle}-${index}`}
          description={`${mockDescription}-${index}`}
          icon={<UserAvatar size={24} />}
          value={index.toString()}
        />
      ))}
    </RadioGroup>,
  );

describe('bordered-radio wrapped with RadioGroup - tests', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render', () => {
    renderWrappedComponent();

    expect(screen.getByTestId(`${mockGroupDataTestId}-radio-group-root`)).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(radiosLength);
  });

  it('should render all titles', () => {
    renderWrappedComponent();

    const radios = screen.getAllByRole('radio');

    radios.forEach((_, index) => {
      expect(screen.getByText(`${mockTitle}-${index}`)).toBeInTheDocument();
    });
  });

  it('should render all descriptions', () => {
    renderWrappedComponent();

    const radios = screen.getAllByRole('radio');

    radios.forEach((_, index) => {
      expect(screen.getByText(`${mockDescription}-${index}`)).toBeInTheDocument();
    });
  });

  it('should not have default checked value', () => {
    renderWrappedComponent();

    const radios = screen.getAllByRole('radio');

    radios.forEach((radio) => {
      expect(radio).not.toBeChecked();
    });
  });

  it('should have checked only the radio with the default value', () => {
    /** First radio's value */
    const defaultValue = '0';

    renderWrappedComponent({ defaultValue });

    const [firstRadio, ...rest] = screen.getAllByRole('radio');

    expect(firstRadio).toBeChecked();

    rest.forEach((radio) => {
      expect(radio).not.toBeChecked();
    });
  });

  it('should call the onChange function only when one unchecked radio is clicked', async () => {
    const defaultValue = '0';

    renderWrappedComponent({ defaultValue });

    const [defaultCheckedRadio, otherRadio] = screen.getAllByRole('radio');

    expect(defaultCheckedRadio).toBeChecked();

    /** not called */
    await userEvent.click(defaultCheckedRadio);
    /** called */
    await userEvent.click(otherRadio);

    expect(mockGroupOnChange).toHaveBeenCalledTimes(1);
  });

  it('should not call the onChange function when radio is disabled', async () => {
    const defaultValue = '0';

    renderWrappedComponent({ defaultValue, disabled: true });

    const [defaultCheckedRadio] = screen.getAllByRole('radio');

    expect(defaultCheckedRadio).toBeChecked();

    /** not called */
    await userEvent.click(defaultCheckedRadio);

    expect(mockGroupOnChange).not.toHaveBeenCalled();
  });
});
