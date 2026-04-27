import { CollapsibleBoxHeader } from './components/collapsible-box-header';

import type { CollapsibleBoxProps } from './collapsible-box';
import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { AccordionOverrides } from 'baseui/accordion';
import type { StyleObject } from 'styletron-react';

/** Default overrides for a collapsible box component */
export const defaultOverrides = ({
  dataTestId,
  title,
  collapsedTitle,
  Icon,
  options,
  overrides,
}: Pick<
  CollapsibleBoxProps,
  'dataTestId' | 'title' | 'collapsedTitle' | 'Icon' | 'options' | 'overrides'
>): AccordionOverrides => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      border: `1px solid ${$theme.colors.divisionLine}`,
      width: 'unset',
    }),
  },
  PanelContainer: {
    style: {
      border: 'none',
    },
  },
  Header: {
    component: CollapsibleBoxHeader,
    props: {
      dataTestId,
      title,
      Icon,
      options,
      collapsedTitle,
      overrides,
    },
  },
  Content: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      padding: $theme.spacing.spacingXs,
    }),
  },
});
