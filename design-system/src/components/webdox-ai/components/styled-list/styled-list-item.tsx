import type { ReactElement } from 'react';
import { useMemo } from 'react';

import { ListItem } from 'baseui/list';

import { BACKGROUND_ICON_WRAPPER_CLASS } from '@components/background-icon/background-icon.constants';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { ListOverrides, ListProps } from 'baseui/list';
import type { StyleObject } from 'styletron-react';

export type ListItemKind = 'primary';

export interface StyledListItemProps extends ListProps {
  'data-testid': string;
  /** @defaultValue `primary` */
  kind?: ListItemKind;
}

const baseOverrides: ListOverrides = {
  Root: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      color: $theme.colors.neutralSubdued,
      border: `1px solid ${$theme.colors.neutralSubtle}`,
      gap: $theme.spacing.spacingSm,
      padding: $theme.spacing.spacingXs,
      width: '100%',
      transition: `all 100ms ease-in-out`,
      cursor: 'pointer',
      outline: 'none',
      ':hover': {
        color: $theme.colors.neutralMedium,
        borderColor: $theme.colors.neutralSubtle,
        backgroundColor: $theme.colors.neutralSubtle,
      },
      ':active': {
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutral,
        backgroundColor: $theme.colors.transparent,
      },
      ':focus': {
        color: $theme.colors.neutral,
        borderColor: $theme.colors.neutral,
        backgroundColor: $theme.colors.transparent,
      },
      // Add pseudo class to background icon
      ...[':hover', ':active', ':focus'].reduce((acc, pseudo) => {
        return {
          ...acc,
          [`${pseudo} .${BACKGROUND_ICON_WRAPPER_CLASS}`]: {
            background: $theme.colors.powerSubtle,
            color: $theme.colors.power,
          },
        };
      }, {}),
    }),
  },
  Content: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      width: `calc(100% - ${$theme.spacing.spacing2xs})`,
      padding: 0,
      margin: 0,
      border: 0,
      minHeight: 0,
    }),
  },
  ArtworkContainer: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      background: $theme.colors.neutralSubtle,
      color: $theme.colors.neutralSubdued,
      flexShrink: 1,
      borderRadius: '50%',
      width: 'max-content',
    }),
  },
};

/**
 * Special list item with several styles for each state.
 */
export const StyledListItem = ({ overrides, ...restProps }: StyledListItemProps): ReactElement => {
  const mergedOverrides = useMemo(() => mergeOverridesDeep(baseOverrides, overrides), [overrides]);

  return (
    <ListItem
      overrides={mergedOverrides}
      {...restProps}
    />
  );
};
