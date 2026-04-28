import { KindType } from '../../../button';
import { StatefulTooltipProps } from '../../../tooltip';
import { TranslationType } from '../../../utils/i18n/i18n.interface';
export type ActionType = 'position' | 'edit' | 'delete' | 'view';
export interface TableActionProps {
    'data-testid'?: string;
    /** Used to add extra styles to icon button */
    buttonKind?: KindType;
    disabled?: boolean;
    /**
     * @deprecated Define the tooltip text in the `tooltipProps` content instead.
     * Use this property to provide a short description or label for the action.
     */
    tooltipText?: string;
    /**
     * Customize the appearance and behavior of the tooltip.
     */
    tooltipProps?: StatefulTooltipProps;
    size?: number;
    action: ActionType;
    showTooltip?: boolean;
    onClick(): void;
}
export interface ActionData {
    tooltipText: string;
    icon: React.ReactNode;
}
/**
 * Get all dynamic properties based on every possible action in table actions.
 * Tooltip texts act as default values, they can be override
 */
export declare const getActionData: (currentAction: ActionType, size: number | undefined, t: TranslationType) => ActionData;
/** An Icon Button component with an icon showing an action in the table right section */
export declare const TableAction: ({ "data-testid": dataTestId, action, buttonKind, onClick, disabled, tooltipText, tooltipProps, size, showTooltip, }: TableActionProps) => JSX.Element;
