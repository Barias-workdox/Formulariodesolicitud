import { useThousandSeparatorLocale } from '@hooks/use-thousand-separator-locale';
import { render, renderHook, renderUseTranslation, screen } from '@test/test-utils';

import { PageHeaderToolbar } from '../components/page-header-toolbar';

import type { PageHeaderToolbarProps } from '../components/page-header-toolbar';
import type { RenderType } from '@test/test-utils';

const baseTestId = 'page-header-toolbar';

const filterContentMock = 'filters-example';
const actionsContentMock = 'actions';
const itemTextMock = 'custom text';

const defaultProps: PageHeaderToolbarProps = {
  'data-testid': baseTestId,
  filters: <div>{filterContentMock}</div>,
  itemsCounter: 2,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<PageHeaderToolbarProps>): RenderType => {
  return render(
    <PageHeaderToolbar
      {...defaultProps}
      {...props}
    />,
  );
};

describe('PageHeaderToolbar - tests', () => {
  const { t } = renderUseTranslation();

  test('should render the component correctly', () => {
    renderComponent();

    const {
      result: { current: counterWithSeparator },
    } = renderHook(() => useThousandSeparatorLocale(defaultProps.itemsCounter));

    expect(screen.getByText(filterContentMock)).toBeInTheDocument();
    expect(screen.queryByText(actionsContentMock)).not.toBeInTheDocument();
    expect(
      screen.getByText(
        t('general.items', {
          count: defaultProps.itemsCounter,
          data: counterWithSeparator,
        }),
      ),
    ).toBeInTheDocument();
  });

  test('should render the component correctly when `itemsCounter` is `undefined`', () => {
    renderComponent({ itemsCounter: undefined });

    expect(screen.queryByTestId(`${baseTestId}__counter-container`)).not.toBeInTheDocument();
  });

  test('should render the toolbar with actions', () => {
    renderComponent({ actions: actionsContentMock });

    expect(screen.getByText(actionsContentMock)).toBeInTheDocument();
  });

  test('should render a custom message in the items counter', () => {
    renderComponent({ itemsText: itemTextMock });

    expect(screen.getByText(itemTextMock)).toBeInTheDocument();
  });
});
