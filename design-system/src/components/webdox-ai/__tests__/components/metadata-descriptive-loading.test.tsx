import { render, renderUseTranslation, screen } from '@test/test-utils';

import { MetadataDescriptiveLoading } from '../../components/data-extraction/components/data-extraction-beta/components/metadata-descriptive-loading';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => render(<MetadataDescriptiveLoading />);

const { t } = renderUseTranslation();

describe('MetadataDescriptiveLoading - tests', () => {
  it('should render the loading component with correct translations and elements', () => {
    renderComponent();

    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.title'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text1'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text2'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text3'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text4'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text5'))).toBeInTheDocument();
    expect(screen.getByText(t('webdoxAI.metadataDescriptiveLoading.text6'))).toBeInTheDocument();
  });
});
