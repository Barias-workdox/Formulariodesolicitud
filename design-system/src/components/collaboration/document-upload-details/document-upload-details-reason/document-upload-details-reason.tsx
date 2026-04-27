import { Information } from '@carbon/icons-react';

import { useTranslation } from '@components/utils/i18n';

import { Text } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';

import { reasonStyles } from './document-upload-details-reason.styles';

/**
 * Renders the reason information of the document upload task
 */
export const DocumentUploadDetailsReason = ({ reason }: { reason: string }): JSX.Element => {
  const { wrapper, title, theme } = useCss(reasonStyles);
  const { t } = useTranslation();

  return (
    <div className={wrapper}>
      <div className={title}>
        <Information
          size={16}
          width={14}
          height={14}
          color={theme.colors.neutral}
        />
        <Text
          variant="bodySmall"
          margin={0}
          color={theme.colors.neutral}
          marginLeft={theme.spacing.spacingXs}
          fontWeight="500"
        >
          {t('collaborationUploadDetails.reason')}
        </Text>
      </div>
      <Text
        variant="bodySmall"
        $style={reasonStyles.reasonText(theme)}
        fontWeight={400}
        color={theme.colors.neutralSubdued}
      >
        {reason}
      </Text>
    </div>
  );
};
