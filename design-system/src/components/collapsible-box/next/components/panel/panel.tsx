import { forwardRef, useMemo } from 'react';
import type { ReactNode } from 'react';

import { Panel as BasePanel } from 'baseui/accordion';
import { isElement } from 'react-is';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { addExtraProps } from '@utils/add-extra-props';

import { CompoundTitle } from './components/compound-title';
import { HeaderSubtitle } from './components/header-subtitle';
import { HeaderTitle } from './components/header-title';
import { PanelBackgroundIcon } from './components/panel-background-icon';
import { PanelIconButton } from './components/panel-icon-button';
import { getPanelOverrides } from './panel.overrides';

import type { DraggableAttributes } from '@dnd-kit/core';
import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import type { PanelProps as BasePanelProps } from 'baseui/accordion';
import type { StyleObject } from 'styletron-react';

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

/**
 * A React component for rendering a panel with customizable title, enhancers, and content.
 * It supports dynamic enhancements and propagates additional props to the title element.
 */
const PanelComponent = forwardRef<HTMLDivElement, PanelProps>(function PanelComponent(
  {
    dataTestId,
    children,
    draggableId,
    startEnhancer,
    endEnhancer,
    title,
    expanded,
    maxHeight,
    overrides,
    isDraggable = false,
    isOverlay = false,
    isDragging = false,
    attributes,
    listeners,
    ...rest
  },
  ref,
) {
  const titleWithExtraProps = useMemo(() => {
    const titleElement = isElement(title) ? title : <HeaderTitle>{title}</HeaderTitle>;

    return addExtraProps(titleElement, { $expanded: expanded });
  }, [title, expanded]);

  const panelOverrides = mergeOverridesDeep(
    getPanelOverrides({
      dataTestId,
      draggableId,
      startEnhancer,
      endEnhancer,
      maxHeight,
      attributes,
      listeners,
      isOverlay,
      isDragging,
      isDraggable,
    }),
    overrides,
  );

  return (
    <BasePanel
      {...rest}
      ref={ref}
      expanded={expanded}
      title={titleWithExtraProps}
      overrides={panelOverrides}
    >
      {children}
    </BasePanel>
  );
});

const Panel = Object.assign(PanelComponent, {
  Title: HeaderTitle,
  Subtitle: HeaderSubtitle,
  CompoundTitle,
  BackgroundIcon: PanelBackgroundIcon,
  IconButton: PanelIconButton,
});

export { Panel };
