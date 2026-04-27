import type { ComposerTextareaContainerProps } from './composer-textarea-container.interfaces';
import type { MessageComposerProps } from '../../message-composer.interfaces';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

type StyleOptions = Pick<MessageComposerProps, 'isEditing'> &
  Pick<ComposerTextareaContainerProps, '$minHeight' | '$maxHeight' | 'isDisabled'>;

export const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'flex-end',
    gap: theme.spacing.spacingMd,
  }),
  composerWrapperStyles: (
    theme: DesignSystemTheme,
    { isEditing, $minHeight = '4rem', $maxHeight = '4rem' }: StyleOptions,
  ): StyleObject => ({
    boxSizing: 'border-box',
    background: theme.colors.neutralWashed,
    flex: 1,
    display: 'flex',
    flexDirection: isEditing ? 'column' : 'row',
    border: `1px solid ${theme.colors.neutralSubtle}`,
    overflow: 'hidden',
    padding: `${theme.spacing.spacingXs} 0`,
    minHeight: $minHeight,
    maxHeight: $maxHeight,
  }),
};

export const stylesOverrides = {
  Container: { style: ({ $theme }): StyleObject => styles.containerStyles($theme) },
  ComposerWrapper: {
    style: ({ $theme, ...rest }): StyleObject =>
      styles.composerWrapperStyles($theme, rest as StyleOptions),
  },
};
