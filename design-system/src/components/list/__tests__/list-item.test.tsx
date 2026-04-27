import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { ListItem } from '../components/list-item';

import type { ListItemProps } from '../components/list-item';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'list-item';

const onClickMock = testHelpers.fn();
const labelMock = 'Id laboris cupidatat nostrud qui in amet non fugiat.';
const detailsMock = 'Reprehenderit id cupidatat eu aliqua dolor labore aliquip do sint.';

const defaultProps: ListItemProps = {
  label: labelMock,
  details: detailsMock,
  'data-testid': baseDataTestId,
};

const renderComponent = (props?: Partial<ListItemProps>): RenderType =>
  render(
    <div>
      <ListItem
        {...defaultProps}
        {...props}
      />
      <button>Secondary element</button>
    </div>,
  );

describe('ListItem', () => {
  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders the label and details correctly', () => {
    renderComponent();

    expect(screen.getByText(labelMock)).toBeInTheDocument();
    expect(screen.getByText(detailsMock)).toBeInTheDocument();
  });

  it('renders label and details correctly when are a ReactNode', () => {
    renderComponent({
      label: <div>{labelMock}</div>,
      details: <div>{detailsMock}</div>,
    });

    expect(screen.getByText(labelMock)).toBeInTheDocument();
    expect(screen.getByText(detailsMock)).toBeInTheDocument();
  });

  it('renders startEnhancer and endEnhancer correctly', () => {
    renderComponent({
      startEnhancer: <div>StartEnhancer</div>,
      endEnhancer: 'EndEnhancer',
    });

    expect(screen.getByText('StartEnhancer')).toBeInTheDocument();
    expect(screen.getByText('EndEnhancer')).toBeInTheDocument();
  });

  it('renders endEnhancer correctly when is a ReactNode', () => {
    renderComponent({
      endEnhancer: <div>EndEnhancer</div>,
    });

    expect(screen.getByText('EndEnhancer')).toBeInTheDocument();
  });

  it('applies hover and focus states when is clickable', async () => {
    const { asFragment } = renderComponent({ onClick: onClickMock });

    const rootElement = screen.getByTestId(baseDataTestId);
    const secondaryElement = screen.getByText('Secondary element');

    expect(asFragment()).toMatchSnapshot('default status');

    await userEvent.hover(rootElement);
    expect(asFragment()).toMatchSnapshot('hover status');

    await userEvent.unhover(rootElement);
    expect(asFragment()).toMatchSnapshot('default status');

    await userEvent.click(rootElement);
    expect(asFragment()).toMatchSnapshot('focus status');

    await userEvent.click(secondaryElement);
    expect(asFragment()).toMatchSnapshot('default status');
  });

  it('handles click events when not disabled', async () => {
    renderComponent({ onClick: onClickMock });

    const rootElement = screen.getByTestId(baseDataTestId);

    await userEvent.click(rootElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('does not handle click events when is disabled', async () => {
    renderComponent({ onClick: onClickMock, disabled: true });

    const rootElement = screen.getByTestId(baseDataTestId);

    await userEvent.click(rootElement);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
