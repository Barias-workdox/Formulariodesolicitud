import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { MessageBoxActions } from '../../components';
import { useMessageBoxContext } from '../../hooks';

import type { MessageBoxActionsProps } from '../../message-box.interfaces';
import type { RenderType } from '@test/test-utils';
import type { Mock } from 'vitest';

vi.mock('../../hooks/use-message-box-context.hook', () => ({
  useMessageBoxContext: vi.fn(),
}));

const extraActionsClickMock = testHelpers.fn();

const extraActions = <button onClick={extraActionsClickMock}>Extra Actions</button>;

const defaultProps: MessageBoxActionsProps = {
  extraActions,
  primaryButtonText: 'Primary Button',
  secondaryButtonText: 'Secondary Button',
};

const renderComponent = (props?: Partial<MessageBoxActionsProps>): RenderType =>
  render(
    <MessageBoxActions
      {...defaultProps}
      {...props}
    />,
  );

describe('MessageBoxActions', () => {
  beforeEach(() => {
    (useMessageBoxContext as Mock).mockReturnValue({
      disabled: false,
      isEmpty: false,
      handleSubmit: testHelpers.fn(),
    });
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
    expect(screen.getByText('Extra Actions')).toBeInTheDocument();
  });

  it('should call extraActionsClickMock when extra actions is clicked', async () => {
    renderComponent();

    const extraActionsButton = screen.getByText('Extra Actions');

    await userEvent.click(extraActionsButton);

    expect(extraActionsClickMock).toHaveBeenCalled();
  });
});
