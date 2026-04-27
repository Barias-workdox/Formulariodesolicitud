import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import {
  TEST_DEFAULT_LOCALE,
  fireEvent,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { ContractSummary } from '../../../components/contract-summary';
import * as webdoxUtils from '../../../utils/webdox-ai-plans.utils';

import '../../../../../test/__mocks__/clipboard.mock';

import type { ContractSummaryProps } from '../../../components/contract-summary';
import type { RenderType } from '@test/test-utils';

const mockOnCopyToClipboardClick = testHelpers.fn();
const mockOnGenerateContractSummary = testHelpers.fn();
const mockOnSummaryScroll = testHelpers.fn();

vi.spyOn(webdoxUtils, 'planHasCredits').mockImplementation(() => true);

const dataTestId = 'data-testid';

const defaultProps: ContractSummaryProps = {
  'data-testid': dataTestId,
  contractSummary: 'Id amet id commodo elit Lorem reprehenderit dolor eu officia.',
  contractSummaryUpdatedAt: '2023-01-01T13:00:23.690-04:00',
  isContractSummaryLoading: false,
  onContractSummaryCopy: mockOnCopyToClipboardClick,
  onGenerateContractSummary: mockOnGenerateContractSummary,
  onSummaryScroll: mockOnSummaryScroll,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractSummaryProps>): RenderType => {
  return render(
    <ContractSummary
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ContractSummary - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly when `contractSummary` is not defined', () => {
    renderComponent({ contractSummary: undefined });

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

  it('should render the component correctly when `contractSummary` is defined', () => {
    renderComponent();

    expect(screen.getByTestId(`${dataTestId}__footer--back`)).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}__footer--copy`)).toBeInTheDocument();
    expect(
      screen.getByText(
        formatDateAsText(defaultProps.contractSummaryUpdatedAt, TEST_DEFAULT_LOCALE, true),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(t('copyToClipboardButton.defaultText'))).toBeInTheDocument();
  });

  it('should render the component correctly when is loading', () => {
    renderComponent({ isContractSummaryLoading: true });

    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractSummaryGeneration.isLoading')),
    ).toBeInTheDocument();
  });

  it('should execute `onGenerateContractSummary` when generate summary button is clicked', async () => {
    renderComponent({ contractSummary: undefined });

    const summaryButton = screen.getByText(
      t('webdoxAI.dataExtraction.contractSummaryGeneration.title'),
    );

    await userEvent.click(summaryButton);

    expect(mockOnGenerateContractSummary).toHaveBeenCalledWith('summary');
  });

  it('should execute `onGenerateContractSummary` when generate report button is clicked', async () => {
    renderComponent({ contractSummary: undefined });

    const reportButton = screen.getByText(
      t('webdoxAI.dataExtraction.contractReportGeneration.title'),
    );

    await userEvent.click(reportButton);

    expect(mockOnGenerateContractSummary).toHaveBeenCalledWith('report');
  });

  it('should execute `onSummaryScroll` correctly', async () => {
    renderComponent();

    const scrollableContent = screen.getByTestId(`${dataTestId}--contract-summary-text`);

    fireEvent.scroll(scrollableContent);

    await waitFor(() => expect(mockOnSummaryScroll).toHaveBeenCalled());
  });

  it('should go to type selection step when back button is clicked within the summary detail step', async () => {
    renderComponent();

    const backButton = screen.getByTestId(`${dataTestId}__footer--back`);

    await userEvent.click(backButton);

    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractSummaryGeneration.title')),
    ).toBeInTheDocument();
  });
});
