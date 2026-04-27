import type { ReactElement } from 'react';

import { ParagraphXSmall } from 'baseui/typography';

import { useTranslation } from '@components/utils/i18n';

import { Button } from '../../button';
import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { StyleObject } from 'styletron-standard';

export interface MessageDeleteProps extends WithTestId {
  show: boolean;
  message: unknown;
  onCancel(): void;
  onConfirm(): void;
}

const styles = {
  containerStyles: {
    backgroundColor: 'rgba(0,0,0,.1)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as StyleObject,
  boxStyles: (theme: DesignSystemTheme): StyleObject => ({
    background: 'white',
    padding: `${theme.spacing.spacingMd} ${theme.spacing.spacing3xl}`,
    boxShadow: theme.lighting.shadowDefault,
  }),
  buttonsWrapperStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginTop: theme.spacing.spacingMd,
    display: 'grid',
    gridAutoFlow: 'column',
    gridColumnGap: theme.spacing.spacingXs,
  }),
};

/**
 * Confirmation to delete a message.
 * The confirmation contains a black overlay at background and a box with confirm and cancel buttons.
 */
export const MessageDelete = ({
  dataTestId = 'message-delete',
  show,
  message,
  onCancel,
  onConfirm,
}: MessageDeleteProps): ReactElement => {
  const { containerStyles, boxStyles, buttonsWrapperStyles } = useCss(styles);
  const { t } = useTranslation();

  return show ? (
    <div className={containerStyles}>
      <div className={boxStyles}>
        <ParagraphXSmall>{t('messages.deleteTitle')}</ParagraphXSmall>
        <div className={buttonsWrapperStyles}>
          <Button
            data-testid={`${dataTestId}__cancel-button`}
            type="button"
            kind="secondary"
            onClick={onCancel}
            size="compact"
          >
            {t('general.cancel')}
          </Button>
          <Button
            data-testid={`${dataTestId}__confirm-button`}
            type="button"
            kind="primary"
            onClick={onConfirm}
            size="compact"
            disabled={!message}
          >
            {t('general.delete')}
          </Button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
