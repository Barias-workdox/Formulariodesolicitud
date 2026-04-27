import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import {
  WebdoxAICollapsibleButton,
  WebdoxAIOption,
} from '../../components/webdox-ai-collapsible-button';

import type { WebdoxAICollapsibleButtonProps } from '../../components/webdox-ai-collapsible-button';

const baseDataTestId = 'webdox-ai-collapsible-button';

const onClickMock = testHelpers.fn();
const onToggleMock = testHelpers.fn();

const defaultProps: WebdoxAICollapsibleButtonProps = {
  dataTestId: baseDataTestId,
  direction: 'column',
  isToggled: true,
  onToggle: onToggleMock,
  options: [
    <WebdoxAIOption
      key="legalWhisperOption"
      type="legalWhisper"
      onClick={onClickMock}
      data-testid={`${baseDataTestId}--legal-whisper`}
    />,
    <WebdoxAIOption
      key="brainCompanionOption"
      type="brainCompanion"
      onClick={onClickMock}
      data-testid={`${baseDataTestId}--brain-companion`}
    />,
  ],
};

const renderComponent = (props?: Partial<WebdoxAICollapsibleButtonProps>) => {
  return render(
    <WebdoxAICollapsibleButton
      {...defaultProps}
      {...props}
    />,
  );
};

describe('WebdoxAICollapsibleButton - tests', () => {
  it('should render the component correctly when is not toggled', () => {
    renderComponent({ isToggled: false });

    expect(screen.getByTestId(`${baseDataTestId}--brain-icon`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--close-icon`)).toBeInTheDocument();

    expect(screen.queryByTestId(`${baseDataTestId}--legal-whisper`)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`${baseDataTestId}--brain-companion`)).not.toBeInTheDocument();
  });

  it('should render the options correctly when collapsible button is toggled', async () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}--legal-whisper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--brain-companion`)).toBeInTheDocument();
  });

  it('should render the options correctly when `direction` is `row`', async () => {
    renderComponent({ direction: 'row' });

    expect(screen.getByTestId(`${baseDataTestId}--legal-whisper`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--brain-companion`)).toBeInTheDocument();
  });

  it('should execute `onClick` function correctly when the options are clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--legal-whisper`));
    await userEvent.click(screen.getByTestId(`${baseDataTestId}--brain-companion`));

    expect(onClickMock).toHaveBeenCalledTimes(2);
  });

  it('should execute `onToggle` function when the button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--brain-icon`));

    expect(onToggleMock).toHaveBeenCalled();
  });
});
