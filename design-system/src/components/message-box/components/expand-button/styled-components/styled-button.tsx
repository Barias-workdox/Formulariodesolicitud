import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

export const StyledButton = themedStyled<'button', { $rotate: boolean }>(
  'button',
  ({ $theme, $rotate }) => ({
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: $theme.colors.neutralDepressed,
    cursor: 'pointer',
    display: 'flex',
    height: COMMON_ICON_SIZE_16,
    justifyContent: 'center',
    padding: 0,
    transform: `rotate(${$rotate ? 180 : 0}deg)`,
    transition: 'all .20s ease-in-out',
    width: COMMON_ICON_SIZE_16,
    position: 'absolute',
    right: 0,
    top: 0,
    ':hover': {
      color: $theme.colors.neutral,
    },
    ':focus': {
      outline: 'none',
    },
  }),
);
