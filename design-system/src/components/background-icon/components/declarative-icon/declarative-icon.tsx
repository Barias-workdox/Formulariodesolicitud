import { useCss } from '@components/utils/hooks/use-css';

import { SIZE_MAP } from '../../background-icon.constants';

import type { BackgroundIconProps } from '../next/background-icon.interfaces';

/**
 * Component used to render an icon with the specified properties.
 */
export const DeclarativeIcon = ({
  'data-testid': dataTestId,
  size,
  Icon,
  iconColor,
  disabled,
}: Pick<
  BackgroundIconProps,
  'size' | 'data-testid' | 'Icon' | 'iconColor' | 'disabled'
>): React.JSX.Element => {
  const { theme } = useCss();

  const { iconSize = '16px' } = SIZE_MAP[size];

  return (
    <Icon
      color={
        disabled
          ? theme.colors.neutralDepressed
          : theme.colors[iconColor as keyof typeof theme.colors]
      }
      height={iconSize}
      width={iconSize}
      data-testid={dataTestId}
    />
  );
};
