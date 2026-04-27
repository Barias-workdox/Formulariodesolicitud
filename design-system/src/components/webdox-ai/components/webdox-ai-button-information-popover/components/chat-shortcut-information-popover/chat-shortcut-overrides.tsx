import { SendAlt } from '@carbon/icons-react';

import { Button } from '@components/button';
import { InlineComposerTextareaContainer } from '@components/messages/message-composer/containers/inline-composer-textarea-container';
import { COMMON_HEIGHT_32, COMMON_ICON_SIZE_16 } from '@constants/common.constants';

import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';
import type { ComposerTextareaOverrides } from '@components/messages/message-composer/common/composer-textarea';
import type { InlineComposerTextareaContainerProps } from '@components/messages/message-composer/containers/inline-composer-textarea-container';
import type { MessageComposerOverrides } from '@components/messages/message-composer/message-composer.interfaces';

type GetMessageComposerOverridesProps = {
  placeholder: string;
  buttonText: string;
};

type GetChatShortcutinformationPopoverOverridesProps = {
  isActive: boolean;
};

/**
 * Get popover overrides
 */
export const getChatShortcutInformationPopoverOverrides = ({
  isActive,
}: GetChatShortcutinformationPopoverOverridesProps): InformationPopoverOverrides => ({
  Body: {
    style: {
      opacity: isActive ? '1' : '0.8',
    },
  },
});

const editableDivOverrides: ComposerTextareaOverrides['EditableDiv'] = {
  style: ({ $theme }) => ({
    ...$theme.typography.ParagraphSmall,
    height: '76px',
    padding: $theme.spacing.spacingXs,
    width: '100%',

    '[placeholder]:empty::before': {
      ...$theme.typography.ParagraphSmall,
    },
  }),
};

const composerWrapperOverrides: InlineComposerTextareaContainerProps['overrides']['ComposerWrapper'] =
  {
    style: ({ $theme }) => ({
      background: $theme.colors.bgBase,
      overflow: 'auto',
      paddingTop: 0,
      alignItems: 'center',
      width: '100%',
    }),
  };

const containerOverrides: InlineComposerTextareaContainerProps['overrides']['Container'] = {
  style: ({ $theme }) => ({
    flexDirection: 'column',
    gap: $theme.spacing.spacingXs,
  }),
};

const rootOverrides: MessageComposerOverrides['Root'] = {
  style: {
    padding: 0,
  },
};

/**
 * Get message composer overrides to use with shortcut message popover
 */
export const getMessageComposerOverrides = ({
  placeholder,
  buttonText,
}: GetMessageComposerOverridesProps): MessageComposerOverrides => ({
  Textarea: {
    component: InlineComposerTextareaContainer,
    props: {
      placeholder,
      overrides: {
        EditableDiv: editableDivOverrides,
        ComposerWrapper: composerWrapperOverrides,
        Container: containerOverrides,
        SendButton: {
          component: Button,
          props: {
            startEnhancer: <SendAlt size={COMMON_ICON_SIZE_16} />,
            children: buttonText,
            size: COMMON_HEIGHT_32,
            kind: 'primary-brain',
          },
        },
      },
    },
  },
  Root: rootOverrides,
});
