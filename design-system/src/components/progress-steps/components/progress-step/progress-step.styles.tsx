import { themedStyled } from '@themes/utilities';

import type { ProgressStepKind, ProgressStepType } from './progress-step';
import type { DesignSystemColorType } from '@themes';

const BG_ICON_COLORS: Record<
  ProgressStepKind,
  { default: DesignSystemColorType; hover: DesignSystemColorType }
> = {
  checked: {
    default: 'positiveSubtle',
    hover: 'positiveDepressed',
  },
  default: {
    default: 'brandSubtle',
    hover: 'brandDepressed',
  },
  pending: {
    default: 'neutralWashed',
    hover: 'neutralWashed',
  },
  warning: {
    default: 'warningSubtle',
    hover: 'warningDepressed',
  },
};

type StyledProgressStepProps = {
  $type: ProgressStepType;
  $isEnabledMouseEvents: boolean;
  $width: string;
};

export const StyledProgressStep = themedStyled<'div', StyledProgressStepProps>(
  'div',
  ({ $theme, $type, $isEnabledMouseEvents, $width }) => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: $type !== 'compressed' ? 'column' : 'row',
    alignItems: 'center',
    gap: $theme.spacing.spacingXs,
    padding: `${$theme.spacing.spacing2xs} ${$theme.spacing.spacingXs}`,
    cursor: $isEnabledMouseEvents ? 'pointer' : 'not-allowed',
    width: $type !== 'compressed' ? $width : undefined,
    boxSizing: 'border-box',
    ':focus': {
      outline: `1px solid ${$theme.colors.brandMedium}`,
      backgroundColor: 'rgb(255, 255, 255, 0.1)',
    },
  }),
);

type StyledIconWrapperProps = {
  $kind: ProgressStepKind;
  $isHovered: boolean;
};

export const StyledIconWrapper = themedStyled<'div', StyledIconWrapperProps>(
  'div',
  ({ $theme, $kind, $isHovered }) => {
    const color = $isHovered ? BG_ICON_COLORS[$kind].hover : BG_ICON_COLORS[$kind].default;

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: $theme.colors[color],
      transition: 'all 0.25s ease-out',
      flexShrink: 0,
    };
  },
);
