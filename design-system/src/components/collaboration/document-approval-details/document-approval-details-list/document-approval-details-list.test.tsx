import { render } from '@test/test-utils';

import { collaborationSubtasks } from '../../collaboration.stories.mocks';

import { DocumentApprovalDetailsList } from './document-approval-details-list';

import type { DocumentApprovalDetailsListProps } from './document-approval-details-list';
import type { RenderType } from '@test/test-utils';

const defaultProps: DocumentApprovalDetailsListProps = {
  subtasks: collaborationSubtasks,
  selectedDocumentId: '7a32b1d4c5a546309b1d7e22b50b53a4',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDetailsListProps>): RenderType => {
  return render(
    <DocumentApprovalDetailsList
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentApprovalDetailsList - test', () => {
  it('should render correctly', () => {
    const { getAllByLabelText } = renderComponent();

    expect(getAllByLabelText('document-approval-list').length).toBe(3);
  });

  it('should render correctly when subtasks is empty', () => {
    const { queryAllByLabelText } = renderComponent({ subtasks: [] });

    expect(queryAllByLabelText('document-approval-list').length).toBe(0);
  });

  it('should render correctly when selectedDocument is empty', () => {
    const { queryAllByLabelText } = renderComponent({ selectedDocumentId: '' });

    expect(queryAllByLabelText('document-approval-list').length).toBe(0);
  });
});
