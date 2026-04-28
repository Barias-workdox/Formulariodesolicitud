import { StatefulMenuOverridesParams } from './draggable-columns-table.interfaces';
import { StatefulMenuProps } from 'baseui/menu';
/**
 * Style overrides for the stateful menu.
 */
export declare const statefulMenuOverrides: ({ labelTemplate, "data-testid": dataTestId, }?: StatefulMenuOverridesParams) => StatefulMenuProps["overrides"];
export declare const TruncatedText: import('styletron-react').StyletronComponent<"div", {
    $fullwidth?: boolean;
}>;
export declare const ColumnMenu: import('styletron-react').StyletronComponent<"div", {}>;
export declare const DragIcon: import('styletron-react').StyletronComponent<"div", {
    $isOver: boolean;
}>;
