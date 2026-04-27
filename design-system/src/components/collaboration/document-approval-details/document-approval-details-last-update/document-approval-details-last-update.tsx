import { RecentlyViewed } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { TitleLayout } from '@components/layouts';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation, type Locale } from '@components/utils/i18n';
import { formatDate } from '@components/utils/strings/date.utils';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';
import { useLocale } from '@contexts/locale-provider';

import {
  lastUpdateTitleLayoutOverridesStyles,
  styles,
} from './document-approval-details-last-update.styles';

import type { CollaborationSubtask } from '../../interfaces';

export interface DocumentApprovalDetailsLastUpdateProps {
  subtasks: CollaborationSubtask[];
  showSubtitleText?: boolean;
}

/** Get the latest update date formatted as i18n string in the invitations array */
export const getLastUpdateDate = (subtasks: CollaborationSubtask[], locale: Locale): string => {
  const updateDates = subtasks.reduce<Date[]>(
    (dates, subtask) => dates.concat(subtask.resources.map(({ updatedAt }) => new Date(updatedAt))),
    [],
  );

  if (!updateDates.length) {
    return '';
  }

  const latestDate = Math.max(...updateDates.map((date) => date.getTime()));

  return formatDate(new Date(latestDate).toISOString(), locale);
};

/**
 * Part of document approval details by document.
 * Shows the last update in the collaboration invites.
 *
 * The locale param is /es/ by default.
 *
 * The locale param is temporary. Will be replaced in future
 * versions of the DS when the locale context will be implemented.
 * In the current version there are a problem in the locale context
 * to share its current value with other component from the DS.
 */
export const DocumentApprovalDetailsLastUpdate = ({
  subtasks,
  showSubtitleText = true,
}: DocumentApprovalDetailsLastUpdateProps): JSX.Element => {
  const { t } = useTranslation();
  const { lastUpdateWrapperStyles, theme } = useCss(styles);

  const { locale } = useLocale();

  return (
    <div className={lastUpdateWrapperStyles}>
      <TitleLayout
        overrides={lastUpdateTitleLayoutOverridesStyles(theme)}
        startEnhancer={
          <BackgroundIcon
            Icon={RecentlyViewed}
            size={COMMON_ICON_SIZE_32}
            backgroundColor="brandWashed"
          />
        }
        titleText={t('collaborationDetails.approvalActivity')}
        {...(showSubtitleText && {
          subtitleText: t('collaborationDetails.updatedText.updated', {
            date: getLastUpdateDate(subtasks, locale),
          }),
        })}
      />
    </div>
  );
};
