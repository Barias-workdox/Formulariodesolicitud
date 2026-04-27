import { userEvent } from '@testing-library/user-event';
import zod from 'zod';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import { FormProviderControlWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { UserMultiselectControl } from './user-multiselect-control';

import type { UserMultiselectControlProps } from './user-multiselect-control';
import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: UserMultiselectControlProps = {
  placeholder: 'placeholder',
  name: 'userMultiSelect',
  defaultValue: undefined,
  users: [
    { id: 1, fullName: 'Andres Perez', email: 'andres@mail.com' },
    { id: 2, fullName: 'Carolina Maria', email: 'carolina@mail.com' },
  ],
  checkedUsers: [],
  isLoading: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UserMultiselectControlProps>): RenderType => {
  return render(
    <FormProviderControlWrapper onSubmit={mockOnSubmit}>
      <UserMultiselectControl
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit test</Button>
    </FormProviderControlWrapper>,
  );
};

describe('user-multiselect-control - tests', () => {
  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should return the default values when submitting', async () => {
    const checkedUsers = [{ id: 1, fullName: 'Carolina Maria', email: 'carolina@mail.com' }];

    renderComponent({ checkedUsers });

    // Open the dropdown
    const dropdownBtn = screen.getByTestId('user-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    // Click on the internalsave button
    const saveBtn = screen.getByText(t('userMultiselect.saveButton'));

    await userEvent.click(saveBtn);

    expect(saveBtn).toBeDisabled();
    expect(mockOnSubmit).not.toHaveBeenCalled();

    // Click on the submit button
    const submitBtn = screen.getByText('Submit test');

    await userEvent.click(submitBtn);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({ userMultiSelect: checkedUsers }),
      expect.anything(),
    );
  });

  it('should return the updated values when submitting', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    // Open the dropdown
    const dropdownBtn = screen.getByTestId('user-multiselect__wrapper');

    await userEvent.click(dropdownBtn);

    // Select the first user
    await userEvent.click(screen.getAllByRole('checkbox', { checked: false })[0]);

    // Click on the internal save button
    const saveBtn = screen.getByText(t('userMultiselect.saveButton'));

    await userEvent.click(saveBtn);

    // Click on the submit button
    const submitBtn = screen.getByText('Submit test');

    await userEvent.click(submitBtn);

    expect(mockOnSubmit).toHaveBeenLastCalledWith(
      expect.objectContaining({
        userMultiSelect: [defaultProps.users[0]],
      }),
      expect.anything(),
    );
  });

  it('should focus the multiselect when the form is submitted and there is an error', async () => {
    render(
      <FormProviderControlWrapper
        onSubmit={mockOnSubmit}
        schema={zod.object({
          userMultiSelect: zod
            .any()
            .refine((value) => Array.isArray(value) && value.length > 0, 'Required'),
        })}
        resolverType="zod"
      >
        <UserMultiselectControl
          {...defaultProps}
          checkedUsers={[]}
          defaultValue={[]}
        />
        <Button type="submit">Submit test</Button>
      </FormProviderControlWrapper>,
    );

    const dropdownBtn = screen.getByTestId('user-multiselect__wrapper');

    await userEvent.click(screen.getByRole('button', { name: 'Submit test' }));

    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument();
      expect(dropdownBtn).toHaveFocus();
    });
  });
});
