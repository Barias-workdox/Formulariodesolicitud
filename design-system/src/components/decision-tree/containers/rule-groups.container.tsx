import { CollapsibleBox } from '@components/collapsible-box';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { collapsibleBoxOverrides, StyledContainer } from '../decision-tree.styles';
import { useDecisionTreeContext } from '../hooks/use-decision-tree-context.hook';
import { RuleGroupProvider } from '../providers/rule-group.provider';

import { RuleGroupHeaderActionsContainer } from './rule-group-header-actions.container';
import { RuleGroupContainer } from './tree-rules.container';

/**
 * Container component that manages and displays the rule groups within a decision tree.
 * It handles the rendering of individual rule groups, their associated tree rules,
 * and provides functionality to add or delete rule groups.
 */
export const RuleGroupsContainer = (): JSX.Element => {
  const { rules } = useDecisionTreeContext();
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <StyledContainer>
      {rules.map((rule, ruleIndex) => (
        <RuleGroupProvider
          key={rule.id}
          rule={rule}
          ruleIndex={ruleIndex}
        >
          <CollapsibleBox
            initialState={{ isExpanded: ruleIndex === 0 ? true : false }}
            title={t('decisionTree.rule', { number: ruleIndex + 1 })}
            overrides={collapsibleBoxOverrides(theme)}
            options={<RuleGroupHeaderActionsContainer />}
          >
            <RuleGroupContainer />
          </CollapsibleBox>
        </RuleGroupProvider>
      ))}
    </StyledContainer>
  );
};
