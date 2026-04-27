import { useState, useEffect, useMemo } from 'react';
import type { ReactElement } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import {
  getSizeConfig,
  getSpinnerColors,
  createSpinnerStyles,
  getTextVariantFromSize,
} from './spinner.styles';

import type { SpinnerProps } from './spinner.interface';

const fillPercentage = 75;

/**
 * Unified Spinner component that replaces both Spinner and FullSpinner
 */
export function Spinner({
  dataTestId = 'loading-spinner',
  kind,
  size,
  label,
  ariaLabel,
  fullWidth = false,
  isRelative = false,
  opacity = 0.8,
  backgroundColor = 'bgBase',
  delay = 0,
  customColor,
  customSize,
}: SpinnerProps): ReactElement {
  const [isVisible, setIsVisible] = useState(delay === 0);

  /**
   * Handle delayed visibility to prevent spinner flickering on fast operations.
   * Sets up a timeout when delay is specified to show the spinner after the delay period.
   * Cleanup function cancels the timeout if the component unmounts or delay changes.
   */
  useEffect((): (() => void) | void => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const config = useMemo(() => getSizeConfig(size, customSize), [size, customSize]);

  const { theme } = useCss();

  const colors = useMemo(
    () => getSpinnerColors(kind, theme, customColor),
    [kind, theme, customColor],
  );

  const styles = useMemo(
    () =>
      createSpinnerStyles({
        theme,
        config,
        colors,
        isRelative,
        opacity,
        backgroundColor,
        size,
      }),
    [theme, config, colors, isRelative, opacity, backgroundColor, size],
  );

  const { container, spinnerAnimation, overlay, contentWrapper, inlineWrapper, hiddenSpinner } =
    useCss(styles);

  const circleCommonProps = {
    cx: config.center,
    cy: config.center,
    r: config.radius,
    fill: 'none',
    strokeWidth: config.strokeWidth,
  };

  const strokeDasharray = useMemo(
    () => `${(2 * Math.PI * config.radius * fillPercentage) / 100}, ${2 * Math.PI * config.radius}`,
    [config.radius],
  );

  const accessibleLabel = label || ariaLabel;

  const spinnerSvg = (
    <svg
      data-testid={dataTestId}
      className={`${container} ${spinnerAnimation} ${!isVisible ? hiddenSpinner : ''}`}
      width={config.size}
      height={config.size}
      viewBox={`0 0 ${config.size} ${config.size}`}
      preserveAspectRatio="xMidYMid"
      role="status"
      aria-label={accessibleLabel}
      {...(fullWidth && { 'aria-busy': true })}
    >
      <circle
        {...circleCommonProps}
        strokeDasharray={strokeDasharray}
        stroke={colors.primary}
        strokeLinecap="round"
      />
    </svg>
  );

  const content = (
    <>
      {spinnerSvg}
      {label && isVisible && (
        <Text
          variant={getTextVariantFromSize(size)}
          color={colors.textColor}
          textAlign="center"
          data-testid={`${dataTestId}__label`}
        >
          {label}
        </Text>
      )}
    </>
  );

  if (!isVisible) {
    return <div className={hiddenSpinner} />;
  }

  if (fullWidth) {
    return (
      <div
        className={overlay}
        data-testid={`${dataTestId}__overlay`}
      >
        <div className={contentWrapper}>{content}</div>
      </div>
    );
  }

  if (label) {
    return (
      <div
        className={inlineWrapper}
        data-testid={`${dataTestId}__inline-wrapper`}
      >
        {content}
      </div>
    );
  }

  return spinnerSvg;
}
