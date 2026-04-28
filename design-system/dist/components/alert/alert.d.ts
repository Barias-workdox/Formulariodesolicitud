import { PropsWithChildren } from 'react';
import { StyleObject } from 'styletron-react';
export type AlertKind = 'error' | 'info' | 'infoLight' | 'success' | 'warning';
export interface AlertOverrides {
    Root?: StyleObject;
}
export type AlertProps = PropsWithChildren<{
    kind: AlertKind;
    /** An Icon to put on the left side */
    icon?: React.ReactNode;
    overrides?: AlertOverrides;
}>;
/**
 * A Styled Alert component. It will render in different colors based on its kind,
 * with an icon and children
 *
 * @deprecated - use `Notification` in newer development
 */
export declare const Alert: ({ icon, kind, children, overrides }: AlertProps) => JSX.Element;
