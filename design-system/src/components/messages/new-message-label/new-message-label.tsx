import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils/i18n';

import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-standard';

const styles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    '::before': {
      content: '""',
      display: 'block',
      width: '10px',
      height: '10px',
      backgroundColor: theme.colors.positiveDepressed,
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      borderRadius: '50%',
    },
    position: 'relative',
    paddingLeft: `calc(10px + ${theme.spacing.spacingXs})`,
    marginBottom: theme.spacing.spacingMd,
  }),
};

/**
 * Label that is shown when the message is new, that is, it has not been read by the current user.
 */
export const NewMessageLabel = (): ReactElement => {
  const { containerStyles } = useCss(styles);
  const { t } = useTranslation();

  return (
    <div className={containerStyles}>
      <Text
        variant="upperDetails"
        color="neutralSubdued"
      >
        {t('messages.newMessage')}
      </Text>
    </div>
  );
};
