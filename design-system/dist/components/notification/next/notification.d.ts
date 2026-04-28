import { ReactElement, ReactNode } from 'react';
import { CarbonIconType } from '@carbon/icons-react';
import { SvgIconComponent } from '../../../interfaces/common.interfaces';
import { ToastOverrides, ToastProps } from 'baseui/toast';
export type NotificationSize = 'default' | 'small';
export type NotificationKind = 'info' | 'infoAI' | 'warning' | 'positive' | 'negative';
export type NotificationDirection = 'horizontal' | 'vertical';
export type NotificationEventHandlers = Pick<ToastProps, 'onClose' | 'onBlur' | 'onFocus' | 'onMouseEnter' | 'onMouseLeave'>;
export type NotificationProps = {
    'data-testid'?: string;
    /** Determines whether to use a spinner instead of an icon. Defaults to `false` */
    showSpinner?: boolean;
    /** Defaults to `false` */
    closeable?: boolean;
    /** Defaults to `default` */
    size?: NotificationSize;
    /** Defaults to `info` */
    kind?: NotificationKind;
    overrides?: ToastOverrides;
    /** Text with bold font weight */
    title?: string;
    /** Default text that should be rendered */
    description: ReactElement | string;
    /** Custom actions that could be rendered in the notification. Ej: `Notification.Link`*/
    actions?: ReactNode;
    /** Determines whether the notification should be displayed in a horizontal or vertical layout. */
    direction?: NotificationDirection;
    /** Custom icon to be rendered in the notification. */
    Icon?: CarbonIconType | SvgIconComponent;
} & NotificationEventHandlers;
/**
 * Notification component to display a notification message with optional spinner,
 * icon, title, description, and actions.
 */
declare const Notification: {
    ({ "data-testid": dataTestId, showSpinner, closeable, size, kind, overrides, title, description, direction, Icon, onClose, onBlur, onFocus, onMouseEnter, onMouseLeave, actions, }: NotificationProps): JSX.Element;
    Link: ({ "data-testid": dataTestId, isExternal, path, text, }: import('./components').NotificationLinkProps) => JSX.Element;
};
export { Notification };
