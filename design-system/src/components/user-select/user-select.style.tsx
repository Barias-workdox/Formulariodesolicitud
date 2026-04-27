import { NotebookReference, Search } from '@carbon/icons-react';

import { COMMON_HEIGHT_32, COMMON_HEIGHT_44 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import { Text } from '../text';

import type { UserSelectOverridesProps } from './user-select.interface';
import type { SelectOverrides } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export const ThemedCreatableOption = themedStyled('div', () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  wordBreak: 'break-all',
}));

export const ThemedCreatableIconOption = themedStyled('span', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: $theme.spacing.spacing2xs,
}));

/** UserSelect overrides */
export const getUserSelectOverrides = ({
  theme,
  placeholder,
  dataTestId,
}: UserSelectOverridesProps): SelectOverrides => ({
  Placeholder: {
    component: ({ $disabled }): JSX.Element => {
      return (
        <Text
          variant="bodySmall"
          margin={0}
          display="flex"
          alignItems="center"
          color={$disabled ? 'neutralDepressed' : 'neutralSubdued'}
        >
          <Search
            size={16}
            style={{ marginRight: theme.spacing.spacingXs }}
          />{' '}
          {placeholder}
        </Text>
      );
    },
  },
  SelectArrow: {
    component: (): JSX.Element => {
      return <NotebookReference size={16} />;
    },
  },
  SingleValue: {
    style: {
      display: 'flex',
      alignItems: 'center',
    },
    props: {
      'data-testid': `${dataTestId}--value`,
    },
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}--input`,
    },
  },
  ControlContainer: {
    props: {
      'data-testid': `${dataTestId}--control-container`,
    },
  },
  ValueContainer: {
    style: ({ $size }): StyleObject => ({
      paddingTop: 0,
      paddingBottom: 0,
      height: $size === 'compact' ? COMMON_HEIGHT_32 : COMMON_HEIGHT_44,
      display: 'flex',
      alignItems: 'center',
    }),
    props: {
      'data-testid': `${dataTestId}--value-container`,
    },
  },
});
