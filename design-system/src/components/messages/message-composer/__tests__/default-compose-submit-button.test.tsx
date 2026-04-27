import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { DefaultComposerSubmitButton } from '../containers/default-composer-textarea-container/components/default-compose-submit-button';

import type { DefaultComposerSubmitButtonProps } from '../containers/default-composer-textarea-container/components/default-compose-submit-button';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'composer-submit-button';

const onCancelMock = testHelpers.fn();
const onCreateMock = testHelpers.fn();
const onUpdateMock = testHelpers.fn();

const defaultProps: DefaultComposerSubmitButtonProps = {
  'data-testid': baseDataTestId,
  isEditing: false,
  localValue: 'example',
  isDisabled: false,
  isLoading: false,
  onCancel: onCancelMock,
  onCreate: onCreateMock,
  onUpdate: onUpdateMock,
};

beforeEach(() => {
  testHelpers.resetAllMocks();
});

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DefaultComposerSubmitButtonProps>): RenderType =>
  render(
    <DefaultComposerSubmitButton
      {...defaultProps}
      {...props}
    />,
  );

describe('DefaultComposerSubmitButton - test', () => {
  const { t } = renderUseTranslation();

  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__send-button`)).toBeInTheDocument();
    expect(screen.getByText(t('general.send'))).toBeInTheDocument();
  });

  it('should execute `onCreate` correctly when the send button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(t('general.send')));

    expect(onCreateMock).toHaveBeenCalledWith(defaultProps.localValue);
  });

  it('should not generate any error when `onCreate` is undefined and the send button is clicked', async () => {
    renderComponent({ onCreate: undefined });

    await userEvent.click(screen.getByText(t('general.send')));

    expect(onCreateMock).not.toHaveBeenCalled();
  });

  it('should render correctly when `isEditing` is true', () => {
    renderComponent({ isEditing: true });

    expect(screen.getByTestId(`${baseDataTestId}__cancel-button`)).toBeInTheDocument();
    expect(screen.getByText(t('general.cancel'))).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__save-button`)).toBeInTheDocument();
    expect(screen.getByText(t('general.save'))).toBeInTheDocument();
  });

  it('should execute `onCancel` correctly when the cancel button is clicked', async () => {
    renderComponent({ isEditing: true });

    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(onCancelMock).toHaveBeenCalled();
  });

  it('should execute `onUpdate` correctly when the save button is clicked', async () => {
    renderComponent({ isEditing: true });

    await userEvent.click(screen.getByText(t('general.save')));

    expect(onUpdateMock).toHaveBeenCalled();
  });

  it('should not generate any error when `onCancel` and `onUpdate` are undefined', async () => {
    renderComponent({ isEditing: true, onUpdate: undefined, onCancel: undefined });

    await userEvent.click(screen.getByText(t('general.save')));
    await userEvent.click(screen.getByText(t('general.cancel')));

    expect(onUpdateMock).not.toHaveBeenCalled();
    expect(onCancelMock).not.toHaveBeenCalled();
  });
});
