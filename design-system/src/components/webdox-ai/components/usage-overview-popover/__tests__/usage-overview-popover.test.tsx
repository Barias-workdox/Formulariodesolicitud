import userEvent from '@testing-library/user-event';

import { Button } from '@components/button';
import { render, screen, type RenderType } from '@test/test-utils';

import { UsageOverviewPopover } from '../usage-overview-popover';

import type { UsageOverviewPopoverBodyProps, UsageOverviewPopoverHeaderProps } from '../components';

const defaultBodyProps = {
  description: 'Description example',
  totalRequests: 100,
  remainingRequests: 80,
  progressBarLabelText: 'ProgressBarLabelText example',
  disclaimer: 'Disclaimer example',
  warningDescription: 'WarningDescription example',
};

const defaultHeaderProps = {
  title: 'Title example',
  subtitle: 'Subtitle example',
  startEnhancer: <div>Start Enhancer</div>,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (
  args?: Partial<{
    bodyProps?: Partial<UsageOverviewPopoverBodyProps>;
    headerProps?: Partial<UsageOverviewPopoverHeaderProps>;
  }>,
): RenderType => {
  const { bodyProps, headerProps } = args ?? {};

  return render(
    <UsageOverviewPopover
      header={
        <UsageOverviewPopover.Header
          {...defaultHeaderProps}
          {...headerProps}
        />
      }
      body={
        <UsageOverviewPopover.Body
          {...defaultBodyProps}
          {...bodyProps}
        />
      }
      footer={<Button>Update Plan</Button>}
    >
      <Button>Open Popover</Button>
    </UsageOverviewPopover>,
  );
};

describe('UsageOverviewPopover - tests', () => {
  it('should render the component', async () => {
    renderComponent();

    const button = screen.getByText('Open Popover');

    await userEvent.click(button);

    expect(screen.getByText(defaultHeaderProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultHeaderProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText('Start Enhancer')).toBeInTheDocument();
    expect(screen.getByText(defaultBodyProps.description)).toBeInTheDocument();
    expect(screen.getByText(defaultBodyProps.progressBarLabelText)).toBeInTheDocument();
    expect(screen.getByText(defaultBodyProps.disclaimer)).toBeInTheDocument();
  });

  it('should render an alert when the remaining requests are 0', async () => {
    renderComponent({
      bodyProps: {
        remainingRequests: 0,
        warningDescription: 'WarningDescription example',
      },
    });

    const button = screen.getByText('Open Popover');

    await userEvent.click(button);

    expect(screen.getByText('WarningDescription example')).toBeInTheDocument();
  });
});
