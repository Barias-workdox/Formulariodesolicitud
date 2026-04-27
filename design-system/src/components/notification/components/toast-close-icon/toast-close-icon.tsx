import { forwardRef } from 'react';

import { useTranslation } from '@components/utils/i18n';

import { themedUseStyletron } from '../../../../themes';
import { ClearButton } from '../../../clear-button';

import { closeButtonFocusOverrides, CloseIconWrapper } from './toast-close-icon.styles';

import type { ButtonProps } from '@components/button';

/**
 * Uses the CloseIcon and adds the property alignItems and ref to render correctly in the toast.
 * Wrapped in a styled div that provides proper spacing and alignment.
 */
export const CloseIconToast = forwardRef<HTMLButtonElement, ButtonProps>(
  function CloseIconToast(props, ref): JSX.Element {
    const [, theme] = themedUseStyletron();
    const { t } = useTranslation();

    return (
      <CloseIconWrapper>
        <ClearButton
          {...props}
          ref={ref}
          iconColor={theme.colors.iconBase}
          overrides={closeButtonFocusOverrides}
          aria-label={t('notification.closeNotification')}
        />
      </CloseIconWrapper>
    );
  },
);
