import { lightTheme } from '@themes';

import { getOverrides } from './tooltip-next.styles';

import type { ConfigurationOverrideFunction } from 'baseui/helpers/overrides';

const theme = lightTheme;

describe('tooltip-next: get-overrides', () => {
  it('returns correct style overrides for small size', () => {
    const smallSizeOverrides = getOverrides({ size: 'sm' });

    const bodyStyles = (smallSizeOverrides.Body.style as ConfigurationOverrideFunction)({
      $theme: theme,
    });

    expect(bodyStyles.padding).toBe(theme.spacing.spacingSm);

    const innerStyles = (smallSizeOverrides.Inner.style as ConfigurationOverrideFunction)({
      $theme: theme,
    });

    expect(innerStyles.fontSize).toBe(theme.typography.ParagraphXSmall.fontSize);
  });

  it('returns correct style overrides for medium size', () => {
    const mediumSizeOverrides = getOverrides({ size: 'md' });

    const bodyStyles = (mediumSizeOverrides.Body.style as ConfigurationOverrideFunction)({
      $theme: theme,
    });

    expect(bodyStyles.padding).toBe(theme.spacing.spacingMd);

    const innerStyles = (mediumSizeOverrides.Inner.style as ConfigurationOverrideFunction)({
      $theme: theme,
    });

    expect(innerStyles.fontSize).toBe(theme.typography.ParagraphSmall.fontSize);
  });
});
