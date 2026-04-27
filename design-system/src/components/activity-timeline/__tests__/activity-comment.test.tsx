import { render, screen } from '@test/test-utils';

import { ActivityComment } from '../components/activity-comment';

import type { ActivityCommentProps } from '../components/activity-comment/activity-comment';
import type { RenderType } from '@test/test-utils';

const mockComment = 'Example comment';

const defaultProps: ActivityCommentProps = {
  comment: mockComment,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ActivityCommentProps>): RenderType => {
  return render(
    <ActivityComment
      {...defaultProps}
      {...props}
    />,
  );
};

describe('ActivityComment - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(mockComment)).toBeInTheDocument();
  });
});
