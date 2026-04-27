import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { GenericErrorInformationPopover } from '../../components/webdox-ai-button-information-popover/components/generic-error-information-popover';

import type { InformationPopoverCommonProps } from '../../components';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const userFirstName = 'First name';

const mockReload = testHelpers.fn();
const originalLocation = location;

const defaultProps: Omit<InformationPopoverCommonProps, 'children'> = {
  'data-testid': baseDataTestId,
  user: {
    firstName: userFirstName,
  },
  isOpen: true,
  close: testHelpers.fn(),
};

Object.defineProperty(window, 'location', {
  value: { reload: mockReload },
});

vi.mock('react-i18next', async () => {
  const actual = await vi.importActual('react-i18next');

  return {
    ...actual,
    Trans: ({ children, i18nKey }) => children ?? i18nKey,
  };
});

const renderComponent = (props?: Partial<InformationPopoverCommonProps>): RenderType =>
  render(
    <GenericErrorInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </GenericErrorInformationPopover>,
  );

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: { reload: mockReload },
  });
});

afterAll(() => {
  Object.defineProperty(window, 'location', { configurable: true, value: originalLocation });
});

describe('DocumentProcessingErrorInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(triggerButtonText));

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
    renderComponent();

    await userEvent.click(screen.getByText(triggerButtonText));
    await userEvent.click(
      screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage')),
    );

    expect(mockReload).toHaveBeenCalled();
  });
});
