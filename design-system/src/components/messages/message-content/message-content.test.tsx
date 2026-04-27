import { render, screen } from '@test/test-utils';

import { MessageContent } from './message-content';

import type { MessageContentProps } from './message-content';
import type { RenderType } from '@test/test-utils';

const defaultProps: MessageContentProps = {
  children: 'Example',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<MessageContentProps>): RenderType =>
  render(
    <MessageContent
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageAuthor - test', () => {
  it('should render correctly the children', () => {
    renderComponent();

    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
