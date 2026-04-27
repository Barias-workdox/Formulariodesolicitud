import type { PLACEMENT, SHAPE } from './badge';
import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-react';

/** Get the badge placement by placement prop */
export function getPlacementStyles(placement: PLACEMENT): StyleObject {
  switch (placement) {
    case 'topLeft':
      return {
        left: '-50%',
        top: '-50%',
      };
    case 'topRight':
      return {
        right: '-50%',
        top: '-50%',
      };
    case 'bottomLeft':
      return {
        left: '-50%',
        bottom: '-50%',
      };
    default:
      return {
        right: '-50%',
        bottom: '-50%',
      };
  }
}

/** Get the badge shape by shape prop */
export function getShapeStyles(shape: SHAPE): StyleObject {
  switch (shape) {
    case 'circle':
      return {
        minWidth: '18px',
        height: '18px',
        borderRadius: '50%',
      };
    case 'pill':
      return {
        minWidth: '36px',
        height: '18px',
        borderRadius: '18px',
      };
    default:
      return {
        minWidth: '36px',
        height: '18px',
        borderRadius: 0,
      };
  }
}

export const styles = {
  containerStyles: (theme: DesignSystemTheme, { overrides }): StyleObject => ({
    position: 'relative',
    display: 'block',
    width: 'fit-content',
    ...overrides?.Root,
  }),
  contentStyles: (
    theme: DesignSystemTheme,
    { backgroundColor, color, placement, shape, hidden, overrides },
  ): StyleObject => ({
    ...theme.typography.LabelSmall,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors[backgroundColor as keyof typeof theme.colors],
    fontWeight: 700,
    color: theme.colors[color as keyof typeof theme.colors],
    fontSize: '10px',
    visibility: hidden ? 'hidden' : 'visible',
    ...getPlacementStyles(placement),
    ...getShapeStyles(shape),
    ...overrides?.Content,
  }),
};
