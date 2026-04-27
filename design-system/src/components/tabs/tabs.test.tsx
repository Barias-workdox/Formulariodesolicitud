import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { Tab, Tabs } from './';

import type { TabsProps } from './';
import type { RenderType } from '@test/test-utils';

const mockOnChange = testHelpers.fn();

const tab1 = {
  title: 'tab1',
  body: 'Magna velit ut cillum anim.',
};
const tab2 = {
  title: 'tab2',
  body: 'Voluptate amet sunt elit est voluptate enim veniam ullamco eu proident aliqua nisi.',
};

const defaultProps: TabsProps = {
  children: [
    <Tab
      key={tab1.title}
      title={tab1.title}
    >
      {tab1.body}
    </Tab>,
    <Tab
      key={tab2.title}
      title={tab2.title}
    >
      {tab2.body}
    </Tab>,
  ],
  activeKey: 0,
  onChange: mockOnChange,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<TabsProps>): RenderType => {
  return render(
    <Tabs
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Tabs - test', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly with orientation = `horizontal`', async () => {
    renderComponent();

    expect(screen.getByText(tab1.title)).toBeInTheDocument();
    expect(screen.getByText(tab2.title)).toBeInTheDocument();

    await userEvent.click(screen.getByText(tab2.title));

    expect(mockOnChange).toHaveBeenLastCalledWith({ activeKey: 'tab2' });
  });

  it('should render the component correctly with orientation = `vertical`', async () => {
    renderComponent({ orientation: 'vertical' });

    expect(screen.getByText(tab1.title)).toBeInTheDocument();
    expect(screen.getByText(tab2.title)).toBeInTheDocument();

    await userEvent.click(screen.getByText(tab2.title));

    expect(mockOnChange).toHaveBeenLastCalledWith({ activeKey: 'tab2' });
  });

  it('should render the correct number of tabs', () => {
    render(<Tabs {...defaultProps} />);

    expect(screen.getAllByRole('tab')).toHaveLength(2);
  });

  it('should render the panel when "showPanel" is true by default', () => {
    render(
      <Tabs
        {...defaultProps}
        activeKey="tab2"
      />,
    );

    expect(screen.getByText(tab2.body)).toBeInTheDocument();
  });

  it('should not render the panel when "showPanel" is false', () => {
    render(
      <Tabs
        {...defaultProps}
        activeKey="tab2"
        showPanels={false}
      />,
    );

    expect(screen.queryByText(tab2.body)).not.toBeInTheDocument();
  });

  it('should add the data-testid to the tabs component (tabs overrides works)', async () => {
    render(
      <Tabs
        {...defaultProps}
        data-testid="my-tabs"
      />,
    );

    expect(screen.getByTestId('my-tabs')).toBeInTheDocument();
  });

  it('should add the data-testid to the internal tab component (tab overrides works)', async () => {
    render(
      <Tabs>
        <Tab data-testid="my-tab-1">Hello World</Tab>
        <Tab data-testid="my-tab-2">Lorem ipsum</Tab>
      </Tabs>,
    );

    expect(screen.getByTestId('my-tab-1')).toBeInTheDocument();
    expect(screen.getByTestId('my-tab-2')).toBeInTheDocument();
    expect(screen.queryByTestId('my-tab-3')).not.toBeInTheDocument();
  });
});
