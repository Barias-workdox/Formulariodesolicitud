import type { IColors } from './percentage-circle';
import type { StyleObject } from 'styletron-react';

/**
 * Created the circle outline and the second inner circle, also theirs background colors.
 * The area between the circles will be the empty fill bar
 */
export const circleContainerStyles = (colors: IColors, size: string): StyleObject => ({
  zIndex: 0,
  position: 'relative',
  fontSize: size,
  width: '1em',
  height: '1em',
  '-webkit-border-radius': '50%',
  '-moz-border-radius': '50%',
  '-ms-border-radius': '50%',
  '-o-border-radius': '50%',
  borderRadius: '50%',
  float: 'left',
  backgroundColor: colors.empty,
  ':after': {
    position: 'absolute',
    top: '0.13em',
    left: '0.13em',
    display: 'block',
    content: '""',
    '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    borderRadius: '50%',
    backgroundColor: colors.inner,
    width: '0.74em',
    height: '0.74em',
  },
});

/**
 * Adds styles to the fill bar, with color and percentage
 *
 * @param fill - a value between 1 and 100, indicating the percentage of the area filled.
 */
export const fillRotationStyles = (fill: number, colors: IColors): StyleObject => {
  return {
    position: 'absolute',
    border: `0.13em solid ${colors.fill}`,
    width: '1em',
    height: '1em',
    clip: `rect(0em, 0.5em, 1em, 0em)`,
    '-webkit-border-radius': '50%',
    '-moz-border-radius': '50%',
    '-ms-border-radius': '50%',
    '-o-border-radius': '50%',
    borderRadius: '50%',
    '-webkit-transform': `rotate(${fill * 3.6}deg)`,
    '-moz-transform': `rotate(${fill * 3.6}deg)`,
    '-ms-transform': `rotate(${fill * 3.6}deg)`,
    '-o-transform': `rotate(${fill * 3.6}deg)`,
    transform: `rotate(${fill * 3.6}deg)`,
  };
};

/**
 * Controls the inner section of the progress circle. Add styles for texts that will be written here
 */
export const innerTextStyles = (colors: IColors): StyleObject => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
  left: 0,
  top: 0,
  fontSize: '0.21em',
  color: colors.fill,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  fontWeight: 700,
  margin: 0,
  gap: '.1em',
});

/**
 * This one renders styles for less or equal than 50% and greater than 50%. There is a subtlety
 * required in order to render style correctly
 */
export const innerFillContainerStyles = (percentage: number): StyleObject => ({
  position: 'absolute',
  width: '1em',
  height: '1em',
  clip: 'rect(0em, 1em, 1em, 0.5em)',
  transform: 'rotate(180deg)',

  ...(percentage >= 50 && {
    clip: 'rect(auto, auto, auto, auto)',
  }),
});

/**
 * Render styles for percentage greater than 50%. It will use the same styles of the less than 50%
 * fill bar
 */
export const fillRotationFiftyPercentStyles = (colors: IColors): StyleObject => ({
  ...fillRotationStyles(0, colors),
  '-webkit-transform': 'rotate(180deg)',
  '-moz-transform': 'rotate(180deg)',
  '-ms-transform': 'rotate(180deg)',
  '-o-transform': 'rotate(180deg)',
  transform: 'rotate(180deg)',
});

/**
 * Generates the styles for the text within the circle.
 */
export const getTextStyles = (color: string): StyleObject => ({
  color,
});
