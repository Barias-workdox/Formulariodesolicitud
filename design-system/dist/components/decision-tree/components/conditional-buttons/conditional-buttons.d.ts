import { LogicConnectorType } from '../../interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type ConditionalButtonsProps = WithTestId<{
    logicConnector: LogicConnectorType;
    onUpdateLogicConnector(logicConnector: LogicConnectorType): void;
}>;
/**
 * Component renders a pair of buttons ("or" and "and") used to define logical operators
 * in a decision tree. This component is typically used to allow users to specify the
 * relationship between multiple conditions or groups of conditions within a rule.
 */
export declare const ConditionalButtons: ({ dataTestId, logicConnector, onUpdateLogicConnector, }: ConditionalButtonsProps) => JSX.Element;
