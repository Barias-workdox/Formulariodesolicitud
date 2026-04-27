import { AddAlt, CheckmarkOutline, TrashCan, WarningAlt } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { Tag } from '@components/tag';
import { useTranslation } from '@components/utils';

import { StyledContainer } from './group-rule-header-actions.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

export type GroupRuleHeaderActionsProps = WithTestId<{
  isGroupRuleValid: boolean;
  disabledAdd: boolean;
  onDelete(): void;
  onAddGroup(): void;
}>;

/**
 * Component that provides visual indicators and actions for a group rule, indicating whether
 * the rule is valid and allowing users to delete the rule.
 */
export const GroupRuleHeaderActions = ({
  dataTestId,
  isGroupRuleValid,
  disabledAdd,
  onDelete,
  onAddGroup,
}: GroupRuleHeaderActionsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <Tag
        variant="overlay"
        kind={isGroupRuleValid ? 'positive' : 'warning'}
        icon={
          isGroupRuleValid ? (
            <CheckmarkOutline data-testid={`${dataTestId}--valid-icon`} />
          ) : (
            <WarningAlt data-testid={`${dataTestId}--invalid-icon`} />
          )
        }
      >
        {isGroupRuleValid
          ? t('decisionTree.groupRuleComplete')
          : t('decisionTree.groupRuleIncomplete')}
      </Tag>

      <IconButton
        data-testid={`${dataTestId}--delete-btn`}
        kind="tertiary"
        size="32px"
        onClick={onDelete}
        aria-label="DeleteGroupRuleButton"
      >
        <TrashCan />
      </IconButton>

      <Button
        data-testid={`${dataTestId}--add-group-button`}
        kind="tertiary"
        size="32px"
        disabled={disabledAdd}
        startEnhancer={<AddAlt />}
        onClick={onAddGroup}
      >
        {t('decisionTree.addGroup')}
      </Button>
    </StyledContainer>
  );
};
