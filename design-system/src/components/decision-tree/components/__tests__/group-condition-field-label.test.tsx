import { CharacterLowerCase } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { GroupConditionFieldLabel } from '../group-condition-field-label';

import type { GroupConditionFieldLabelProps } from '../group-condition-field-label';
import type { FieldSelectOptionType } from '@components/decision-tree/hooks';
import type { RenderType } from '@test/test-utils';

const dataTestId = 'test';
const mockOption: FieldSelectOptionType = {
  id: '1',
  label: 'Option',
  dataType: 'string',
  icon: CharacterLowerCase,
};

const defaultProps: GroupConditionFieldLabelProps = {
  'data-testid': dataTestId,
  option: mockOption,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<GroupConditionFieldLabelProps>): RenderType => {
  return render(
    <GroupConditionFieldLabel
      {...defaultProps}
      {...props}
    />,
  );
};

describe('GroupConditionFieldLabel', () => {
  it('should render the component successfully', () => {
    renderComponent();

    const { id, dataType } = mockOption;

    expect(screen.getByText('Option')).toBeInTheDocument();
    expect(screen.getByTestId(`${dataTestId}-option-${id}-icon-${dataType}`)).toBeInTheDocument();
  });
});
