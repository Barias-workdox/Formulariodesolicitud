import { render, renderUseTranslation, screen } from '@test/test-utils';

import { DocumentStatusTag } from './document-status-tag';

import type { DocumentStatusTagProps } from './document-status-tag';
import type { RenderType } from '@test/test-utils';

const defaultProps: DocumentStatusTagProps = {
  status: 'approved',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentStatusTagProps>): RenderType => {
  return render(
    <DocumentStatusTag
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentStatusTag - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly when the status is `approved`', () => {
    renderComponent();

    expect(screen.getByText(t('collaborationDetails.documentStatus.approved'))).toBeInTheDocument();
  });

  it('should render the component correctly when the status is `pending`', () => {
    renderComponent({ status: 'pending' });

    expect(screen.getByText(t('collaborationDetails.documentStatus.pending'))).toBeInTheDocument();
  });

  it('should render the component correctly when the status is `rejected`', () => {
    renderComponent({ status: 'rejected' });

    expect(screen.getByText(t('collaborationDetails.documentStatus.rejected'))).toBeInTheDocument();
  });
});
