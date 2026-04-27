import type { ReactNode } from 'react';

import { StatefulTooltip as BaseStatefulTooltip } from 'baseui/tooltip';

import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { tooltipCaptionOverridesStyles, tooltipCaptionStyles } from './tooltip.styles';

import type { StatefulTooltipProps as BaseStatefulTooltipProps } from 'baseui/tooltip';
import type { StyleObject } from 'styletron-react';

export type StatefulTooltipProps = Omit<BaseStatefulTooltipProps, 'content' | 'children'> & {
  /** If type `string`, will render the content with the component override styles */
  content?: BaseStatefulTooltipProps['content'] | 'string';
  /**
   * Used to override only the styles of the simple tooltip content. Will only applies if
   * `override` property is undefined
   */
  tooltipOverrideStyles?: StyleObject;
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
  /** If undefined, will not render the tooltip */
  children?: ReactNode;
};

interface StyledTooltipContentProps {
  children: ReactNode;
}

/** Basic styled tooltip content with the DS styles */
function StyledTooltipContent({ children }: StyledTooltipContentProps): JSX.Element {
  const { theme } = useCss({});

  return (
    <Text
      $style={tooltipCaptionStyles(theme)}
      variant="bodySmall"
    >
      {children}
    </Text>
  );
}

/**
 * Stateful tooltip that have a basic DS styles for most cases, but also
 * allows the user to create complex components.
 *
 * @deprecated For a more modern approach with better support for custom styling and functionality,
 * consider using the StatefulTooltipNext component located in the file `src/components/tooltip-next/stateful-tooltip-next/stateful-tooltip-next.tsx`.
 */
export const StatefulTooltip = ({
  content,
  children,
  tooltipOverrideStyles,
  // Use basic tooltip overrides by default
  overrides: rawOverrides,
  zIndex,
  ...rest
}: StatefulTooltipProps): JSX.Element => {
  const overrides =
    rawOverrides === undefined
      ? tooltipCaptionOverridesStyles(undefined, tooltipOverrideStyles, zIndex)
      : rawOverrides;

  return children !== undefined ? (
    <BaseStatefulTooltip
      {...rest}
      overrides={overrides}
      content={
        typeof content === 'string' ? (
          <StyledTooltipContent>{content}</StyledTooltipContent>
        ) : (
          content
        )
      }
    >
      {children}
    </BaseStatefulTooltip>
  ) : (
    <></>
  );
};
