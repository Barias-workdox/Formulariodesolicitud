import { ReactElement, ReactNode } from 'react';
import { ToastProps } from 'baseui/toast';
export type KindStyleType = {
    icon: JSX.Element;
    borderColor: string;
    color: string;
    borderRadius: string;
    backgroundColor: string;
};
type LinkType = 'internal' | 'external';
export type NotificationProps = Omit<ToastProps, 'children'> & {
    /**
     * Value to be rendered in the body section of the notification component
     *
     * @deprecated Only required for legacy support, must use title and description properties
     */
    message?: string;
    duration?: number;
    'data-testid'?: string;
    width?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    /** Sets the notification title */
    title?: string;
    /** Sets the notification description */
    description?: ReactNode;
    /**
     * For the link to appear you must pass the properties linkText, linkPath
     *
     * Sets the link label
     */
    linkText?: string;
    /** Sets the link route, it can be a external or internal route */
    linkPath?: string;
    /** Set the type of link, external to redirect to another website or internal to redirect on a specific page path. */
    linkType?: LinkType;
    /** Sets a notification endEnhancer component, it will be displayed on the right side of the notification. */
    endEnhancer?: ReactElement;
};
/**
 * Styled version of Baseweb Notification component. It includes
 * the correct colors, close icon and the icon displayed on each kind (positive, negative, info, warning)
 * of notification.
 *
 * This component is updated to receive a title, description and link properties,
 * also the message property is deprecated.
 *
 * @deprecated Notification component is deprecated instead use `@webdoxclm/design-system/notification/next` component
 */
export declare const Notification: ({ "data-testid": dataTestId, message, duration, kind, width, closeable, marginTop, marginBottom, marginLeft, marginRight, title, description, linkPath, linkText, linkType, endEnhancer, ...props }: NotificationProps) => ReactElement;
export {};
