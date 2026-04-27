import type { MessageBoxTextareaOverrides } from '@components/message-box/components';

export const messageBoxTextareaOverrides: MessageBoxTextareaOverrides = {
  EditableDiv: {
    style: ({ $theme }) => ({
      ...$theme.typography.ParagraphSmall,
      padding: `0 ${$theme.spacing.spacingMd}`,
      '::before': {
        ...$theme.typography.ParagraphXSmall,
      },
    }),
  },
};
