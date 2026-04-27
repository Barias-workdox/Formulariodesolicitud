import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { WebdoxAIButtonController } from '../../controllers/webdox-ai-button-controller';

import type { WebdoxAIButtonControllerProps } from '../../controllers/webdox-ai-button-controller';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const userFirstName = 'First name';

const onClickMock = testHelpers.fn();
const onCloseMock = testHelpers.fn();
const onOpenMock = testHelpers.fn();

const defaultProps: Omit<WebdoxAIButtonControllerProps, 'children'> = {
  'data-testid': baseDataTestId,
  hasError: false,
  isLoading: false,
  user: {
    firstName: userFirstName,
  },
  onClick: onClickMock,
  popoverProps: {
    isOpen: false,
    onClose: onCloseMock,
    onOpen: onOpenMock,
  },
};

const renderComponent = (props?: Partial<WebdoxAIButtonControllerProps>): RenderType =>
  render(
    <WebdoxAIButtonController
      {...defaultProps}
      {...props}
    />,
  );

describe('WebdoxAIButtonController - tests', () => {
  const { t } = renderUseTranslation();

  it('should execute popover `onOpen` function when `isLoading` is `true`', async () => {
    renderComponent({ isLoading: true });

    const webdoxAIButton = screen.getByTestId(`${baseDataTestId}__webdox-ai-button`);

    await userEvent.click(webdoxAIButton);

    expect(webdoxAIButton).toBeInTheDocument();
    expect(onClickMock).not.toHaveBeenCalled();
    expect(onOpenMock).toHaveBeenCalled();
  });

  it('should execute popover `onOpen` function when `hasError` is `true`', async () => {
    renderComponent({ hasError: true });

    const webdoxAIButton = screen.getByTestId(`${baseDataTestId}__webdox-ai-button`);

    await userEvent.click(webdoxAIButton);

    expect(webdoxAIButton).toBeInTheDocument();
    expect(onClickMock).not.toHaveBeenCalled();
    expect(onOpenMock).toHaveBeenCalled();
  });

  it('should render the popover component correctly when `isLoading` is `true`', () => {
    renderComponent({
      isLoading: true,
      popoverProps: { ...defaultProps.popoverProps, isOpen: true },
    });

    expect(
      screen.getByText(
        t('webdoxAI.webdoxAIButton.greetings', {
          userName: userFirstName,
        }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the popover component correctly when `hasError` is `true`', () => {
    renderComponent({
      hasError: true,
      popoverProps: { ...defaultProps.popoverProps, isOpen: true },
    });

    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.genericErrorInformation.title')),
    ).toBeInTheDocument();
  });

  it('should render the popover component correctly when `hasError` is `true` and `errorType` is `documentEnable`', () => {
    renderComponent({
      hasError: true,
      errorType: 'documentEnable',
      popoverProps: { ...defaultProps.popoverProps, isOpen: true },
    });

    expect(
      screen.getByText(t('webdoxAI.webdoxAIButton.processFailedErrorInformation.title')),
    ).toBeInTheDocument();
  });

  it('should execute popover `onClose` function when close button is clicked', async () => {
    renderComponent({
      hasError: true,
      popoverProps: { ...defaultProps.popoverProps, isOpen: true },
    });

    await userEvent.click(screen.getByTestId(`${baseDataTestId}__popover__header--close`));

    expect(onCloseMock).toBeCalled();
  });

  it('should execute `onClick` function when `hasError` and `isLoading` are `false`', async () => {
    renderComponent({ isLoading: false, hasError: false });

    const webdoxAIButton = screen.getByTestId(`${baseDataTestId}__webdox-ai-button`);

    await userEvent.click(webdoxAIButton);

    expect(onClickMock).toHaveBeenCalled();
  });
});
