import { getCustomScrollBarStyles } from '@themes/custom-scroll-bar';

import type { SharedProps } from './message-box.interfaces';
import type { DesignSystemTheme } from '@themes/index';
import type { StyleObject } from 'styletron-react';

export const styles = {
  editorContentStyles: (theme: DesignSystemTheme, { $disabled }: SharedProps): StyleObject => ({
    ...getCustomScrollBarStyles(theme),
    ...theme.typography.ParagraphMedium,
    lineHeight: '24px',
    outline: 'none',
    position: 'relative',
    color: $disabled ? theme.colors.neutralDepressed : theme.colors.neutralStrong,
    overflow: 'auto',
    overflowX: 'hidden',
    width: '100%',

    // Override Tiptap styles
    '.tiptap': {
      outline: 'none',
    },

    // Override Tiptap placeholder styles
    '.ProseMirror p.is-empty::before': {
      content: 'attr(data-placeholder)',
      color: $disabled ? theme.colors.neutralDepressed : theme.colors.neutralSubdued,
      pointerEvents: 'none',
      position: 'absolute',
    },
  }),
};
