import { render, screen } from '@test/test-utils';

import { DataExtractionBetaLabel } from '../../components/data-extraction/components/data-extraction-beta/components/data-extraction-beta-label';

import type { RenderType } from '@test/test-utils';

const labelValue = 'Esse qui ullamco ex irure sit enim enim amet.';

const renderComponent = (): RenderType =>
  render(<DataExtractionBetaLabel>{labelValue}</DataExtractionBetaLabel>);

describe('ContractSummaryFormLabel - tests', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText(labelValue)).toBeInTheDocument();
  });
});
