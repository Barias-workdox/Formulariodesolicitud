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

import '../../../../../test/__mocks__/clipboard.mock';

import { ContractSummaryDetailStep } from '../../../components/contract-summary/components/contract-summary-detail-step';

import type { ContractSummaryStepProps } from '@components/webdox-ai/components/contract-summary/contract-summary.types';
import type { RenderType } from '@test/test-utils';

const mockOnCopyToClipboardClick = testHelpers.fn();
const mockOnSummaryScroll = testHelpers.fn();
const mockOnClickBack = testHelpers.fn();

const dataTestId = 'data-testid';

const defaultProps = {
  'data-testid': dataTestId,
  contractSummary: 'Id amet id commodo elit Lorem reprehenderit dolor eu officia.',
  contractSummaryUpdatedAt: '2023-01-01T13:00:23.690-04:00',
  onContractSummaryCopy: mockOnCopyToClipboardClick,
  onSummaryScroll: mockOnSummaryScroll,
  onClickBack: mockOnClickBack,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractSummaryStepProps>): RenderType => {
  return render(
    <ContractSummaryDetailStep
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ContractSummaryDetailStep - tests', () => {
  const { t } = renderUseTranslation();

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component correctly', () => {
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

  it('should execute `onClickBack` correctly', async () => {
    renderComponent();

    const backButton = screen.getByTestId(`${dataTestId}__footer--back`);

    await userEvent.click(backButton);

    expect(mockOnClickBack).toHaveBeenCalled();
  });

  it('should execute `onContractSummaryCopy` correctly', async () => {
    renderComponent();

    const copyButton = screen.getByText(t('copyToClipboardButton.defaultText'));

    await userEvent.click(copyButton);

    await waitFor(() =>
      expect(mockOnCopyToClipboardClick).toHaveBeenCalledWith(defaultProps.contractSummary),
    );
  });

  it('should execute `onSummaryScroll` correctly', async () => {
    renderComponent();

    const scrollableContent = screen.getByTestId(`${dataTestId}--contract-summary-text`);

    fireEvent.scroll(scrollableContent);

    await waitFor(() => expect(mockOnSummaryScroll).toHaveBeenCalled());
  });
});
