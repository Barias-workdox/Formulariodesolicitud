import { Button } from '@components/button';
import { FormProviderWrapper } from '@test/form-provider-utils';
import { render, screen, testHelpers } from '@test/test-utils';

import { DynamicFormControlContainer } from '../dynamic-form-control.container';

import type { DynamicFormControlContainerProps } from '../dynamic-form-control.container';
import type { ControlKindType } from '@components/forms/interfaces';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  controlKind: 'input',
  defaultValue: '',
  placeholder: 'placeholder',
  name: 'dynamicFormControlContainer',
  options: [
    { id: 1, label: 'option1' },
    { id: 2, label: 'option2' },
  ],
  countryCode: 'CHL',
};

const mockOnSubmit = testHelpers.fn();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  props?: Partial<DynamicFormControlContainerProps<ControlKindType>>,
): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/** @ts-ignore - problem with props type but correctly typed */}
      <DynamicFormControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('dynamic-form-control-container - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component for controlKind = `input`', async () => {
    renderComponent();

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `colorPicker`', async () => {
    renderComponent({ controlKind: 'colorPicker' });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `country`', async () => {
    renderComponent({ controlKind: 'country' });

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render the component for controlKind = `datepicker`', async () => {
    renderComponent({ controlKind: 'datepicker' });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `nicInput`', async () => {
    renderComponent({ controlKind: 'nicInput' });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `phone`', async () => {
    renderComponent({ controlKind: 'phone' });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `radioGroup`', async () => {
    renderComponent({ controlKind: 'radioGroup' });

    const radioButtonsOptions = screen.getAllByRole('radio');

    expect(radioButtonsOptions).toHaveLength(2);
  });

  it('should render the component for controlKind = `select`', async () => {
    renderComponent({ controlKind: 'select' });

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render the component for controlKind = `selectWithPagination`', async () => {
    renderComponent({ controlKind: 'selectWithPagination' });

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render the component for controlKind = `switch`', async () => {
    renderComponent({ controlKind: 'switch' });

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the component for controlKind = `textareaControl`', async () => {
    renderComponent({ controlKind: 'textareaControl' });

    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeInTheDocument();
  });

  it('should render the component for controlKind = `checkbox`', async () => {
    renderComponent({ controlKind: 'checkbox' });

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
