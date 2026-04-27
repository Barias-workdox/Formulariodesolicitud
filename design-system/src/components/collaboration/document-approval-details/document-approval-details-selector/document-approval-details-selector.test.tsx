import { render, testHelpers } from '@test/test-utils';

import { collaborationSubtasks } from '../../collaboration.stories.mocks';

import { DocumentApprovalDetailsSelector } from './document-approval-details-selector';

import type { DocumentApprovalDetailsSelectorProps } from './document-approval-details-selector';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: DocumentApprovalDetailsSelectorProps = {
  subtasks: collaborationSubtasks,
  documentSelected: [
    {
      id: '7a32b1d4c5a546309b1d7e22b50b53a4',
      label: 'blank-2022-04-16T13-14-24-04-00.xlsx',
      fileExt: 'xlsx',
    },
  ],
  setDocumentSelected: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentApprovalDetailsSelectorProps>): RenderType => {
  return render(
    <DocumentApprovalDetailsSelector
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentApprovalDetailsSelector - test', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();

    expect(getByText(defaultProps.documentSelected[0].label as string)).toBeInTheDocument();
  });

  it('should render correctly when subtasks is empty', () => {
    const { queryByText } = renderComponent({ subtasks: [] });

    expect(queryByText(defaultProps.documentSelected[0].label as string)).toBeInTheDocument();
  });

  it('should render correctly when documentSelected is empty', () => {
    const { queryByText } = renderComponent({ documentSelected: [] });

    expect(queryByText(defaultProps.documentSelected[0].label as string)).not.toBeInTheDocument();
  });
});
