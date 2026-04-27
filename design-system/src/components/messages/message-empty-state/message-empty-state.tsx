import type { ReactElement, ReactNode } from 'react';

import { Chat } from '@carbon/icons-react';

import { useTranslation } from '@components/utils/i18n';

import { BackgroundIcon } from '../../background-icon';
import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-standard';

const styles = {
  emptyStateStyles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '264px',
    margin: '0 auto',
  } as StyleObject,
  boldText: (theme: DesignSystemTheme): StyleObject => ({
    color: theme.colors.neutral,
    fontWeight: 500,
  }),
};

interface MessageEmptyStateProps {
  emptyMessage?: ReactNode;
}

/**
 * Message that is shown when the messages organism doesn't has any message.
 */
export const MessageEmptyState = ({ emptyMessage }: MessageEmptyStateProps): ReactElement => {
  const { emptyStateStyles, boldText } = useCss(styles);
  const { t } = useTranslation();

  return (
    <div className={emptyStateStyles}>
      <BackgroundIcon
        shape="round"
        Icon={Chat}
        iconColor="brandMedium"
        backgroundColor="brandWashed"
        size="44px"
      />
      {emptyMessage ?? (
        <Text
          variant="bodySmall"
          color="neutralSubdued"
          textAlign="center"
        >
          {t('messages.emptyState.writeAMessage')}
          <span className={boldText}>{` @${t('messages.emptyState.mention')} `}</span>
          {t('messages.emptyState.askForInformation')}
        </Text>
      )}
    </div>
  );
};
