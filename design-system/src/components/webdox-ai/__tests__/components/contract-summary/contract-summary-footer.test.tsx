import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import {
  TEST_DEFAULT_LOCALE,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { ContractSummaryFooter } from '../../../components/contract-summary/components/contract-summary-footer';

import type { ContractSummaryFooterProps } from '../../../components/contract-summary/components/contract-summary-footer';
import type { RenderType } from '@test/test-utils';

const mockOnCopyToClipboardClick = testHelpers.fn();
const mockOnGenerateContractSummary = testHelpers.fn();
const mockOnClickBack = testHelpers.fn();

const dataTestId = 'data-testid';

const defaultProps: ContractSummaryFooterProps = {
  'data-testid': dataTestId,
  contractSummary: 'Id amet id commodo elit Lorem reprehenderit dolor eu officia.',
  contractSummaryUpdatedAt: '2023-01-01T13:00:23.690-04:00',
  isContractSummaryLoading: false,
  onContractSummaryCopy: mockOnCopyToClipboardClick,
  onGenerateContractSummary: mockOnGenerateContractSummary,
  onClickBack: mockOnClickBack,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractSummaryFooterProps>): RenderType => {
  return render(
    <ContractSummaryFooter
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ContractSummaryFooter - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', async () => {
    renderComponent();

    expect(
      screen.getByText(
        formatDateAsText(defaultProps.contractSummaryUpdatedAt, TEST_DEFAULT_LOCALE, true),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(t('copyToClipboardButton.defaultText'))).toBeInTheDocument();
  });

  it('should execute `onContractSummaryCopy` correctly', async () => {
    renderComponent();

    const copyButton = screen.getByText(t('copyToClipboardButton.defaultText'));

    await userEvent.click(copyButton);

    await waitFor(() =>
      expect(mockOnCopyToClipboardClick).toHaveBeenCalledWith(defaultProps.contractSummary),
    );
  });

  it('should execute `onClickBack` correctly', async () => {
    renderComponent();

    const backButton = screen.getByTestId(`${dataTestId}--back`);

    await userEvent.click(backButton);

    expect(mockOnClickBack).toHaveBeenCalled();
  });
});
