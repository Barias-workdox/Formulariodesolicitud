import { render, renderUseTranslation, screen } from '@test/test-utils';

import {
  LoadingState,
  type LoadingStateProps,
} from '../../../components/contract-summary/components/loading-state';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props: LoadingStateProps): RenderType => {
  return render(<LoadingState {...props} />);
};

describe('LoadingState - tests', () => {
  const { t } = renderUseTranslation();

  it('should render correctly when `summaryType` is `report`', async () => {
    renderComponent({ summaryType: 'report' });

    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractReportGeneration.isLoading')),
    ).toBeInTheDocument();
  });

  it('should render correctly when `summaryType` is `summary`', async () => {
    renderComponent({ summaryType: 'summary' });

    expect(
      screen.getByText(t('webdoxAI.dataExtraction.contractSummaryGeneration.isLoading')),
    ).toBeInTheDocument();
  });
});
