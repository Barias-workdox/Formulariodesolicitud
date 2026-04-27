import { userEvent } from '@testing-library/user-event';

import { mockBreakpoints } from '@test/__mocks__/breakpoints.mock';
import { render, screen, testHelpers } from '@test/test-utils';

import { BasicMessageBoxActions } from '../../components';
import { useMessageBoxContext } from '../../hooks';
import { composeMessageBoxActionsTestId } from '../../utils';

import type { BasicMessageBoxActionsProps } from '../../components';
import type { RenderType } from '@test/test-utils';
import type { Mock } from 'vitest';

vi.mock('../../hooks/use-message-box-context.hook', () => ({
  useMessageBoxContext: vi.fn(),
}));

const onSubmitMock = testHelpers.fn();
const onSecondaryButtonClickMock = testHelpers.fn();

const defaultProps: BasicMessageBoxActionsProps = {
  primaryButtonText: 'Primary Button',
};

const renderComponent = (props?: Partial<BasicMessageBoxActionsProps>): RenderType =>
  render(
    <BasicMessageBoxActions
      {...defaultProps}
      {...props}
    />,
  );

describe('BasicMessageBoxActions', () => {
  beforeEach(() => {
    (useMessageBoxContext as Mock).mockReturnValue({
      disabled: false,
      isEmpty: false,
      handleSubmit: onSubmitMock,
    });
  });

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  describe('desktop', () => {
    beforeEach(() => {
      mockBreakpoints('medium');
    });

    it('should render correctly', () => {
      renderComponent();

      expect(screen.getByText('Primary Button')).toBeInTheDocument();
    });

    it('should render secondary button when secondaryButtonText is provided', () => {
      renderComponent({
        secondaryButtonText: 'Cancel',
        onSecondaryButtonClick: onSecondaryButtonClickMock,
      });

      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Primary Button')).toBeInTheDocument();
    });

    it('should disable primary button when message box is disabled', () => {
      (useMessageBoxContext as Mock).mockReturnValue({ disabled: true, isEmpty: false });

      renderComponent();

      const primaryButton = screen.getByText('Primary Button');

      expect(primaryButton).toBeDisabled();
    });

    it('should disable primary button when message box is empty', () => {
      (useMessageBoxContext as Mock).mockReturnValue({ disabled: false, isEmpty: true });

      renderComponent();

      const primaryButton = screen.getByText('Primary Button');

      expect(primaryButton).toBeDisabled();
    });

    it('should call onSubmit when primary button is clicked', async () => {
      renderComponent();

      const primaryButton = screen.getByText('Primary Button');

      await userEvent.click(primaryButton);

      expect(onSubmitMock).toHaveBeenCalled();
    });

    it('should call onSecondaryButtonClick when secondary button is clicked', async () => {
      renderComponent({
        secondaryButtonText: 'Cancel',
        onSecondaryButtonClick: onSecondaryButtonClickMock,
      });

      const secondaryButton = screen.getByText('Cancel');

      await userEvent.click(secondaryButton);

      expect(onSecondaryButtonClickMock).toHaveBeenCalled();
    });
  });

  describe('mobile', () => {
    beforeEach(() => {
      mockBreakpoints('small');
    });

    it('should render correctly', () => {
      renderComponent();

      expect(
        screen.getByTestId(composeMessageBoxActionsTestId('__primary-button')),
      ).toBeInTheDocument();
    });

    it('should render secondary button when secondaryButtonText is provided', () => {
      renderComponent({
        secondaryButtonText: 'Cancel',
        onSecondaryButtonClick: onSecondaryButtonClickMock,
      });

      expect(
        screen.getByTestId(composeMessageBoxActionsTestId('__secondary-button')),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(composeMessageBoxActionsTestId('__primary-button')),
      ).toBeInTheDocument();
    });

    it('should disable primary button when message box is disabled', () => {
      (useMessageBoxContext as Mock).mockReturnValue({ disabled: true, isEmpty: false });

      renderComponent();

      const primaryButton = screen.getByTestId(composeMessageBoxActionsTestId('__primary-button'));

      expect(primaryButton).toBeDisabled();
    });

    it('should disable primary button when message box is empty', () => {
      (useMessageBoxContext as Mock).mockReturnValue({ disabled: false, isEmpty: true });

      renderComponent();

      const primaryButton = screen.getByTestId(composeMessageBoxActionsTestId('__primary-button'));

      expect(primaryButton).toBeDisabled();
    });

    it('should call onSubmit when primary button is clicked', async () => {
      renderComponent();

      const primaryButton = screen.getByTestId(composeMessageBoxActionsTestId('__primary-button'));

      await userEvent.click(primaryButton);

      expect(onSubmitMock).toHaveBeenCalled();
    });

    it('should call onSecondaryButtonClick when secondary button is clicked', async () => {
      renderComponent({
        secondaryButtonText: 'Cancel',
        onSecondaryButtonClick: onSecondaryButtonClickMock,
      });

      const secondaryButton = screen.getByTestId(
        composeMessageBoxActionsTestId('__secondary-button'),
      );

      await userEvent.click(secondaryButton);

      expect(onSecondaryButtonClickMock).toHaveBeenCalled();
    });
  });
});
