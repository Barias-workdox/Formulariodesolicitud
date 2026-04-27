import { Button } from 'baseui/button';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import { StyledContainer, StyledInner, buttonOverrides } from './conditional-buttons.styles';

import type { LogicConnectorType } from '@components/decision-tree/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type ConditionalButtonsProps = WithTestId<{
  logicConnector: LogicConnectorType;
  onUpdateLogicConnector(logicConnector: LogicConnectorType): void;
}>;

/**
 * Component renders a pair of buttons ("or" and "and") used to define logical operators
 * in a decision tree. This component is typically used to allow users to specify the
 * relationship between multiple conditions or groups of conditions within a rule.
 */
export const ConditionalButtons = ({
  dataTestId,
  logicConnector,
  onUpdateLogicConnector,
}: ConditionalButtonsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledInner>
        <StatefulTooltipNext
          showArrow
          zIndex={10}
          placement="right"
          popoverMargin={44}
          content={t('decisionTree.orMessage')}
        >
          <Button
            data-testid={`${dataTestId}--or-btn`}
            overrides={buttonOverrides({ isOrButton: true, isActive: logicConnector === 'OR' })}
            onClick={() => onUpdateLogicConnector('OR')}
          >
            {t('decisionTree.or')}
          </Button>
        </StatefulTooltipNext>

        <StatefulTooltipNext
          showArrow
          zIndex={10}
          placement="right"
          popoverMargin={12}
          content={t('decisionTree.andMessage')}
        >
          <Button
            data-testid={`${dataTestId}--and-btn`}
            overrides={buttonOverrides({ isActive: logicConnector === 'AND' })}
            onClick={() => onUpdateLogicConnector('AND')}
          >
            {t('decisionTree.and')}
          </Button>
        </StatefulTooltipNext>
      </StyledInner>
    </StyledContainer>
  );
};
