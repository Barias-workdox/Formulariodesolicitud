import { NotificationDirection, NotificationProps } from './notification';
import { BackgroundIconProps } from '../../background-icon/background-icon.interfaces';
import { DesignSystemTheme } from '../../../themes/theme.interfaces';
import { BlockOverrides } from 'baseui/block';
import { ToastOverrides } from 'baseui/toast';
type OverrideProps = Pick<NotificationProps, 'data-testid' | 'size' | 'kind'> & {
    theme: DesignSystemTheme;
};
export declare const iconVariants: Record<NotificationProps['kind'], BackgroundIconProps>;
/** Custom base overrides for the `Notification` component */
export declare const getNotificationBaseOverrides: ({ "data-testid": dataTestId, size, kind, theme, }: OverrideProps) => ToastOverrides;
export declare const StyledNotification: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledNotificationContent: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledNotificationActionContainer: import('styletron-react').StyletronComponent<"div", {
    $closeable: boolean;
}>;
export declare const StyledNotificationTexts: import('styletron-react').StyletronComponent<"div", {
    $direction: NotificationDirection;
}>;
/** Overrides for the title text in the `Notification` component. */
export declare const getTitleOverrides: (theme: DesignSystemTheme, kind: NotificationProps["kind"]) => BlockOverrides;
/** Overrides for the description text in the `Notification` component. */
export declare const getDescriptionOverrides: (theme: DesignSystemTheme, direction: NotificationDirection, hasTitle: boolean, kind: NotificationProps["kind"]) => BlockOverrides;
export {};
