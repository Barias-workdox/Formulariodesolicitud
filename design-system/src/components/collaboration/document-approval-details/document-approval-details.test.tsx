import { render } from '@test/test-utils';

import { collaborationInvitations, collaborationSubtasks } from '../collaboration.stories.mocks';
import { getSubtasks } from '../collaboration.utils';

import { DocumentApprovalDetails } from './document-approval-details';

import type { CollaborationSubtask } from '../interfaces';
import type { DocumentApprovalDetailsProps } from './document-approval-details';
import type { RenderType } from '@test/test-utils';

const defaultProps: DocumentApprovalDetailsProps = {
  subtasks: collaborationSubtasks,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDetailsProps>): RenderType => {
  return render(
    <DocumentApprovalDetails
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentApprovalDetails - test', () => {
  it('should render correctly with the new DTO', () => {
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

  it('should convert a invitation to a subtask correctly', () => {
    const [result] = getSubtasks(collaborationInvitations, []);
    const [firstSubtaskData] = defaultProps.subtasks;
    const { updatedAt, createdAt } = firstSubtaskData;

    // Format dates to isoString without timezone
    const firstSubtask: CollaborationSubtask = {
      ...firstSubtaskData,
      updatedAt: new Date(updatedAt).toISOString(),
      createdAt: new Date(createdAt).toISOString(),
    };

    expect(result).toEqual(firstSubtask);
  });
});
