import userEvent from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { FormCardFooterActions } from '../form-card-footer-actions';

import type {
  FormCardFooterActionsProps,
  FormCardActionButtonProps,
} from '../form-card.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnCancelClick = testHelpers.fn();
const mockOnSubmitClick = testHelpers.fn();

const cancelButtonProps: FormCardActionButtonProps = { text: 'Cancel', onClick: mockOnCancelClick };
const submitButtonProps: FormCardActionButtonProps = { text: 'Submit', onClick: mockOnSubmitClick };

const defaultProps: FormCardFooterActionsProps = {
  cancelButton: cancelButtonProps,
  submitButton: submitButtonProps,
};

const renderComponent = (props?: Partial<FormCardFooterActionsProps>): RenderType =>
  render(
    <FormCardFooterActions
      {...defaultProps}
      {...props}
    />,
  );

describe('FormCardFooterActions', () => {
  it('should render both cancel and submit buttons', () => {
    renderComponent();

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should render only cancel button when submitButton is not provided', () => {
    renderComponent({ submitButton: undefined });

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  it('should render only submit button when cancelButton is not provided', () => {
    renderComponent({ cancelButton: undefined });

    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should not render any buttons when both are not provided', () => {
    renderComponent({ cancelButton: undefined, submitButton: undefined });

    expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    expect(screen.queryByText('Submit')).not.toBeInTheDocument();
  });

  it('should call onClick handler when cancel button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText('Cancel'));

    expect(mockOnCancelClick).toHaveBeenCalled();
  });

  it('should call onClick handler when submit button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByText('Submit'));

    expect(mockOnSubmitClick).toHaveBeenCalled();
  });

  it('should render disabled cancel button when disabled prop is true', () => {
    renderComponent({
      cancelButton: { ...cancelButtonProps, disabled: true },
    });

    expect(screen.getByText('Cancel')).toBeDisabled();
  });

  it('should render disabled submit button when disabled prop is true', () => {
    renderComponent({
      submitButton: { ...submitButtonProps, disabled: true },
    });

    expect(screen.getByText('Submit')).toBeDisabled();
  });
});
