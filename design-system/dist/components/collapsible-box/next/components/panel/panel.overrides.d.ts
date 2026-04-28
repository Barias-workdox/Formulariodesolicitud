import { PanelProps } from './panel';
import { PanelOverrides } from 'baseui/accordion';
/** Overrides for Panel component */
export declare const getPanelOverrides: ({ dataTestId, draggableId, startEnhancer, endEnhancer, maxHeight, attributes, listeners, isOverlay, isDragging, isDraggable, }: Pick<PanelProps, "dataTestId" | "draggableId" | "startEnhancer" | "endEnhancer" | "maxHeight" | "attributes" | "listeners" | "isOverlay" | "isDragging" | "isDraggable">) => PanelOverrides;
