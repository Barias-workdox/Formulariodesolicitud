import { forwardRef } from 'react';
import type { PropsWithChildren } from 'react';

import { Draggable } from '@carbon/icons-react';

import { noop } from '@utils/noop';

import { ToggleIcon } from './components/toggle-icon';
import { StyledContainer, StyledLeftContainer, StyledRightContainer } from './styled-components';
import { StyledDraggableContainer } from './styled-components/styled-draggable-container';

import type { PanelProps } from '../../panel';

export type PanelHeaderProps = Pick<
  PanelProps,
  | 'children'
  | 'draggableId'
  | 'startEnhancer'
  | 'endEnhancer'
  | 'isOverlay'
  | 'isDragging'
  | 'isDraggable'
  | 'attributes'
  | 'listeners'
> & {
  dataTestId?: string;
  $expanded?: boolean;
  $neutralWashedHeader?: boolean;
  onClick?(): void;
};

/**
 * A React component for rendering the header of a panel with customizable enhancers
 * and toggle functionality.
 */
export const PanelHeader = forwardRef<HTMLDivElement, PropsWithChildren<PanelHeaderProps>>(
  function PanelHeaderComponent(
    {
      dataTestId,
      draggableId,
      $neutralWashedHeader = false,
      $expanded,
      children,
      startEnhancer,
      endEnhancer,
      attributes = {},
      listeners = {},
      isOverlay,
      isDragging,
      isDraggable,
      onClick = noop,
    },
    ref,
  ) {
    const _dataTestId = dataTestId ?? `panel-header-${draggableId}--draggable-icon`;

    return (
      <StyledContainer
        data-testid={_dataTestId}
        ref={ref}
        $isOverlay={isOverlay}
        $expanded={$expanded}
        onClick={onClick}
        $neutralWashedHeader={$neutralWashedHeader}
      >
        <StyledLeftContainer>
          {isDraggable && (
            <StyledDraggableContainer
              data-testid={`${_dataTestId}--draggable-icon`}
              $isDragging={isDragging}
              {...attributes}
              {...listeners}
            >
              <Draggable />
            </StyledDraggableContainer>
          )}

          {typeof startEnhancer === 'function' ? startEnhancer() : startEnhancer}
          {children}
        </StyledLeftContainer>
        <StyledRightContainer>
          {typeof endEnhancer === 'function' ? endEnhancer() : endEnhancer}
          <ToggleIcon
            data-testid={`${_dataTestId}--toggle-icon`}
            $expanded={$expanded}
          />
        </StyledRightContainer>
      </StyledContainer>
    );
  },
);
