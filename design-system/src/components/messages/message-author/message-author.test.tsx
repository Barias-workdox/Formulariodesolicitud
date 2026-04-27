import { render, screen } from '@test/test-utils';

import { MessageAuthor } from './message-author';

import type { MessageAuthorProps } from './message-author';
import type { RenderType } from '@test/test-utils';

const defaultProps: MessageAuthorProps = {
  label: 'message author',
  barColor: 'brand',
  labelColor: 'warning',
  children: 'Example',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageAuthorProps>): RenderType =>
  render(
    <MessageAuthor
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageAuthor - test', () => {
  it('should render correctly the children', () => {
    renderComponent();

    expect(screen.getByText(/Example/i)).toBeInTheDocument();
  });

  it('should render correctly the label', () => {
    renderComponent({ label: 'LabelExample' });

    expect(screen.getByText('LabelExample')).toBeInTheDocument();
  });
});
