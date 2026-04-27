import '../../../../test/__mocks__/clipboard.mock';

import { fireEvent, render, screen, testHelpers, waitFor } from '@test/test-utils';

import { ContractSummary } from '../../components/contract-summary';

import type { ContractSummaryProps } from '../../components/contract-summary';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'chat-contract-summary';

const onSummaryScrollMock = testHelpers.fn();

const contractSummaryMock = 'Aliqua minim cupidatat laborum ullamco nostrud id veniam esse.';

const defaultProps: ContractSummaryProps = {
  'data-testid': baseDataTestId,
  contractSummary: contractSummaryMock,
  isContractKindLoading: false,
  isMetadataLoading: false,
  onSummaryScroll: onSummaryScrollMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ContractSummaryProps>): RenderType =>
  render(
    <ContractSummary
      {...defaultProps}
      {...props}
    />,
  );

describe('ContractSummary - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    renderComponent({ contractSummary: null });

    const generateSummaryButton = screen.getByTestId(`${baseDataTestId}--generate-summary--button`);

    const generateInformButton = screen.getByTestId(`${baseDataTestId}--generate-inform--button`);

    expect(generateSummaryButton).toBeInTheDocument();
    expect(generateInformButton).toBeInTheDocument();
  });

  it('should execute `onSummaryScroll` correctly', async () => {
    renderComponent();

    const scrollableContent = screen.getByTestId(`${baseDataTestId}--contract-summary-text`);

    fireEvent.scroll(scrollableContent);

    await waitFor(() => expect(onSummaryScrollMock).toHaveBeenCalled());
  });
});
