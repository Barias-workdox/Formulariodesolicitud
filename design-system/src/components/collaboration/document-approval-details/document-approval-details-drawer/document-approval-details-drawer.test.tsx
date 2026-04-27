import { render } from '@test/test-utils';

import { collaborationSubtasks } from '../../collaboration.stories.mocks';

import { DocumentApprovalDetailsDrawer } from './document-approval-details-drawer';

import type { DocumentApprovalDetailsDrawerProps } from './document-approval-details-drawer';
import type { RenderType } from '@test/test-utils';

const defaultProps: DocumentApprovalDetailsDrawerProps = {
  subtasks: collaborationSubtasks,
  isOpen: true,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDetailsDrawerProps>): RenderType => {
  return render(
    <DocumentApprovalDetailsDrawer
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentApprovalDetailsDrawer - test', () => {
  it('should render correctly', () => {
    const { getAllByLabelText } = renderComponent();

    expect(getAllByLabelText('document-approval-list').length).toBe(3);
  });

  it('should render correctly when subtasks is empty', () => {
    const { queryAllByLabelText } = renderComponent({ subtasks: [] });

    expect(queryAllByLabelText('document-approval-list').length).toBe(0);
  });

  it('should render correctly with the legacy invitation', () => {
    const { getAllByLabelText } = renderComponent();

    expect(getAllByLabelText('document-approval-list').length).toBe(3);
  });
});
