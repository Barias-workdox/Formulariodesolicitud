import { render, screen } from '@test/test-utils';

import { NotificationLink } from '../notification-link';

import type { NotificationLinkProps } from '../notification-link';

const dataTestId = 'test';
const link = 'Link';

const defaultProps: NotificationLinkProps = {
  'data-testid': dataTestId,
  path: '/path',
  text: link,
};

const renderComponent = (props?: Partial<NotificationLinkProps>) =>
  render(
    <NotificationLink
      {...defaultProps}
      {...props}
    />,
  );

describe('NotificationLink', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(link)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--internal`)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--external`)).not.toBeInTheDocument();
  });

  it('should render the component in external mode', () => {
    renderComponent({ isExternal: true });

    expect(screen.getByText(link)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--external`)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--internal`)).not.toBeInTheDocument();
  });
});
