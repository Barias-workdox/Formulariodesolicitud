import { CharacterLowerCase } from '@carbon/icons-react';

import { StyledContainer } from './group-condition-field-label.styles';

import type { FieldSelectOptionType } from '@components/decision-tree/hooks';
import type { WithTestId } from '@interfaces/common.interfaces';

export type GroupConditionFieldLabelProps = WithTestId<{
  option: FieldSelectOptionType;
}>;

/** Component that renders an option for a select with an icon */
export const GroupConditionFieldLabel = ({
  'data-testid': dataTestId,
  option: { id, label = '', dataType = 'string', Icon = CharacterLowerCase },
}: GroupConditionFieldLabelProps): JSX.Element => {
  return (
    <StyledContainer>
      <Icon data-testid={`${dataTestId}-option-${id}-icon-${dataType}`} />
      {label}
    </StyledContainer>
  );
};
