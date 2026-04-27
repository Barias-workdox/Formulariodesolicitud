import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { WebdoxAIButtonInformationPopover } from '../../components/webdox-ai-button-information-popover';

import type { WebdoxAIButtonInformationPopoverProps } from '../../components';
import type { RenderType } from 'test/test-utils';

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }) => children ?? i18nKey,
  };
});

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const userFirstName = 'First name';

const defaultProps: Omit<WebdoxAIButtonInformationPopoverProps, 'children'> = {
  'data-testid': baseDataTestId,
  user: {
    firstName: userFirstName,
  },
  variant: 'loading',
  isOpen: true,
  onClose: testHelpers.fn(),
  onOpen: testHelpers.fn(),
};

const renderComponent = (props?: Partial<WebdoxAIButtonInformationPopoverProps>): RenderType =>
  render(
    <WebdoxAIButtonInformationPopover
      {...defaultProps}
      {...props}
    >
      <button>{triggerButtonText}</button>
    </WebdoxAIButtonInformationPopover>,
  );

describe('WebdoxAIButtonInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component when variant is `loading`', async () => {
    renderComponent();

    expect(
      screen.getByText(
        t('webdoxAI.webdoxAIButton.greetings', {
          userName: userFirstName,
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component when variant is `genericError`', async () => {
    renderComponent({ variant: 'genericError' });

    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.title')),
    ).toBeInTheDocument();
  });

  it('should render the component when variant is `processFailedError`', async () => {
    renderComponent({ variant: 'processFailedError' });

    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.title')),
    ).toBeInTheDocument();
  });

  it('should render the component when variant is `active`', async () => {
    renderComponent({ variant: 'active' });

    expect(
      screen.getByText(
        t('webdoxAI.webdoxAIButton.greetings', {
          userName: userFirstName,
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the component when variant is `legalWhisperGreetings`', async () => {
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

  it('should render the component when variant is `suiteAIGreetings`', async () => {
    renderComponent({ variant: 'suiteAIGreetings' });

    expect(
      screen.getByText(
        t('webdoxAI.webdoxAIButton.greetings', {
          userName: userFirstName,
        }),
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('webdoxAI.webdoxAIButton.suiteAIGreetings.detail')).toBeInTheDocument();
  });
});
