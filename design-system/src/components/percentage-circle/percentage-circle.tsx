import { useMemo } from 'react';

import { themedStyled, themedUseStyletron } from '../../themes';
import { Text } from '../text';

import {
  circleContainerStyles,
  fillRotationFiftyPercentStyles,
  fillRotationStyles,
  getTextStyles,
  innerFillContainerStyles,
  innerTextStyles,
} from './percentage-circle.styles';

export interface IColors {
  /** unfilled bar color */
  empty: string;
  /** Center fill color */
  inner: string;
  /** filled bar color */
  fill: string;
  currentText: string;
  totalText: string;
}

interface ProgressCircleProps {
  /** The current number. Should be lower than total */
  current: number;
  /** The maximum number of the percentage. Should be equal or greater than current */
  total: number;
  colors: IColors;
  /** Required to make the size of the component. All nodes are calculated relative to this value in px */
  size: string;
}

/** Required by progress circle fill bar */
const ProgressCircleWrapper = themedStyled('div', () => ({
  '*': {
    boxSizing: 'inherit',
  },
  '*::before': {
    boxSizing: 'inherit',
  },
  '*::after': {
    boxSizing: 'inherit',
  },
}));

/**
 * Renders a styled percentage circle with a filled circular section, based on the current vs total
 * values.
 * Some colors are handled by the state of the component
 */
export const ProgressCircle = ({
  current,
  total,
  colors,
  size,
}: ProgressCircleProps): JSX.Element => {
  const [css] = themedUseStyletron();

  const percentage = (current * 100) / total;

  const totalColor = useMemo(
    () => (current === total ? colors.currentText : colors.totalText),
    [total, current, colors.currentText, colors.totalText],
  );

  return (
    <ProgressCircleWrapper>
      <div className={css(circleContainerStyles(colors, size))}>
        <Text
          variant="bodySmall"
          $style={innerTextStyles(colors)}
        >
          <span className={css(getTextStyles(colors.currentText))}>{current}</span>
          <span className={css(getTextStyles(totalColor))}>/</span>
          <span className={css(getTextStyles(totalColor))}>{total}</span>
        </Text>
        <div className={css(innerFillContainerStyles(percentage))}>
          <div className={css(fillRotationStyles(percentage, colors))} />
          {percentage > 50 && <div className={css(fillRotationFiftyPercentStyles(colors))} />}
        </div>
      </div>
    </ProgressCircleWrapper>
  );
};
