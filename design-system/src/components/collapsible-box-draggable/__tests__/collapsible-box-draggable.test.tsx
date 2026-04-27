import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CollapsibleBoxDraggable } from '../collapsible-box-draggable';

import type { CollapsibleBoxDraggableProps } from '../collapsible-box-draggable.interfaces';

vi.mock('@dnd-kit/core', async () => {
  const actual = await vi.importActual('@dnd-kit/core');

  return {
    ...actual,
    DndContext: vi.fn(({ children }) => <div data-testid="mocked-dnd-context">{children}</div>),
    DragOverlay: vi.fn(({ children }) => <div data-testid="mocked-drag-overlay">{children}</div>),
  };
});

vi.mock('@dnd-kit/sortable', async () => {
  const actual = await vi.importActual('@dnd-kit/sortable');

  return {
    ...actual,
    SortableContext: vi.fn(({ children }) => (
      <div data-testid="mocked-sortable-context">{children}</div>
    )),
  };
});

vi.mock('@components/collapsible-box/next', () => ({
  CollapsibleBox: vi.fn(({ children }) => (
    <div data-testid="mocked-collapsible-box">{children}</div>
  )),
  DraggablePanel: vi.fn(({ children, draggableId }) => (
    <div data-testid={`mocked-draggable-panel-${draggableId}`}>{children}</div>
  )),
  Panel: vi.fn(({ children }) => <div data-testid="mocked-panel">{children}</div>),
}));

const mockPanels = [
  {
    id: 'panel-1',
    panelProps: {
      title: 'Panel 1',
      children: () => <div>Panel 1 content</div>,
    },
  },
  {
    id: 'panel-2',
    panelProps: {
      title: 'Panel 2',
      children: () => <div>Panel 2 content</div>,
    },
  },
];

const mockOnDragEnd = vi.fn();

const defaultProps: CollapsibleBoxDraggableProps = {
  panels: mockPanels,
  expanded: [],
  onDragEnd: mockOnDragEnd,
};

const renderComponent = (props?: Partial<CollapsibleBoxDraggableProps>) =>
  render(
    <CollapsibleBoxDraggable
      {...defaultProps}
      {...props}
    />,
  );

describe('CollapsibleBoxDraggable', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with default props', () => {
    renderComponent();

    expect(screen.getByTestId('mocked-dnd-context')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-sortable-context')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-collapsible-box')).toBeInTheDocument();
  });

  it('renders with expanded panels', () => {
    renderComponent({ expanded: ['panel-1'] });

    expect(screen.getByText('Panel 1 content')).toBeInTheDocument();
  });

  it('renders with empty panels array', () => {
    renderComponent({ panels: [] });

    expect(screen.getByTestId('mocked-collapsible-box')).toBeInTheDocument();
    expect(screen.queryByTestId('mocked-draggable-panel-panel1')).not.toBeInTheDocument();
  });
});
