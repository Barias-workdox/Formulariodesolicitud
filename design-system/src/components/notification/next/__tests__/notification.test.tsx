import { render, screen } from '@test/test-utils';

import { Notification } from '../notification';

import type { NotificationProps } from '../notification';

const dataTestId = 'test';
const title = 'title';
const description = 'description';
const actions = 'actions';

const defaultProps: NotificationProps = {
  'data-testid': dataTestId,
  description,
};

const renderComponent = (props?: Partial<NotificationProps>) =>
  render(
    <Notification
      {...defaultProps}
      {...props}
    />,
  );

describe('Notification', () => {
  it('should render the component successfully', () => {
    renderComponent();

    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--spinner`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${dataTestId}--close-button`)).not.toBeInTheDocument();
    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText(actions)).not.toBeInTheDocument();
  });

  it('should render the component with the info kind', () => {
    renderComponent({ kind: 'info' });

    expect(screen.getByTestId(`${dataTestId}--icon-info--wrapper`)).toBeInTheDocument();
  });

  it('should render the component with the negative kind', () => {
    renderComponent({ kind: 'negative' });

    expect(screen.getByTestId(`${dataTestId}--icon-negative--wrapper`)).toBeInTheDocument();
  });

  it('should render the component with the positive kind', () => {
    renderComponent({ kind: 'positive' });

    expect(screen.getByTestId(`${dataTestId}--icon-positive--wrapper`)).toBeInTheDocument();
  });

  it('should render the component with the warning kind', () => {
    renderComponent({ kind: 'warning' });

    expect(screen.getByTestId(`${dataTestId}--icon-warning--wrapper`)).toBeInTheDocument();
  });

  it('should render the component with the infoAI kind', () => {
    renderComponent({ kind: 'infoAI' });

    expect(screen.getByTestId(`${dataTestId}--icon-infoAI--wrapper`)).toBeInTheDocument();
  });

  it('should render the component with a spinner', () => {
    renderComponent({ showSpinner: true });

    expect(screen.getByTestId(`${dataTestId}--spinner`)).toBeInTheDocument();
  });

  it('should render the component with the close button', () => {
    renderComponent({ closeable: true });

    expect(screen.getByTestId(`${dataTestId}--close-button`)).toBeInTheDocument();
  });

  it('should render the component with a title', () => {
    renderComponent({ title });

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render the component with custom actions', () => {
    renderComponent({ actions });

    expect(screen.getByText(actions)).toBeInTheDocument();
  });
});
