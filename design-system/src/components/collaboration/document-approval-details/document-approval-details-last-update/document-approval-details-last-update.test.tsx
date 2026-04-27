import { render, renderUseTranslation } from '@test/test-utils';

import { collaborationSubtasks } from '../../collaboration.stories.mocks';

import {
  DocumentApprovalDetailsLastUpdate,
  getLastUpdateDate,
} from './document-approval-details-last-update';

import type { DocumentApprovalDetailsLastUpdateProps } from './document-approval-details-last-update';
import type { RenderType } from '@test/test-utils';

const defaultProps: DocumentApprovalDetailsLastUpdateProps = {
  subtasks: collaborationSubtasks,
};

const lastUpdateDate = getLastUpdateDate(defaultProps.subtasks, 'es');

const { t } = renderUseTranslation();

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDetailsLastUpdateProps>): RenderType => {
  return render(
    <DocumentApprovalDetailsLastUpdate
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentApprovalDetailsLastUpdate - test', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();

    expect(
      getByText(
        t('collaborationDetails.updatedText.updated', {
          date: lastUpdateDate,
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render correctly when subtasks is empty', () => {
    const { queryByText } = renderComponent({ subtasks: [] });

    expect(
      queryByText(
        t('collaborationDetails.updatedText.updated', {
          date: lastUpdateDate,
        }),
      ),
    ).not.toBeInTheDocument();
  });

  it('should render correctly when showSubtitleText is `false`', () => {
    const { queryByText } = renderComponent({ showSubtitleText: false });

    expect(
      queryByText(
        t('collaborationDetails.updatedText.updated', {
          date: lastUpdateDate,
        }),
      ),
    ).not.toBeInTheDocument();
  });
});
