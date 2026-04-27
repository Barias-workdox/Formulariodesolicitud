import type { CollapsibleBoxProps } from './collapsible-box';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { AccordionOverrides } from 'baseui/accordion';
import type { StyleObject } from 'styletron-react';

/** Default overrides for a collapsible box component */
export const getCollapsibleBoxOverrides = ({
  gap,
}: Pick<CollapsibleBoxProps, 'gap'>): AccordionOverrides => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      display: 'flex',
      flexDirection: 'column',
      gap: gap ?? $theme.spacing.spacingMd,
    }),
  },
});
