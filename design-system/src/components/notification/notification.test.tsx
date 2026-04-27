import { Button } from '@components/button';
import { render, screen } from '@test/test-utils';

import { Notification } from './notification';

import type { NotificationProps } from './notification';
import type { RenderType } from '@test/test-utils';

const defaultProps = {
  title: 'Lorem ipsum',
  description: 'is simply dummy text of the printing and typesetting industry.',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<NotificationProps>): RenderType => {
  return render(
    <Notification
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Notification test', () => {
  it('should render the component', () => {
    renderComponent();

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title.toString())).toBeInTheDocument();
  });

  it('should render the description property not the message property', () => {
    const props: Partial<NotificationProps> = {
      message: 'this es the message property to test the component',
    };

    renderComponent({ ...props });

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.queryByText(props.message)).not.toBeInTheDocument();
  });

  it('should render the message property', () => {
    const props: Partial<NotificationProps> = {
      message: 'this es the message property to test the component',
      description: undefined,
    };

    renderComponent({ ...props });

    expect(screen.getByText(props.message)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.title).parentElement.textContent).toBe(
      defaultProps.title + props.message,
    );
  });

  it('should render only the title', () => {
    const props: Partial<NotificationProps> = {
      message: undefined,
      description: undefined,
    };

    renderComponent({ ...props });

    expect(screen.getByText(defaultProps.title).parentElement.textContent).toBe(defaultProps.title);
  });

  it('should find the element by data-testid', () => {
    const dataTestId = 'testing-notification-data-testid';

    renderComponent({ 'data-testid': dataTestId });

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });
  it('should render endEnhancer', () => {
    const mockText = 'Click';

    renderComponent({ endEnhancer: <Button>{mockText}</Button> });

    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});
