import { ChevronRight } from '@carbon/icons-react';

import type { BreadcrumbsOverrides } from 'baseui/breadcrumbs';

/**
 * Generates custom style overrides for the Breadcrumbs component.
 *
 * This function allows customization of the breadcrumbs's list item, icon, and separator styles
 * by applying theme-based styles.
 */
export const getOverrides = (): BreadcrumbsOverrides => {
  return {
    List: {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    ListItem: {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    Icon: {
      component: ChevronRight,
      props: {
        height: '24px',
      },
    },
    Separator: {
      style: {
        margin: 0,
      },
    },
  };
};
