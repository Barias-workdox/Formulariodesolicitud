import { PropsWithChildren, ReactElement } from 'react';
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
export declare const InactivityModal: ({ config: { timeout, onExpiredConfirm, onTimeout, title }, }: InactivityModalProps) => ReactElement;
