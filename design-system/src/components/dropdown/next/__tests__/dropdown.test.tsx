import { userEvent } from '@testing-library/user-event';
import { TRIGGER_TYPE } from 'baseui/popover';

import { PLACEMENT } from '@constants/placement.constants';
import { render, renderUseTranslation, screen } from '@test/test-utils';

import { generateItems } from '../__stories__/dropdown.stories.utils';
import { Dropdown } from '../dropdown';

import type { DropdownProps } from '../dropdown.interfaces';
import type { Item } from '@components/list-factory/list-factory.interfaces';
import type { RenderType } from '@test/test-utils';

import '@test/__mocks__/use-virtualizer.mock';

const mockOnChange = vi.fn();
const mockButtonText = 'Open Dropdown';

const mockOptions = [
  ...generateItems({ count: 1, name: 'Option 1', kind: 'basic', withCheckbox: true, items: [] }),
  ...generateItems({ count: 1, name: 'Option 2', kind: 'avatar', withCheckbox: true, items: [] }),
];

const defaultProps: DropdownProps<Item> = {
  options: mockOptions,
  placement: PLACEMENT.BOTTOM_RIGHT,
  triggerType: TRIGGER_TYPE.click,
  listProps: {
    minWidth: '200px',
  },
  onChange: mockOnChange,
};

describe('Dropdown Component', () => {
  const { t } = renderUseTranslation();
  /** Utility to render component quickly with default props and allows overrides of every prop */
  const renderComponent = (props?: Partial<DropdownProps<Item>>): RenderType => {
    return render(
      <Dropdown
        {...defaultProps}
        {...props}
      >
        <div>{mockButtonText}</div>
      </Dropdown>,
    );
  };

  it('should renders correctly', () => {
    renderComponent();

    expect(screen.getByText(mockButtonText)).toBeInTheDocument();
  });

  it('should updates search value when typing in search input', async () => {
    renderComponent({
      options: mockOptions,
      onChange: () => {},
    });

    await userEvent.click(screen.getByText(mockButtonText));
    const searchInput = screen.getByPlaceholderText(t('general.search'));

    await userEvent.type(searchInput, 'Option');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('Option');
  });

  it('should applies default props when not provided', () => {
    const onChange = vi.fn();

    renderComponent({
      options: mockOptions,
      onChange,
    });

    expect(screen.getByText(mockButtonText)).toBeInTheDocument();
  });

  it('should passes listProps to ListFactory', async () => {
    const mockListTestId = 'dropdown-list';
    const listProps = { minWidth: '200px', 'data-testid': mockListTestId };
    const onChange = vi.fn();

    renderComponent({
      options: mockOptions,
      onChange,
      listProps,
    });

    await userEvent.click(screen.getByText(mockButtonText));

    const listFactoryElement = screen.getByTestId(`${mockListTestId}__list`);

    expect(listFactoryElement).toBeInTheDocument();
  });
});
