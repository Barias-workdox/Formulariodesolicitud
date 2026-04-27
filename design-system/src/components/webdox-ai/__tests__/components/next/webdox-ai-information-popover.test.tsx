import { userEvent } from '@testing-library/user-event';

import { WebdoxAIButtonInformationPopover } from '@components/webdox-ai/components/webdox-ai-button-information-popover/next';
import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import type { WebdoxAIButtonInformationPopoverProps } from '@components/webdox-ai/components/webdox-ai-button-information-popover/next';
import type { RenderType } from 'test/test-utils';

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }): JSX.Element => children ?? i18nKey,
  };
});

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const userFirstName = 'First name';

const onSubmitMock = testHelpers.fn();
const mockReload = testHelpers.fn();
const originalLocation = location;

const defaultProps: Omit<WebdoxAIButtonInformationPopoverProps, 'children'> = {
  'data-testid': baseDataTestId,
  user: {
    firstName: userFirstName,
  },
  isOpen: true,
  variant: 'active',
  close: testHelpers.fn(),
  onSubmit: onSubmitMock,
};

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { reload: mockReload },
  });
});

afterAll(() => {
  Object.defineProperty(window, 'location', { configurable: true, value: originalLocation });
});

const renderComponent = (props?: Partial<WebdoxAIButtonInformationPopoverProps>): RenderType =>
  render(
    <WebdoxAIButtonInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </WebdoxAIButtonInformationPopover>,
  );

describe('WebdoxAIButtonInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  describe('when variant is `active`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'active' });

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

    it('should call submit function when send button is clicked', async () => {
      renderComponent({ variant: 'active' });

      const input = screen.getByTestId(
        `${baseDataTestId}__content__inline-composer-textarea-message-textarea`,
      );

      await userEvent.type(input, 'test');
      await userEvent.click(screen.getByRole('button', { name: t('general.send') }));

      expect(onSubmitMock).toHaveBeenCalledWith({ optionType: 'brainCompanion', value: 'test' });
    });
  });

  describe('when variant is `legalWhisperActive`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'legalWhisperActive' });

      expect(
        screen.getByText(
          t('webdoxAI.webdoxAIButton.greetings', {
            userName: userFirstName,
          }),
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.legalWhisperChatShortcut.detail'),
      ).toBeInTheDocument();
    });

    it('should call submit function when send button is clicked', async () => {
      renderComponent({ variant: 'legalWhisperActive' });

      const input = screen.getByTestId(
        `${baseDataTestId}__content__inline-composer-textarea-message-textarea`,
      );

      await userEvent.type(input, 'test');
      await userEvent.click(screen.getByRole('button', { name: t('general.send') }));

      expect(onSubmitMock).toHaveBeenCalledWith({ optionType: 'legalWhisper', value: 'test' });
    });
  });

  describe('when variant is `genericError`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'genericError' });

      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.title')),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.genericErrorInformation.detail'),
      ).toBeInTheDocument();
      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reasons')),
      ).toBeInTheDocument();
      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage')),
      ).toBeInTheDocument();
    });

    it('should execute reload function when reload page button is clicked', async () => {
      renderComponent({ variant: 'genericError' });

      await userEvent.click(
        screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage')),
      );

      expect(mockReload).toHaveBeenCalled();
    });
  });

  describe('when variant is `legalWhisperGreetings`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'legalWhisperGreetings' });

      expect(
        screen.getByText(
          t('webdoxAI.webdoxAIButton.greetings', {
            userName: userFirstName,
          }),
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.legalWhisperGreetings.detail'),
      ).toBeInTheDocument();
    });
  });

  describe('when variant is `loading`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'loading' });

      expect(
        screen.getByText(
          t('webdoxAI.webdoxAIButton.greetings', {
            userName: userFirstName,
          }),
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.documentInProcessInformation.detail'),
      ).toBeInTheDocument();
    });
  });

  describe('when variant is `processFailedError`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'processFailedError' });

      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.title')),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.processFailedErrorInformation.detail'),
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          t('webdoxAI.webdoxAIButton.processFailedErrorInformation.actions.reasons'),
        ),
      ).toBeInTheDocument();
    });
  });

  describe('when variant is `suiteAIGreetings`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'suiteAIGreetings' });

      expect(
        screen.getByText(
          t('webdoxAI.webdoxAIButton.greetings', {
            userName: userFirstName,
          }),
        ),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.suiteAIGreetings.detail'),
      ).toBeInTheDocument();
    });
  });

  describe('when variant is `legalWhisperGenericError`', () => {
    it('should render the component correctly', () => {
      renderComponent({ variant: 'legalWhisperGenericError' });

      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.legalWhisperGenericError.title')),
      ).toBeInTheDocument();
      expect(
        screen.getByText('webdoxAI.webdoxAIButton.legalWhisperGenericError.detail'),
      ).toBeInTheDocument();
      expect(
        screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage')),
      ).toBeInTheDocument();
    });
  });
});
