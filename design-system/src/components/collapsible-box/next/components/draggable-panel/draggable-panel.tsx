import { forwardRef } from 'react';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Panel } from '../panel';

import type { PanelProps } from '../panel';

export type DraggablePanelProps = Omit<PanelProps, 'attributes' | 'listeners'>;

/**
 * Component that provides the necessary attributes and listeners for drag-and-drop functionality
 * on a `Panel` component.
 *
 * **NOTE** This component is intended to be used only within a sortable context (`CollapsibleDraggable`).
 */
export const DraggablePanel = forwardRef<HTMLDivElement, DraggablePanelProps>(
  function PanelComponent(
    { children, draggableId: id, isDraggable, isDraggingDisabled = false, ...props },
    ref,
  ) {
    const { attributes, listeners, transform, transition, setNodeRef } = useSortable({ id });

    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };

    return (
      <div
        ref={isDraggingDisabled ? undefined : setNodeRef}
        style={style}
      >
        <Panel
          ref={ref}
          draggableId={id}
          attributes={attributes}
          listeners={listeners}
          isDraggable={isDraggingDisabled ? false : isDraggable}
          {...props}
        >
          {children}
        </Panel>
      </div>
    );
  },
);
