import { userEvent } from '@testing-library/user-event';

import { Tab } from '@components/tabs';
import { render, screen, testHelpers } from '@test/test-utils';

import { SideTabs } from './side-tabs';

import type { SideTabsProps } from './side-tabs';
import type { RenderType } from '@test/test-utils';

const tab1 = {
  title: 'tab1',
  body: 'Magna velit ut cillum anim.',
};
const tab2 = {
  title: 'tab2',
  body: 'Voluptate amet sunt elit est voluptate enim veniam ullamco eu proident aliqua nisi.',
};

const mockOnClickTab = testHelpers.fn();

const defaultProps: Omit<SideTabsProps, 'children'> = {
  side: 'left',
  showPanels: true,
  onClickTab: mockOnClickTab,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SideTabsProps>): RenderType => {
  return render(
    <SideTabs
      {...defaultProps}
      {...props}
    >
      <Tab
        key={tab1.title}
        title={tab1.title}
      >
        {tab1.body}
      </Tab>
      <Tab
        key={tab2.title}
        title={tab2.title}
      >
        {tab2.body}
      </Tab>
    </SideTabs>,
  );
};

describe('SideTabs - test', () => {
  it('should render the component correctly with side = `left`', () => {
    renderComponent();

    expect(screen.getByText(tab1.title)).toBeInTheDocument();
    expect(screen.getByText(tab1.body)).toBeInTheDocument();
    expect(screen.getByText(tab2.title)).toBeInTheDocument();
  });

  it('should render the component correctly with side = `right`', () => {
    renderComponent({ side: 'right' });

    expect(screen.getByText(tab1.title)).toBeInTheDocument();
    expect(screen.getByText(tab1.body)).toBeInTheDocument();
    expect(screen.getByText(tab2.title)).toBeInTheDocument();
  });

  it('should not render the tab content when showPanels is `false`', () => {
    renderComponent({ showPanels: false });

    expect(screen.queryByText(tab1.body)).not.toBeInTheDocument();
    expect(screen.queryByText(tab2.body)).not.toBeInTheDocument();
  });

  it('should not render the tab list when showTabList is `false`', () => {
    renderComponent({ showTabList: false });

    expect(screen.queryByText(tab1.title)).not.toBeInTheDocument();
    expect(screen.queryByText(tab2.title)).not.toBeInTheDocument();
  });

  it('should execute onClick when the tab is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(tab1.title));

    expect(mockOnClickTab).toHaveBeenCalled();
  });
});
