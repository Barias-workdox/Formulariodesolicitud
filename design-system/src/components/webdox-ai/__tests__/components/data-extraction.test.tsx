import { chatStoriesUtils } from '@components/webdox-ai/__stories__/utils';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DataExtraction } from '../../components/data-extraction';

import type { DataExtractionProps } from '../../components/data-extraction/data-extraction.interfaces';
import type { RenderType } from '@test/test-utils';

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ i18nKey }: { i18nKey: string }) => i18nKey,
  };
});
const { options: CONTRACT_KINDS = [] } = chatStoriesUtils.getAnswerData();

const METADATA_MOCK_DATA = [
  {
    uuid: '84e4abc3-4d1f-4147-94ec-80cbfd97ed73',
    keyName: 'amount',
    dataType: 'money',
    value: '1800000.0',
    aiGenerated: true,
    extras: {
      currency: 'CLP',
    },
    dataValidation: {},
    createdAt: '2025-08-08T12:31:00.998-04:00',
    upedatedAt: '2025-08-08T12:31:00.998-04:00',
  },
  {
    uuid: 'ec688b3d-2d60-4252-bfd3-b190aa44983a',
    keyName: 'start_date',
    dataType: 'date',
    value: '2016-05-18 00:00:00 -0400',
    aiGenerated: true,
    extras: {},
    dataValidation: {},
    createdAt: '2025-08-08T12:31:01.055-04:00',
    upedatedAt: '2025-08-08T12:31:01.055-04:00',
  },
  {
    uuid: 'ec688b3d-2d60-4252-bfd3-b190aa4498ba',
    keyName: 'end_date',
    dataType: 'date',
    value: '2016-05-18 00:00:00 -0400',
    aiGenerated: true,
    extras: {},
    dataValidation: {},
    createdAt: '2025-08-08T12:31:01.055-04:00',
    upedatedAt: '2025-08-08T12:31:01.055-04:00',
  },
];

const baseDataTestId = 'data-extraction-section';
const contractKinds = CONTRACT_KINDS;
const isMetadataLoading = false;
const isPreparingMetadata = false;
const metadataList = METADATA_MOCK_DATA;
const isContractKindLoading = false;
const onDataExtractionHighlight = testHelpers.fn();
const onGoToClassificationButtonClick = testHelpers.fn();
const onGoToEntitiesDirectoryClick = testHelpers.fn();
const zIndex = 1;

const dataExtractionProps: DataExtractionProps = {
  'data-testid': baseDataTestId,
  contractKinds,
  isMetadataLoading,
  isPreparingMetadata,
  metadataList,
  onDataExtractionHighlight,
  onGoToClassificationButtonClick,
  onGoToEntitiesDirectoryClick,
  isContractKindLoading,
  zIndex,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (customProps = {}): RenderType =>
  render(
    <DataExtraction
      {...dataExtractionProps}
      {...customProps}
    />,
  );

describe('DataExtraction - tests', () => {
  const { t } = renderUseTranslation();

  it('should render component correctly', () => {
    renderComponent();

    expect(screen.getByText(t('webdoxAI.dataExtraction.dataExtractionTitle'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.dataExtraction.goToClassification'))).toBeInTheDocument();
  });

  it('should render component with loading warning msg', () => {
    renderComponent({ isPreparingMetadata: true, metadataList: METADATA_MOCK_DATA });

    expect(screen.getByText(t('webdoxAI.dataExtraction.dataExtractionTitle'))).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.dataExtraction.metadataAreLoadingMsg')),
    ).toBeInTheDocument();
  });

  it('should render all disabled buttons if metadata is loading', () => {
    renderComponent({ isMetadataLoading: true, metadataList: METADATA_MOCK_DATA });

    const disabledButtons = [
      ...screen.getAllByTestId('data-extraction-list-item__view-entities-directory--button'),
    ];

    expect(disabledButtons.every((button) => button.hasAttribute('aria-disabled'))).toBe(true);
  });

  it('should render all "-" placeholder values if metadata is loading', () => {
    renderComponent({ isMetadataLoading: true, metadataList: METADATA_MOCK_DATA });

    const listItems = screen.getAllByTestId('data-extraction-section__list-item');

    listItems.forEach((item) => {
      const paragraphDiv = item.querySelector('div[data-baseweb="typo-paragraphsmall"]');

      expect(paragraphDiv).not.toBeNull();
      expect(paragraphDiv).toHaveTextContent('-', { normalizeWhitespace: true });
    });
  });
});
