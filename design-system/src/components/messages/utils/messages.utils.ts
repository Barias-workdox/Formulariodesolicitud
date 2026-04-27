import type { DesignSystemTheme } from '../../../themes';
import type { MessageBarColorParams } from '../messages.interfaces';

export const defaultColors: MessageBarColorParams['barsOverrides'] = {
  authorColor: 'brandSubdued',
  otherUserColor: 'warningSubdued',
};

/** Get the message bar color based on color overrides, author, current user and inquiry values */
export const getMessageBarColor = ({
  authorId,
  currentUserId,
  type,
  barsOverrides = {},
}: MessageBarColorParams): keyof DesignSystemTheme['colors'] => {
  const { authorColor, otherUserColor } = { ...defaultColors, ...barsOverrides };

  const isAuthor = authorId === currentUserId;

  if (type === 'inquiry') {
    return 'warning';
  } else {
    return isAuthor ? authorColor : otherUserColor;
  }
};
