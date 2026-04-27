import { render, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import {
  UserMultiselectControlContainer,
  type UserMultiselectControlContainerProps,
} from './user-multiselect-control.container';

import type { RenderType } from '@test/test-utils';

const mockOnSubmit = testHelpers.fn();

const defaultProps: UserMultiselectControlContainerProps = {
  placeholder: 'placeholder',
  name: 'select',
  defaultValue: undefined,
  users: [
    { id: 1, fullName: 'Carolina Maria', email: 'carolina@mail.com' },
    { id: 2, fullName: 'Andres Perez', email: 'andres@mail.com' },
  ],
  checkedUsers: [],
  isLoading: false,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<UserMultiselectControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnSubmit}>
      <UserMultiselectControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('user-multiselect-control-container - tests', () => {
  it('should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
