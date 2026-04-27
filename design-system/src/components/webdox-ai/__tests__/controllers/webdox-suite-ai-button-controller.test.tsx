import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { WebdoxSuiteAIButtonController } from '../../controllers/webdox-suite-ai-button-controller';

import type { WebdoxSuiteAIButtonControllerProps } from '../../controllers/webdox-suite-ai-button-controller';
import type { RenderType } from 'test/test-utils';

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }): JSX.Element => children ?? i18nKey,
  };
});

const baseDataTestId = 'webdox-suite-ai-button';
const userFirstName = 'First name';
const sendTextValue = 'Send text value';

const onCloseMock = testHelpers.fn();
const onSubmitMock = testHelpers.fn();
const onClickOptionMock = testHelpers.fn();

const defaultProps: WebdoxSuiteAIButtonControllerProps = {
  'data-testid': baseDataTestId,
  placement: 'bottomRight',
  onClickOption: onClickOptionMock,
  user: {
    firstName: userFirstName,
  },
  options: [
    {
      type: 'brainCompanion',
    },
    {
      type: 'legalWhisper',
    },
  ],
  popoverProps: {
    autoOpen: true,
    onClose: onCloseMock,
    onSubmit: onSubmitMock,
    sendTextValue,
  },
};

const renderComponent = (props?: Partial<WebdoxSuiteAIButtonControllerProps>): RenderType =>
  render(
    <WebdoxSuiteAIButtonController
      {...defaultProps}
      {...props}
    />,
  );

describe('WebdoxAIButtonController - tests', () => {
  const { t } = renderUseTranslation();

  describe('when has multiple suite options', () => {
    it('should render brain companion active popover when all suite options are active', () => {
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

    it('should render suite greetings popover when some option is loading', () => {
      renderComponent({
        options: [{ type: 'brainCompanion', isLoading: true }, { type: 'legalWhisper' }],
      });

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

    it('should execute `onClickOption` function when some suite option is clicked', async () => {
      renderComponent();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-legalWhisper`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-legalWhisper`));

      expect(onClickOptionMock).toHaveBeenCalledWith('legalWhisper');
    });

    it('should execute `onClose` popover prop when close icon is clicked', async () => {
      renderComponent();

      expect(
        screen.getByText('webdoxAI.webdoxAIButton.chatShortcutInformation.detail'),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__popover__header--close`));

      await waitFor(() => {
        expect(
          screen.queryByText(t('webdoxAI.webdoxAIButton.chatShortcutInformation.detail')),
        ).not.toBeInTheDocument();
      });
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  describe('when has only brain companion option', () => {
    it('should render brain companion active popover when is active', () => {
      renderComponent({ options: [{ type: 'brainCompanion' }] });

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

    it('should render greetings popover when is loading', () => {
      renderComponent({ options: [{ type: 'brainCompanion', isLoading: true }] });

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

    it('should render greetings popover when is loading and the option is clicked', async () => {
      renderComponent({ options: [{ type: 'brainCompanion', isLoading: true }] });

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-brainCompanion`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-brainCompanion`));

      expect(
        screen.getByText('webdoxAI.webdoxAIButton.documentInProcessInformation.detail'),
      ).toBeInTheDocument();
    });

    it('should render process failed error popover when error type is `documentEnable`', async () => {
      renderComponent({ options: [{ type: 'brainCompanion', errorType: 'documentEnable' }] });

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-brainCompanion`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-brainCompanion`));

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

    it('should render generic error popover when error type is not `documentEnable`', async () => {
      renderComponent({ options: [{ type: 'brainCompanion', errorType: 'createConversation' }] });

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-brainCompanion`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-brainCompanion`));

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
  });

  describe('when has only legal whisper option', () => {
    it('should render legal whisper active popover when is active', () => {
      renderComponent({ options: [{ type: 'legalWhisper' }] });

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

    it('should render greetings popover when is loading', () => {
      renderComponent({ options: [{ type: 'legalWhisper', isLoading: true }] });

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

    it('should render greetings popover when is loading and the option is clicked', async () => {
      renderComponent({ options: [{ type: 'legalWhisper', isLoading: true }] });

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-legalWhisper`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-legalWhisper`));

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

    it('should render generic error popover when error type is not `documentEnable`', async () => {
      renderComponent({ options: [{ type: 'legalWhisper', errorType: 'createConversation' }] });

      await userEvent.click(screen.getByTestId(`${baseDataTestId}__button--brain-icon`));

      expect(
        await screen.findByTestId(`${baseDataTestId}--option-legalWhisper`),
      ).toBeInTheDocument();

      await userEvent.click(screen.getByTestId(`${baseDataTestId}--option-legalWhisper`));

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
