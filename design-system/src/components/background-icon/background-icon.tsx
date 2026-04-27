import { COMMON_HEIGHT_32 } from '@constants/common.constants';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledRoot } from './background-icon.styles';
import { DeclarativeIcon } from './components/declarative-icon';

import type { BackgroundIconProps } from './background-icon.interfaces';

/**
 * Component that renders a background icon with customizable properties.
 */
export const BackgroundIcon = ({
  'data-testid': dataTestId = 'background-icon-next',
  backgroundColor = 'brandDepressed',
  children,
  disabled = false,
  Icon,
  iconColor = 'brand',
  onClick,
  overrides,
  shape = 'round',
  size = COMMON_HEIGHT_32,
  ...rest
}: BackgroundIconProps): JSX.Element => {
  const { Root: RootOverride } = overrides || {};

  const Root = getOverride(RootOverride ?? {}) || StyledRoot;

  return (
    <Root
      data-testid={`${dataTestId}--wrapper`}
      {...getOverrideProps(RootOverride)}
      {...rest}
      $backgroundColor={backgroundColor}
      $size={size}
      $shape={shape}
      $disabled={disabled}
      $isClickable={Boolean(onClick)}
      onClick={onClick}
    >
      {Icon ? (
        <DeclarativeIcon
          Icon={Icon}
          data-testid={`${dataTestId}--icon`}
          iconColor={iconColor}
          size={size}
          disabled={disabled}
        />
      ) : (
        children
      )}
    </Root>
  );
};
