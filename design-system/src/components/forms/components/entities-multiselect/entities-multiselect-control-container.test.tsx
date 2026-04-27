import { MOCK_ENTITIES } from '@components/entities-multiselect/entities-multiselect.constants';
import { render, testHelpers } from '@test/test-utils';

import { FormProviderWrapper } from '../../../../test/form-provider-utils';
import { Button } from '../../../button';

import { EntitiesMultiselectControlContainer } from './entities-multiselect-control-container';

import type { EntitiesMultiselectControlContainerProps } from './entities-multiselect-control-container';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: EntitiesMultiselectControlContainerProps = {
  options: MOCK_ENTITIES,
  name: 'entitiesMultiSelect',
  values: [{ id: '16', label: 'ABC - LumenPath Energy' }],
  placeholder: 'TestPlaceholder',
  onChange: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<EntitiesMultiselectControlContainerProps>): RenderType => {
  return render(
    <FormProviderWrapper onSubmit={mockOnClick}>
      <EntitiesMultiselectControlContainer
        {...defaultProps}
        {...props}
      />
      <Button type="submit">Submit</Button>
    </FormProviderWrapper>,
  );
};

describe('entities-multiselect-control-container - tests', () => {
  it('should render the component', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
