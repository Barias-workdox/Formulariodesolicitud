import { CheckmarkOutline } from '@carbon/icons-react';

import { lightTheme } from '../../../../themes';

import { styledBody } from './toast-body.styles';

import type { KindValues } from '../../toast';
import type { StyleObject } from 'styletron-react';

const style: KindValues = {
  icon: CheckmarkOutline,
  iconColor: 'positive',
  iconBackgroundColor: 'positiveSubtle',
  leftBorderColor: 'positiveDepressed',
};

/** Return the style object with the default props */
const bodyStyles = ({ width }: { width?: string } = {}): StyleObject => {
  return styledBody(lightTheme, { style, width });
};

describe('toasterContainerStyles - tests', () => {
  it('should correctly apply base styles', () => {
    const styledBodyStyles = bodyStyles();

    // Should have base styling properties
    expect(styledBodyStyles).toHaveProperty('backgroundColor', lightTheme.colors.neutralMedium);
    expect(styledBodyStyles).toHaveProperty('padding', lightTheme.spacing.spacingXs);
    expect(styledBodyStyles).toHaveProperty('zIndex', 1);
    expect(styledBodyStyles).toHaveProperty('boxSizing', 'border-box');
  });

  it('should correctly apply styles with the `style` object', () => {
    const { leftBorderColor } = style;
    const styledBodyStyles = bodyStyles();

    expect(styledBodyStyles).toEqual(
      expect.objectContaining({
        borderLeft: `8px solid ${lightTheme.colors[leftBorderColor]}`,
        backgroundColor: lightTheme.colors.neutralMedium,
        padding: lightTheme.spacing.spacingXs,
      }),
    );
  });

  it('should correctly apply custom width to the `style` object', () => {
    const styledBodyStyles = bodyStyles({ width: '300px' });

    expect(styledBodyStyles).toEqual(
      expect.objectContaining({
        width: '300px',
      }),
    );
  });
});
