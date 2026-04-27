import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { SuiteAIGreetingsInformationPopover } from '../../components/webdox-ai-button-information-popover/components/suite-ai-greetings-information-popover';

import type { InformationPopoverCommonProps } from '../../components';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const userFirstName = 'First name';

const defaultProps: Omit<InformationPopoverCommonProps, 'children'> = {
  'data-testid': baseDataTestId,
  user: {
    firstName: userFirstName,
  },
  close: testHelpers.fn(),
  isOpen: true,
};

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }) => children ?? i18nKey,
  };
});

const renderComponent = (props?: Partial<InformationPopoverCommonProps>): RenderType =>
  render(
    <SuiteAIGreetingsInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </SuiteAIGreetingsInformationPopover>,
  );

describe('SuiteAIGreetingsInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(triggerButtonText));

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
