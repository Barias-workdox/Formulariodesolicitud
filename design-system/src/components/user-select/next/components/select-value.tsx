import type { ReactElement } from 'react';

import { AvatarListItem } from '@components/list';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { getTextStyles } from '../user-select.styles';

import type { UserOption } from '../user-select.interfaces';
import type { Size } from '@components/input/next';

export interface SelectValueProps {
  option: UserOption;
  size: Size;
  disabled: boolean;
}

/** Render a custom Label and option for a select */
export const SelectValue = ({ option, size, disabled }: SelectValueProps): ReactElement => {
  const { theme } = useCss();

  return (
    <AvatarListItem
      avatarProps={{
        disabled,
        backgroundColor: disabled ? 'neutralSubtle' : 'peaceSubtle',
        name: option.label as string,
        overrides: {
          Initials: {
            style: ({ $theme }) => ({
              color: $theme.colors[disabled ? 'neutralDepressed' : 'neutralMedium'],
            }),
          },
        },
      }}
      label={
        <Text
          variant="body"
          margin={0}
          fontWeight="400"
          color={disabled ? 'neutralDepressed' : 'neutralSubdued'}
          $style={getTextStyles(size, theme)}
        >
          {option.email ? `${option.label} (${option.email})` : option.label}
        </Text>
      }
      overrides={{
        Root: {
          style: {
            padding: 0,
          },
        },
      }}
    />
  );
};
