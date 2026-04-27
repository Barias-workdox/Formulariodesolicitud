import { render, screen } from '@test/test-utils';

import { FilterValueText } from '../components/filter-value-text';

import type { FilterValueTextProps } from '../components/filter-value-text';

describe('FilterValueText', () => {
  const label = 'Select';

  const renderComponent = (props: Partial<FilterValueTextProps> = {}) =>
    render(
      <FilterValueText
        label={label}
        tooltipText="Tooltip Text"
        {...props}
      />,
    );

  it('renders the label when no value is selected in single-select scenario', () => {
    render(
      <FilterValueText
        value={[]}
        multi={false}
        label="Select"
        tooltipText="Tooltip Text"
      />,
    );

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders the label when no value is selected in multi-select scenario', () => {
    renderComponent({ value: [], multi: true });

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('renders the selected value in single-select scenario', () => {
    const value = [{ id: 1, label: 'Option 1' }];

    renderComponent({ value, multi: false });

    expect(screen.getByText(`${label}: ${value[0].label}`)).toBeInTheDocument();
  });

  it('renders only the label when there are multiple values', () => {
    renderComponent({
      value: [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
      ],
      multi: true,
    });

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
