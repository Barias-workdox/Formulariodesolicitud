import { useState } from 'react';

import { DndContext, DragOverlay } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { CollapsibleBox, DraggablePanel, Panel } from '@components/collapsible-box/next';
import { reorder } from '@components/utils/arrays/arrays.utils';

import type { CollapsibleBoxDraggableProps } from './collapsible-box-draggable.interfaces';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';

/**
 * A component that renders a list of collapsible panels that can be reordered via drag and drop.
 * Manages the order and the expanded state of the panels.
 */
export const CollapsibleBoxDraggable = ({
  'data-testid': dataTestId = 'collapsible-box-draggable',
  panels = [],
  expanded: initialExpanded = [],
  onDragEnd,
}: CollapsibleBoxDraggableProps): JSX.Element => {
  const [activeId, setActiveId] = useState<string>(null);
  const [expandedPanels, setExpandedPanels] = useState(initialExpanded);

  // Panel that is currently being dragged
  const activePanel = panels.find(({ id }) => id === activeId);

  /** Handles the start of a drag gesture. Sets the active panel ID to be dragged */
  const handleDragStart = ({ active }: DragStartEvent): void => {
    setActiveId(active.id as string);
  };

  /** Handles the end of a drag gesture. Reorders panels if dropped in a new position */
  const handleDragEnd = ({ active, over }: DragEndEvent): void => {
    let newPanels = panels;

    // If there is no over element, it means the drag was not dropped on a valid target
    if (!over) {
      setActiveId(null);

      return;
    }

    // If the active and over elements are not the same we can interpret this as a drag and drop action
    if (active.id !== over.id) {
      newPanels = reorder(
        panels,
        panels.findIndex(({ id }) => id === active.id),
        panels.findIndex(({ id }) => id === over.id),
      );
    }

    setActiveId(null);
    onDragEnd({
      panels: newPanels,
      fromIndex: active.data.current?.sortable?.index,
      toIndex: over.data.current?.sortable?.index,
    });
  };

  return (
    <DndContext
      data-testid={`${dataTestId}-dnd-context`}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <SortableContext
        data-testid={`${dataTestId}-sortable-context`}
        items={panels}
        strategy={verticalListSortingStrategy}
      >
        <CollapsibleBox
          accordion={false}
          expanded={expandedPanels}
          onChange={({ expanded }) => setExpandedPanels(expanded)}
        >
          {panels.map(({ id, panelProps: { children, ...panelProps } }) => {
            const isCurrentPanelBeingDragged = id === activeId;

            return (
              <DraggablePanel
                key={id}
                draggableId={id}
                isOverlay={isCurrentPanelBeingDragged}
                isDraggable={!isCurrentPanelBeingDragged}
                {...panelProps}
              >
                {children()}
              </DraggablePanel>
            );
          })}
        </CollapsibleBox>
      </SortableContext>

      <DragOverlay>
        {activeId && (
          <Panel
            isDragging
            isDraggable
            expanded={expandedPanels.includes(activeId)}
            {...activePanel.panelProps}
          >
            {activePanel.panelProps.children()}
          </Panel>
        )}
      </DragOverlay>
    </DndContext>
  );
};
