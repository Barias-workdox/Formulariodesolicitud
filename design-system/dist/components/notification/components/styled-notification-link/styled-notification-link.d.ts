import { NotificationProps } from '../../notification';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type StyledNotificationLinkProps = Required<Pick<NotificationProps, 'linkText' | 'linkPath' | 'linkType'>> & WithTestId;
/**
 * Gets the correct component to redirect based on its type 'internal' or 'external'.
 */
export declare const StyledNotificationLink: ({ dataTestId, linkPath, linkText, linkType, }: StyledNotificationLinkProps) => JSX.Element;
