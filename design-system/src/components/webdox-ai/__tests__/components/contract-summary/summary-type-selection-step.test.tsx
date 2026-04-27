import { userEvent } from '@testing-library/user-event';

import '../../../../../test/__mocks__/clipboard.mock';

import {
  type RenderType,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
} from '@test/test-utils';

import { SummaryTypeSelectionStep } from '../../../components/contract-summary/components/summary-type-selection-step';

import type { ContractSummaryStepProps } from '@components/webdox-ai/components/contract-summary/contract-summary.types';

const mockOnClick = testHelpers.fn();

const dataTestId = 'data-testid';

const defaultProps = {
  'data-testid': dataTestId,
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractSummaryStepProps>): RenderType => {
  return render(
    <SummaryTypeSelectionStep
      {...defaultProps}
      {...props}
    />,
  );
};

describe('SummaryTypeSelectionStep - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', () => {
    renderComponent();

    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractSummaryGeneration.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractSummaryGeneration.description')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractReportGeneration.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractReportGeneration.description')),
    ).toBeInTheDocument();
  });

  it('should execute `onClick` correctly', async () => {
    renderComponent();

    const summaryButton = screen.getByText(
      t('webdoxAI.dataExtraction.contractSummaryGeneration.title'),
    );
    const reportButton = screen.getByText(
      t('webdoxAI.dataExtraction.contractReportGeneration.title'),
    );

    await userEvent.click(summaryButton);
    await userEvent.click(reportButton);

    expect(mockOnClick).toHaveBeenNthCalledWith(1, 'summary');
    expect(mockOnClick).toHaveBeenNthCalledWith(2, 'report');
  });
});
