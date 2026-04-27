import { MessageCardTitle } from '@components/message-card/components/message-card-title';
import { render, screen } from '@test/test-utils';

import type { MessageCardTitleProps } from '@components/message-card/components/message-card-title';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'message-card-title';

const defaultProps: MessageCardTitleProps = {
  'data-testid': baseDataTestId,
  title: 'example-title',
};

const IconMock = () => <div data-testid={`${baseDataTestId}__title-icon--icon`} />;

const renderComponent = (props?: Omit<MessageCardTitleProps, 'title'>): RenderType =>
  render(
    <MessageCardTitle
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageCardTitle - tests', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render correctly when Icon is `undefined` but showIcon is true', () => {
    renderComponent({ Icon: undefined, showIcon: true });

    expect(screen.queryByTestId(`${baseDataTestId}__title-icon--icon`)).not.toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render correctly when Icon is defined but showIcon is false', () => {
    renderComponent({ Icon: <IconMock />, showIcon: false });

    expect(screen.queryByTestId(`${baseDataTestId}__title-icon--icon`)).not.toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it('should render correctly when Icon is defined and showIcon is true', () => {
    renderComponent({ Icon: <IconMock />, showIcon: true });

    expect(screen.queryByTestId(`${baseDataTestId}__title-icon--icon`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });
});
