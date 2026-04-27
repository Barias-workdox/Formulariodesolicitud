import type { ReactElement } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-react';

type Size = 'sm' | 'md' | 'lg';

/** Get size utility */
const getSize = (size: Size): number => {
  switch (size) {
    case 'sm':
      return 16;
    case 'md':
      return 32;
    case 'lg':
      return 64;
  }
};

/** Get stroke utility */
const getStrokeWidth = (size: Size): number => {
  switch (size) {
    case 'sm':
      return 2;
    case 'md':
      return 4;
    case 'lg':
      return 6;
  }
};

export type SpinnerProps = WithTestId & {
  size?: Size;
  color?: string;
  secondaryColor?: string;
};

/** Get radius utility */
const getRadius = (size, strokeWidth): number => getSize(size) / 2 - strokeWidth / 2;

const fillPercentage = 75;

const styles = {
  containerStyles: {
    margin: 'auto',
    display: 'block',
    shapeRendering: 'auto',
    animationPlayState: 'running',
    animationDelay: '0s',
  } as StyleObject,
  animationStyles: {
    animationPlayState: 'running',
    animationDelay: '0s',
  } as StyleObject,
};

/** Styled spinner component */
export function Spinner({
  'data-testid': dataTestId = 'loading-spinner',
  size = 'md',
  color = 'brand',
  secondaryColor = 'brandWashed',
}: SpinnerProps): ReactElement {
  const { containerStyles, animationStyles, theme } = useCss(styles);

  const _color = theme.colors[color as keyof typeof theme.colors] || color;
  const _secondaryColor =
    theme.colors[secondaryColor as keyof typeof theme.colors] || secondaryColor;

  const strokeWidth = getStrokeWidth(size);
  const radius = getRadius(size, strokeWidth);
  const sizeNumber = getSize(size);
  const center = sizeNumber / 2;

  const circleCommonProps = {
    cx: center,
    cy: center,
    r: radius,
    fill: 'none',
    strokeWidth,
  };

  const strokeDasharray = `${(2 * Math.PI * radius * fillPercentage) / 100}, ${2 * Math.PI * radius}`;

  const animateTransform = `0 ${center} ${center};360 ${center} ${center}`;

  const sizePx = `${sizeNumber}px`;

  return (
    <svg
      data-testid={dataTestId}
      className={containerStyles}
      width={sizePx}
      height={sizePx}
      viewBox={`0 0 ${sizeNumber} ${sizeNumber}`}
      preserveAspectRatio="xMidYMid"
    >
      {secondaryColor && (
        <circle
          {...circleCommonProps}
          stroke={_secondaryColor}
        />
      )}
      <circle
        {...circleCommonProps}
        className={animationStyles}
        strokeDasharray={strokeDasharray}
        stroke={_color}
      >
        <animateTransform
          data-testid={`${dataTestId}__animation`}
          className={animationStyles}
          values={animateTransform}
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  );
}
