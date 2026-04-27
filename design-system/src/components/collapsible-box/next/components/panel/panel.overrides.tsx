import { forwardRef } from 'react';

import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';

import { PanelHeader } from './components/panel-header';

import type { PanelProps } from './panel';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { PanelOverrides } from 'baseui/accordion';
import type { StyleObject } from 'styletron-react';

/** Overrides for Panel component */
export const getPanelOverrides = ({
  dataTestId,
  draggableId,
  startEnhancer,
  endEnhancer,
  maxHeight,
  attributes,
  listeners,
  isOverlay = false,
  isDragging = false,
  isDraggable = false,
}: Pick<
  PanelProps,
  | 'dataTestId'
  | 'draggableId'
  | 'startEnhancer'
  | 'endEnhancer'
  | 'maxHeight'
  | 'attributes'
  | 'listeners'
  | 'isOverlay'
  | 'isDragging'
  | 'isDraggable'
>): PanelOverrides => ({
  Header: {
    component: forwardRef<HTMLDivElement, PanelOverrides['Header']['component']>(
      function HeaderComponent({ children: headerChildren, ...rest }, ref) {
        return (
          <PanelHeader
            {...rest}
            ref={ref}
            dataTestId={dataTestId}
            draggableId={draggableId}
            isOverlay={isOverlay}
            isDragging={isDragging}
            isDraggable={isDraggable}
            startEnhancer={startEnhancer}
            endEnhancer={endEnhancer}
            attributes={attributes}
            listeners={listeners}
          >
            {headerChildren}
          </PanelHeader>
        );
      },
    ),
  },
  ToggleIcon: {
    component: () => null,
  },
  PanelContainer: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box',
      border: `1px solid ${$theme.colors.neutralSubtle}`,
      borderRadius: $theme.sizing.scale100,
    }),
  },
  Content: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      padding: $theme.spacing.spacingXs,
      maxHeight,
      overflow: 'auto',
      ...(isOverlay && {
        border: `1px dashed ${$theme.colors.brand}`,
        borderTop: '0px',
        backgroundColor: $theme.colors.brandWashed,
      }),
      ...getCustomScrollBarStyles($theme),
    }),
  },
});
