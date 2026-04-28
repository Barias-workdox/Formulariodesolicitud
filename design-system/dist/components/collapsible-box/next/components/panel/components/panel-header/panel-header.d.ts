import { PanelProps } from '../../panel';
export type PanelHeaderProps = Pick<PanelProps, 'children' | 'draggableId' | 'startEnhancer' | 'endEnhancer' | 'isOverlay' | 'isDragging' | 'isDraggable' | 'attributes' | 'listeners'> & {
    dataTestId?: string;
    $expanded?: boolean;
    $neutralWashedHeader?: boolean;
    onClick?(): void;
};
/**
 * A React component for rendering the header of a panel with customizable enhancers
 * and toggle functionality.
 */
export declare const PanelHeader: import('react').ForwardRefExoticComponent<Pick<PanelProps, "children" | "endEnhancer" | "startEnhancer" | "isDragging" | "isDraggable" | "draggableId" | "attributes" | "isOverlay" | "listeners"> & {
    dataTestId?: string;
    $expanded?: boolean;
    $neutralWashedHeader?: boolean;
    onClick?(): void;
} & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLDivElement>>;
