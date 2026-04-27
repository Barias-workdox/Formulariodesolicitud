import { getColorsMap } from '@components/button/button.styles';

import type { CopyToClipboardButtonState } from './copy-to-clipboard-button';
import type { KindType } from '@components/button';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export const styles = {
  buttonStyles: (
    theme: DesignSystemTheme,
    { state }: { state: CopyToClipboardButtonState; kind?: KindType },
  ): StyleObject => {
    const colorMapByVariant = getColorsMap({ $theme: theme })['control'];

    return {
      ...(state === 'copied' && (colorMapByVariant[':active'] as StyleObject)),
    };
  },
};
