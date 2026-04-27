import { getColorsMap } from '@components/button/button.styles';

import type { FeedbackState } from './feedback-button.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  buttonStyles: (theme: DesignSystemTheme, { state }: { state: FeedbackState }): StyleObject => {
    const colorMapByVariant = getColorsMap({ $theme: theme })['control'];

    return {
      borderColor: theme.colors.neutralSubtle,
      borderRadius: theme.spacing.spacing2xs,
      ...(state === 'active' && (colorMapByVariant[':active'] as StyleObject)),
    };
  },
};
