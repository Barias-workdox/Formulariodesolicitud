import { useState } from 'react';
import type { ReactElement } from 'react';

import {
  CheckmarkOutline,
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  Number_5,
  Number_6,
  Number_7,
  Number_8,
  Number_9,
  Undefined,
  Warning,
} from '@carbon/icons-react';
import { useMedia } from 'react-use';

import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { mediaQueries } from '@tokens/breakpoints';

import { StyledIconWrapper, StyledProgressStep } from './progress-step.styles';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

export type ProgressStepSize = 'sm' | 'md';

export type ProgressStepType = 'default' | 'compressed';

export type ProgressStepKind = 'default' | 'checked' | 'warning' | 'pending';

export interface ProgressStepProps {
  'data-testid'?: string;
  /** The index of the step, used to determine the icon displayed. */
  index?: number;
  /** The title or label of the step. */
  title: string;
  /** Determines the size of the step. 'sm' renders a smaller step, while 'md' renders a larger one. */
  size?: 'sm' | 'md';
  /**
   * Determines if the text should be replaced with a Tooltip. This logic depends on the `responsiveBreakpoint` property
   * in order to hide the text according to the current screen size.
   */
  hideText?: boolean;
  /** Sets the responsive breakpoint at which the text will be hidden. Defaults to `medium` */
  responsiveBreakpoint?: keyof typeof mediaQueries;
  /**
   * Specifies the visual state of the step.
   *  - 'default': Displays the step number.
   *  - 'checked': Displays a checkmark, indicating completion.
   *  - 'warning': Displays a warning icon.
   *  - 'pending': Displays the step number, indicating a pending status.
   */
  kind: ProgressStepKind;
  /**
   * Determines the layout type of the step.
   *  - 'default': Renders the step with a vertical layout.
   *  - 'compressed': Renders the step with a horizontal layout.
   */
  type?: ProgressStepType;
  /** Sets a custom width for the step. Only applicable when `type` is not 'compressed'. */
  $width?: string;
  /** Callback function triggered when the step is clicked. Not applicable if `kind` is 'pending'. */
  onClick?(): void;
}

const NUMBER_ICONS = [
  Number_1,
  Number_2,
  Number_3,
  Number_4,
  Number_5,
  Number_6,
  Number_7,
  Number_8,
  Number_9,
];

/**
 * `ProgressStep` is a versatile component designed to represent an individual step within a progress indicator sequence.
 * It supports various visual styles and interaction states, making it suitable for different progress tracking scenarios.
 *
 * Renders a React element representing an individual step in a progress indicator.
 *
 * The hover styling will only works if `onClick` prop is declared before.
 *
 * If `index`prop is not defined the step icon to be rendered will be `Undefined` from carbon icons.
 *
 * @example
 * // Basic usage
 * <ProgressStep index="0" title="Step 1" kind="default" />
 */
export const ProgressStep = ({
  'data-testid': dataTestId = 'design-system__progress-step',
  size = 'sm',
  kind,
  hideText = false,
  responsiveBreakpoint = 'medium',
  type = 'default',
  title,
  index,
  $width,
  onClick,
}: ProgressStepProps): ReactElement => {
  const { theme } = useCss();

  const [isHovered, setIsHovered] = useState(false);

  const isBreakpointReached = !useMedia(mediaQueries[responsiveBreakpoint]);

  const shouldRenderTitle = !hideText || !isBreakpointReached;

  const isEnabledMouseEvents = kind !== 'pending' && !!onClick;

  const width = $width ? $width : size === 'sm' ? '160px' : '180px';

  const textVariant = size === 'sm' ? 'microCopy' : 'bodySmall';

  const color = kind !== 'pending' ? theme.colors.neutral : theme.colors.neutralDepressed;

  const icon: Record<ProgressStepKind, CarbonIconType> = {
    default: index !== undefined ? NUMBER_ICONS[index] : Undefined,
    checked: CheckmarkOutline,
    warning: Warning,
    pending: index !== undefined ? NUMBER_ICONS[index] : Undefined,
  };

  const Icon = icon[kind];

  return (
    <StyledProgressStep
      $type={type}
      $isEnabledMouseEvents={isEnabledMouseEvents}
      $width={width}
      role="button"
      data-testid={`${dataTestId}--${kind}`}
      onMouseEnter={isEnabledMouseEvents ? (): void => setIsHovered(true) : undefined}
      onMouseLeave={isEnabledMouseEvents ? (): void => setIsHovered(false) : undefined}
      onClick={isEnabledMouseEvents ? (): void => onClick() : undefined}
      tabIndex={kind === 'pending' ? undefined : index === undefined ? 0 : index + 1}
    >
      <StatefulTooltipNext
        ignoreBoundary
        size="sm"
        popoverMargin={8}
        placement="bottom"
        content={!shouldRenderTitle && title}
      >
        <StyledIconWrapper
          data-testid={`${dataTestId}--icon-wrapper`}
          $kind={kind}
          $isHovered={isHovered}
        >
          {<Icon color={color} />}
        </StyledIconWrapper>
      </StatefulTooltipNext>

      {shouldRenderTitle && (
        <Text
          variant={textVariant}
          margin={0}
          color={color}
          textAlign="center"
          $style={type === 'compressed' ? { whiteSpace: 'nowrap' } : undefined}
        >
          {title}
        </Text>
      )}
    </StyledProgressStep>
  );
};
