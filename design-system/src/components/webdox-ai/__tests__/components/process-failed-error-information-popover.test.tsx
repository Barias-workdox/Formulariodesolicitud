import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ProcessFailedErrorInformationPopover } from '../../components/webdox-ai-button-information-popover/components/process-failed-error-information-popover';

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
  isOpen: true,
  close: testHelpers.fn(),
};

const renderComponent = (props?: Partial<InformationPopoverCommonProps>): RenderType =>
  render(
    <ProcessFailedErrorInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </ProcessFailedErrorInformationPopover>,
  );

describe('ProcessFailedErrorInformationPopover - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(triggerButtonText));

    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.title')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.detail')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.actions.reasons')),
    ).toBeInTheDocument();
  });
});
