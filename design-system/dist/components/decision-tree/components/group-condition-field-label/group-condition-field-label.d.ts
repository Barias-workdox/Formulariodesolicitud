import { FieldSelectOptionType } from '../../hooks';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type GroupConditionFieldLabelProps = WithTestId<{
    option: FieldSelectOptionType;
}>;
/** Component that renders an option for a select with an icon */
export declare const GroupConditionFieldLabel: ({ "data-testid": dataTestId, option: { id, label, dataType, Icon }, }: GroupConditionFieldLabelProps) => JSX.Element;
