import { render, screen } from '@test/test-utils';

import { MessageContainer, MessageHeader } from './message-layout';

import type { MessageContainerProps, MessageHeaderProps } from './message-layout';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'testing-message-container-data-testid';

const messageContainerDefaultProps: MessageContainerProps = {
  children: 'Example1',
  direction: 'normal',
  padding: '10px',
  'data-testid': dataTestId,
};

const messageHeaderDefaultProps: MessageHeaderProps = {
  children: 'Example2',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderMessageContainerComponent = (props?: Partial<MessageContainerProps>): RenderType =>
  render(
    <MessageContainer
      {...messageContainerDefaultProps}
      {...props}
    />,
  );

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderMessageHeaderComponent = (props?: Partial<MessageHeaderProps>): RenderType =>
  render(
    <MessageHeader
      {...messageHeaderDefaultProps}
      {...props}
    />,
  );

describe('MessageContainer - test', () => {
  it('should render the children correctly', () => {
    renderMessageContainerComponent();

    expect(screen.getByText('Example1')).toBeInTheDocument();
  });

  it('should find the element by data-testid', () => {
    renderMessageContainerComponent();

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });
});

describe('MessageHeader - test', () => {
  it('should render the children correctly', () => {
    renderMessageHeaderComponent();

    expect(screen.getByText('Example2')).toBeInTheDocument();
  });
});
