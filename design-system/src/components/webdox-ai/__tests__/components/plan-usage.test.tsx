import userEvent from '@testing-library/user-event';

import { UsagePlanCounter } from '@components/webdox-ai/components/plan-usage';
import { render, renderUseTranslation, screen } from '@test/test-utils';

import type { PlanUsageCounterType } from '../../components/plan-usage/plan-usage.types';
import type { PlanType } from '@components/webdox-ai/interfaces/webdox-ia-plans.interfaces';
import type { RenderType } from '@test/test-utils';

const BASE_TEST_PLAN: PlanType = {
  id: 'legal_whisper',
  type: 'usage_status',
  resourceName: 'legal_whisper',
  capturedUnits: 50,
  reservedUnits: 0,
  remaining: 50,
  usageStatus: 'active',
  expirationDate: '2026-12-12',
  subscribedQuantity: 100,
};

const defaultProps: PlanUsageCounterType = {
  planName: 'legal_whisper',
  availablePlans: [BASE_TEST_PLAN] as PlanType[],
};

const renderComponent = (props?: Partial<PlanUsageCounterType>): RenderType =>
  render(
    <UsagePlanCounter
      {...defaultProps}
      {...props}
    />,
  );

const { t } = renderUseTranslation();

describe('UsagePlanCounter - tests', () => {
  it('should render the component properly', async () => {
    const user = userEvent.setup();

    const { container } = renderComponent();

    const counterTag = screen.getByTestId('usage-plan__counter-tag');

    expect(counterTag).toBeInTheDocument();

    await user.click(counterTag);

    const popover = container.querySelector('div[data-baseweb="popover"]');

    expect(popover).toBeInTheDocument();
  });

  it('should render the proper normal status for the plan', async () => {
    const normalPlanUsage: PlanType[] = [
      { ...BASE_TEST_PLAN, capturedUnits: 50, remaining: 50, usageStatus: 'active' },
    ];

    renderComponent({ availablePlans: normalPlanUsage });

    const counterTag = screen.getByTestId('usage-plan__counter-tag');

    expect(counterTag).toBeInTheDocument();

    expect(counterTag).toHaveTextContent('50/100');
  });

  it('should render the proper low status for the plan', async () => {
    const lowPlanUsage: PlanType[] = [
      { ...BASE_TEST_PLAN, capturedUnits: 75, remaining: 25, usageStatus: 'low' },
    ];

    renderComponent({ availablePlans: lowPlanUsage });

    const counterTag = screen.getByTestId('usage-plan__counter-tag');

    expect(counterTag).toBeInTheDocument();

    expect(counterTag).toHaveTextContent('25/100');
  });

  it('should render the proper exhausted status for the plan', async () => {
    const exhaustedPlanUsage: PlanType[] = [
      { ...BASE_TEST_PLAN, capturedUnits: 100, remaining: 0, usageStatus: 'exhausted' },
    ];

    renderComponent({ availablePlans: exhaustedPlanUsage });

    const counterTag = screen.getByTestId('usage-plan__counter-tag');

    expect(counterTag).toBeInTheDocument();

    expect(counterTag).toHaveTextContent('0/100');
  });

  it('should render no remaning request notification', async () => {
    const user = userEvent.setup();

    const exhaustedPlanUsage: PlanType[] = [
      { ...BASE_TEST_PLAN, capturedUnits: 100, remaining: 0, usageStatus: 'exhausted' },
    ];

    const { container } = renderComponent({ availablePlans: exhaustedPlanUsage });

    const counterTag = screen.getByTestId('usage-plan__counter-tag');

    expect(counterTag).toBeInTheDocument();

    expect(counterTag).toHaveTextContent('0/100');

    expect(counterTag).toBeInTheDocument();

    await user.click(counterTag);

    const notification = container.querySelector('div[data-baseweb="notification"]');

    expect(notification).toBeInTheDocument();

    expect(
      screen.getByText(t('webdoxAI.planUsage.popovers.planTrial.notification')),
    ).toBeInTheDocument();
  });
});
