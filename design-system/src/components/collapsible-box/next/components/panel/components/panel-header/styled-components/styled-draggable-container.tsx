import { themedStyled } from '@themes/utilities';

export const StyledDraggableContainer = themedStyled<'div', { $isDragging: boolean }>(
  'div',
  ({ $isDragging }) => ({
    display: 'flex',
    cursor: $isDragging ? 'grabbing' : 'grab',
  }),
);
