import { ReactNode } from 'react';
import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { PanelProps as BasePanelProps } from 'baseui/accordion';
import { StyleObject } from 'styletron-react';
export interface PanelProps extends BasePanelProps {
    dataTestId?: string;
    expanded?: boolean;
    startEnhancer?: ReactNode | (() => ReactNode);
    endEnhancer?: ReactNode | (() => ReactNode);
    maxHeight?: StyleObject['maxHeight'];
    /**
     * Identifier for the panel when used in a draggable context.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    draggableId?: string;
    /**
     * Sets the panel as a mirror of the element that is being dragged.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    isOverlay?: boolean;
    /**
     * Value that indicated if the current element is being dragged.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    isDragging?: boolean;
    /**
     * Value that indicated if the current element can be dragged, this enables the
     * `Draggable` icon on the panel header.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    isDraggable?: boolean;
    /**
     * Value that indicates if the dragging is disabled for the panel.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    isDraggingDisabled?: boolean;
    /**
     * Overrides for the panel component.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    attributes?: DraggableAttributes;
    /**
     * Listeners for the panel component.
     *
     * **NOTE** This prop is used internally by the `CollapsibleDraggable` component.
     */
    listeners?: SyntheticListenerMap;
}
declare const Panel: import('react').ForwardRefExoticComponent<PanelProps & import('react').RefAttributes<HTMLDivElement>> & {
    Title: ({ $expanded, children, collapsedTitle, }: import('./components/header-title').HeaderTitleProps) => JSX.Element;
    Subtitle: ({ $expanded, children, collapsedSubtitle, }: import('./components/header-subtitle').HeaderSubtitleProps) => JSX.Element;
    CompoundTitle: import('react').ForwardRefExoticComponent<import('./components/compound-title').CompoundTitleProps & {
        children?: ReactNode | undefined;
    } & import('react').RefAttributes<HTMLDivElement>>;
    BackgroundIcon: (props: import('./components/panel-background-icon').PanelBackgroundIconProps) => JSX.Element;
    IconButton: ({ dataTestId, ...rest }: import('./components/panel-icon-button').PanelIconButtonProps) => JSX.Element;
};
export { Panel };
