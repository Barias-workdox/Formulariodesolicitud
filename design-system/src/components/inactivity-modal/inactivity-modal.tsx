import { useEffect, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren, ReactElement } from 'react';

import { ErrorFilled, WarningFilled } from '@carbon/icons-react';
import { useIdleTimer } from 'react-idle-timer';

import { useTranslation } from '@components/utils/i18n';

import { Button } from '../button';
import { Modal } from '../modal';
import {
  RegularModalBody,
  RegularModalFooter,
  RegularModalHeader,
  RegularModalLabel,
} from '../modal/regular-modal';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { styles } from './inactivity-modal.styles';

const dataTestId = 'inactivity-modal';

/**
 * Default value in milliseconds to show the inactivity modal.
 */
const INACTIVITY_TIMEOUT = 1000 * 60 * 15; // 15 minutes

/**
 * Once the inactivity modal is shown, the session can be kept active for the time defined by the WARNING_TIMEOUT,
 * Here the user can click on the button to keep the session alive.
 */
const WARNING_TIMEOUT = 1000 * 60 * 2; // 2 minutes

export type InactivityModalProps = PropsWithChildren<{
  config: {
    /**
     * Milliseconds to show the inactivity modal, if the timeout is greater than 2 minutes the inactivity modal will be shown in (timeout - 120 * 1000) milliseconds as the warning will last 2 minutes.
     * Otherwise, is the timeout is lesser than 2 minutes then the modal will be shown in 75% of the timeout as the warning will last 25% of the timeout.
     */
    timeout?: number;
    title: string;
    onExpiredConfirm(): void;
    onTimeout(): void;
  };
}>;

/**
 * This is the modal displayed when the user is inactive.
 * When the modal is displayed, the user will have a time to reactivate their session,
 * if they do not reactivate their session in the given time then the user will be forced to log in again.
 */
export const InactivityModal = ({
  config: { timeout = INACTIVITY_TIMEOUT, onExpiredConfirm, onTimeout, title },
}: InactivityModalProps): ReactElement => {
  const { warningIconWrapperStyles, expiredIconWrapperStyles, bodyWrapperStyles, theme } =
    useCss(styles);
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);
  const [expiredSession, setExpiredSession] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { t } = useTranslation();

  /**
   * Show the inactivity modal on idle is detected
   */
  const showModal = (): void => {
    setIsOpen(true);
    isOpenRef.current = true;
  };

  /**
   * The inactivity modal will be shown exactly in this timeout.
   * If the timeout is lesser than the 'warning timeout', then the rule will be 25% of the timeout to show the modal.
   */
  const showTimeout = useMemo(() => {
    return timeout > WARNING_TIMEOUT ? timeout - WARNING_TIMEOUT : timeout * 0.25;
  }, [timeout]);

  /**
   * This is the real timeout in milliseconds to show the warning to keep the session alive,
   * once the timeout is over then the session will expire, in both the frontend and backend.
   */
  const showWarningTimeout = useMemo(() => {
    return timeout > WARNING_TIMEOUT ? WARNING_TIMEOUT : timeout * 0.75; // 75% of the timeout will be to expire the session once the modal is shown
  }, [timeout]);

  /**
   * While the inactivity modal is shown, the user will be able to keep the session alive,
   * when the 'warning timeout' expires then can not revive the session through this modal.
   */
  useEffect(() => {
    if (isOpen) {
      setExpiredSession(false);

      setTimeout(() => {
        if (isOpenRef.current) {
          setExpiredSession(true);
          onTimeout();
        }
      }, showWarningTimeout);
    }
  }, [isOpen, showWarningTimeout, onTimeout]);

  /**
   * Keeps the activity alive.
   */
  function onUserAction(): void {
    if (!isOpen) {
      // eslint-disable-next-line no-use-before-define
      reset();
    }
  }

  /**
   * Listen for user actions to update activity in backend and keep session alive
   */
  async function keepActivity(): Promise<void> {
    if (!expiredSession) {
      // eslint-disable-next-line no-use-before-define
      reset();
      setIsOpen(false);
      isOpenRef.current = false;
    }
  }

  /**
   * If the user's session has expired, log them out. Otherwise, keep their session alive
   */
  function confirm(): void {
    if (expiredSession) {
      onExpiredConfirm();
      setIsLoggingOut(true);
    } else {
      keepActivity();
    }
  }

  const { reset } = useIdleTimer({
    timeout: showTimeout,
    onIdle: showModal,
    onAction: onUserAction,
    debounce: 5000,
    crossTab: true,
  });

  const icon = expiredSession ? (
    <span className={expiredIconWrapperStyles}>
      <ErrorFilled
        size={20}
        color={theme.colors.sweet}
      />
    </span>
  ) : (
    <span className={warningIconWrapperStyles}>
      <WarningFilled
        size={20}
        color={theme.colors.warning}
      />
    </span>
  );

  return (
    <Modal
      isOpen={isOpen}
      closeable={false}
    >
      <RegularModalHeader>
        <RegularModalLabel>{title}</RegularModalLabel>
        {t('inactivityModal.subtitle')}
      </RegularModalHeader>
      <RegularModalBody>
        <div className={bodyWrapperStyles}>
          {icon}
          <Text
            variant="body"
            color="neutralSubdued"
            marginTop={theme.spacing.spacingMd}
            marginBottom={0}
          >
            {expiredSession ? t('inactivityModal.expiredSession') : t('inactivityModal.warning')}
          </Text>
        </div>
      </RegularModalBody>
      <RegularModalFooter>
        <Button
          data-testid={`${dataTestId}__confirm-button`}
          onClick={confirm}
          disabled={isLoggingOut}
          isLoading={isLoggingOut}
        >
          {expiredSession ? t('inactivityModal.login') : t('inactivityModal.keepSession')}
        </Button>
      </RegularModalFooter>
    </Modal>
  );
};
