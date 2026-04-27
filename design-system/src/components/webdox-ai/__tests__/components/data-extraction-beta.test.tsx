import { userEvent } from '@testing-library/user-event';

import '../../../../test/__mocks__/clipboard.mock';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DataExtractionBeta } from '../../components/data-extraction/components/data-extraction-beta';

import type { DataExtractionBetaProps } from '../../components/data-extraction/components/data-extraction-beta';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'data-extraction-beta';

const onContractKindChangeMock = testHelpers.fn();
const onMetadataItemChangeMock = testHelpers.fn();

const metadataListMock = [
  { label: 'metadata-label1', value: 'metadata-value1', id: 'metadata-id1' },
  { label: 'metadata-label2', value: 'metadata-value2', id: 'metadata-id2' },
];
const contractKindsMock = [
  { label: 'kind-label1', value: 'kind-value1' },
  { label: 'kind-label2', value: 'kind-value2' },
];
const [contractKindMock] = contractKindsMock;

const defaultProps: DataExtractionBetaProps = {
  'data-testid': baseDataTestId,
  contractKind: contractKindMock,
  contractKinds: contractKindsMock,
  isContractKindLoading: false,
  isMetadataLoading: false,
  isPreparingMetadata: false,
  metadataList: metadataListMock,
  onContractKindChange: onContractKindChangeMock,
  onMetadataItemChange: onMetadataItemChangeMock,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DataExtractionBetaProps>): RenderType =>
  render(
    <DataExtractionBeta
      {...defaultProps}
      {...props}
    />,
  );

describe('DataExtractionBeta - tests', () => {
  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component successfully', async () => {
    renderComponent();

    expect(screen.getByText(t('webdoxAI.dataExtraction.contractType'))).toBeInTheDocument();
    expect(screen.getByText(t('general.betaVersion'))).toBeInTheDocument();

    // Select component
    const select = screen.getByTestId(`${baseDataTestId}--contract-kind-select__input`);

    await userEvent.click(select);

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    const options = screen.getAllByRole('option');

    contractKindsMock.forEach((contractKind, idx) => {
      expect(options[idx]).toHaveTextContent(contractKind.label);
    });

    // Metadata list
    metadataListMock.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('should execute `onContractKindChange` correctly', async () => {
    renderComponent();

    const select = screen.getByTestId(`${baseDataTestId}--contract-kind-select__input`);

    await userEvent.click(select);

    expect(screen.getByRole('listbox')).toBeInTheDocument();

    const option = screen.getByRole('option', { name: contractKindMock.label });

    await userEvent.click(option);

    expect(onContractKindChangeMock).toBeCalledWith(contractKindMock);
  });

  it('should execute `onMetadataItemChange` correctly', async () => {
    const extraText = 'testing';
    const [metadataToEdit] = metadataListMock;

    renderComponent();

    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__${metadataToEdit.id}--input-caption-edit-button`),
    );

    await userEvent.type(
      screen.getByTestId(`${baseDataTestId}__${metadataToEdit.id}--input-edit-input`),
      extraText,
    );

    await userEvent.click(
      screen.getByTestId(`${baseDataTestId}__${metadataToEdit.id}--submit-icon-button`),
    );

    expect(onMetadataItemChangeMock).toBeCalledWith({
      ...metadataToEdit,
      value: `${metadataToEdit.value}${extraText}`,
    });
  });

  it.each(metadataListMock)('should show edit element correctly', async ({ id }) => {
    renderComponent();

    const editButton = screen.getByTestId(`${baseDataTestId}__${id}--input-caption-edit-button`);

    await userEvent.click(editButton);

    expect(
      await screen.findByTestId(`${baseDataTestId}__${id}--submit-icon-button`),
    ).toBeInTheDocument();
    expect(
      await screen.findByTestId(`${baseDataTestId}__${id}--cancel-icon-button`),
    ).toBeInTheDocument();
  });

  it('should keep edit elements when their are modified', async () => {
    renderComponent();

    const [{ id: id1 }, { id: id2 }] = metadataListMock;

    const editButton1 = screen.getByTestId(`${baseDataTestId}__${id1}--input-caption-edit-button`);
    const editButton2 = screen.getByTestId(`${baseDataTestId}__${id2}--input-caption-edit-button`);

    await userEvent.click(editButton1);
    await userEvent.type(screen.getByRole('textbox'), 'test');

    await userEvent.click(editButton2);

    expect(
      await screen.findByTestId(`${baseDataTestId}__${id1}--submit-icon-button`),
    ).toBeInTheDocument();

    await userEvent.click(editButton2);

    expect(
      await screen.findByTestId(`${baseDataTestId}__${id2}--submit-icon-button`),
    ).toBeInTheDocument();
  });
});
