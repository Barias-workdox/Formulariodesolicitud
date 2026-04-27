import DOMPurify from 'dompurify';

import { userMentionCssClassName } from '@components/messages';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { sanitizeClassUserMention } from '@components/utils/strings/regex.utils';

import { styles } from './activity-comment.styles';

export interface ActivityCommentProps {
  comment: string;
}

/**
 * A component for displaying a comment within an activity timeline.
 *
 * @deprecated Use the `Timeline` API instead
 */
export const ActivityComment = ({ comment }: ActivityCommentProps): JSX.Element => {
  const { mentionedUserStyles, theme } = useCss(styles);

  const styledComment = sanitizeClassUserMention({
    text: comment,
    userMentionCssClassName,
    mentionedUserStyles,
  });

  return (
    <Text
      variant="bodySmall"
      margin={0}
      padding={`${theme.spacing.spacing2xs} 0 ${theme.spacing.spacing2xs} ${theme.spacing.spacingXs}`}
      color="neutralSubdued"
      $style={styles.textStyles(theme)}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(styledComment),
        }}
      />
    </Text>
  );
};
