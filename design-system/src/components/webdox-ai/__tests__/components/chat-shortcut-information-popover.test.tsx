import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ChatShortcutInformationPopover } from '../../components/webdox-ai-button-information-popover/components/chat-shortcut-information-popover';

import type { InformationPopoverCommonProps } from '../../components';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const userFirstName = 'First name';

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }) => children ?? i18nKey,
  };
});

const defaultProps: Omit<InformationPopoverCommonProps, 'children'> = {
  'data-testid': baseDataTestId,
  user: {
    firstName: userFirstName,
  },
  isOpen: true,
  close: testHelpers.fn(),
};

const renderComponent = (props?: Partial<InformationPopoverCommonProps>): RenderType =>
  render(
    <ChatShortcutInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </ChatShortcutInformationPopover>,
  );

describe('ChatShortcutInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component', async () => {
    renderComponent();

    expect(
      screen.getByText(
        t('webdoxAI.webdoxAIButton.greetings', {
          userName: userFirstName,
        }),
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText('webdoxAI.webdoxAIButton.chatShortcutInformation.detail'),
    ).toBeInTheDocument();
  });

  it('should render send message', async () => {
    const onSendClickMock = testHelpers.fn();

    renderComponent({ onSendClick: onSendClickMock });

    const input = screen.getByTestId(
      'information-popover__inline-composer-textarea-message-textarea',
    );

    await userEvent.click(screen.getByText(triggerButtonText));
    await userEvent.type(input, 'test');
    await userEvent.click(screen.getByRole('button', { name: t('general.send') }));
    expect(onSendClickMock).toHaveBeenCalledWith('test');
  });
});
