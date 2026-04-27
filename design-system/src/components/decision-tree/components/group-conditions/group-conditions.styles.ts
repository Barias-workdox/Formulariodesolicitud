import { inputOverrides } from '../group-condition-value/group-condition-value.styles';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { SelectOverrides } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

const SELECT_MIN_WIDTH_SIZE = '200px';

export const selectOverrides: SelectOverrides = {
  Root: {
    style: (): StyleObject => ({ minWidth: SELECT_MIN_WIDTH_SIZE }),
  },
  ValueContainer: inputOverrides.Input,
  Popover: {
    props: {
      overrides: {
        Body: {
          style: (): StyleObject => ({ zIndex: 20 }),
        },
      },
    },
  },
};

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${theme.colors.neutralSubtle}`,
    borderRadius: theme.borders.borderSm,
    padding: `${theme.spacing.spacingSm} ${theme.spacing.spacingMd}`,
  }),
  conditionsContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing.spacingSm,
  }),
  conditionContainerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing.spacingSm,
  }),
};
