import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers, useToaster, waitFor } from '@test/test-utils';

import { Button } from '../../button';

import type { ToastBodyProps } from './toast.interface';
import type { RenderType } from '@test/test-utils';

const defaultProps: ToastBodyProps = {
  kind: 'positive',
  type: 'toast',
  title: 'title',
  body: 'body',
};

/** Button component to handle the event for rendering the toast */
const Component = ({ kind, title, body }: ToastBodyProps): JSX.Element => {
  const toaster = useToaster();

  return (
    <Button
      onClick={(): void => {
        toaster[kind]({
          title,
          body,
        });
      }}
    >
      Show Toast
    </Button>
  );
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ToastBodyProps>): RenderType => {
  return render(
    <Component
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Toast - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component when the button is clicked', async () => {
    renderComponent();

    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should remove the component when the closeIcon is clicked', async () => {
    renderComponent();

    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('alert')).toBeInTheDocument();

    const [, closeIcon] = screen.getAllByRole('button');

    await userEvent.click(closeIcon);

    await waitFor(() => expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument());
  });
});
