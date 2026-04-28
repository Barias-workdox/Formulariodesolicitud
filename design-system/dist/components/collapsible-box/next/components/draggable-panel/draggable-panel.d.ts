import { PanelProps } from '../panel';
export type DraggablePanelProps = Omit<PanelProps, 'attributes' | 'listeners'>;
/**
 * Component that provides the necessary attributes and listeners for drag-and-drop functionality
 * on a `Panel` component.
 *
 * **NOTE** This component is intended to be used only within a sortable context (`CollapsibleDraggable`).
 */
export declare const DraggablePanel: import('react').ForwardRefExoticComponent<DraggablePanelProps & import('react').RefAttributes<HTMLDivElement>>;
