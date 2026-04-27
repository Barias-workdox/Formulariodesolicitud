import userEvent from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { MessageBoxRoot } from '../../components';
import { useMessageBoxContext } from '../../hooks';

import type { MessageBoxRootProps } from '../../components';
import type { MessageBoxPlugin } from '../../message-box.interfaces';
import type { RenderType } from '@test/test-utils';
import type { Mock } from 'vitest';

vi.mock('../../hooks/use-message-box-context.hook', () => ({
  useMessageBoxContext: vi.fn(),
}));

const setIsFocusedMock = testHelpers.fn();

const pluginsMock: MessageBoxPlugin[] = [
  {
    name: 'test',
    render: () => <div>Test</div>,
  },
];

const defaultProps: MessageBoxRootProps = {
  children: <div>Children</div>,
};

const renderComponent = (props?: Partial<MessageBoxRootProps>): RenderType =>
  render(
    <div>
      <MessageBoxRoot
        {...defaultProps}
        {...props}
      />
      <div>Outside</div>
    </div>,
  );

describe('MessageBoxRoot', () => {
  beforeEach(() => {
    (useMessageBoxContext as Mock).mockReturnValue({
      setIsFocused: setIsFocusedMock,
      textValue: 'Test',
    });
  });

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render plugins correctly', () => {
    renderComponent({ plugins: pluginsMock });

    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should call setIsFocused when the root element is clicked', async () => {
    renderComponent();

    const outsideElement = screen.getByText('Outside');

    await userEvent.click(outsideElement);

    expect(setIsFocusedMock).toHaveBeenCalled();
  });
});
