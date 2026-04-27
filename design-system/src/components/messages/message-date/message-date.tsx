import type { ReactElement } from 'react';

import { LabelSmall } from 'baseui/typography';
import isEqual from 'lodash/isEqual';

import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/i18n';

import type { DesignSystemTheme } from '@themes/index';
import type { StyleObject } from 'styletron-standard';

export interface MessageDateProps {
  isEditing: boolean;
  updatedAt: string;
  createdAt: string;
}

const styles = {
  dateStyles: (theme: DesignSystemTheme, isEditing: boolean): StyleObject => ({
    display: 'inline-block',
    borderTop: isEditing ? 'none' : `1px solid ${theme.colors.neutralWashed}`,
    paddingTop: theme.spacing.spacingMd,
    marginTop: theme.spacing.spacingXs,
  }),
};

/**
 * Date of the message.
 * If there are differences between created and updated dates then it will mean that the message is updated.
 */
export const MessageDate = ({
  isEditing,
  updatedAt,
  createdAt,
}: MessageDateProps): ReactElement => {
  const { theme } = useCss();
  const { t } = useTranslation();

  const { formatDatetime } = useDateUtilsWithLocale();

  const isUpdated = updatedAt ? !isEqual(new Date(updatedAt), new Date(createdAt)) : false;
  const date = formatDatetime(updatedAt || createdAt);

  return (
    <LabelSmall
      color="contentPrimary"
      $style={styles.dateStyles(theme, isEditing)}
    >
      {isUpdated && t('messages.edited')} {date}
    </LabelSmall>
  );
};
