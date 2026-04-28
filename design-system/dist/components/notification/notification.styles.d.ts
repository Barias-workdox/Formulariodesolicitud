import { DesignSystemTheme } from '../../themes';
import { KindType } from '../notification';
import { KindStyleType } from './notification';
import { StyleObject } from 'styletron-react';
type BaseWebNotificationBodyCustomProps = {
    kindStyle?: KindStyleType;
    marginBottom?: StyleObject['marginBottom'];
    marginLeft?: StyleObject['marginLeft'];
    marginRight?: StyleObject['marginRight'];
    marginTop?: StyleObject['marginTop'];
    width?: StyleObject['width'];
};
/**
 * Get the notification styles by its kind
 */
export declare const kindStyles: (theme: DesignSystemTheme, kind: KindType) => KindStyleType;
/** Style overrides for the BaseWebNotification InnerContainer prop */
export declare const InnerContainerStyles: () => StyleObject;
/**
 * Style overrides for the BaseWebNotification Body prop.
 */
export declare const notificationOverrideStyles: (theme: DesignSystemTheme, { marginTop, marginBottom, marginLeft, marginRight, width, kindStyle, }: BaseWebNotificationBodyCustomProps) => StyleObject;
/**
 * Styles BaseWebNotification child component
 */
export declare const notificationStyles: {
    notificationWrapper: () => StyleObject;
    textWrapper: (theme: DesignSystemTheme) => StyleObject;
    titleStyles: (theme: DesignSystemTheme) => StyleObject;
    verticalCenter: () => StyleObject;
    endEnhancerWrapper: (theme: DesignSystemTheme) => StyleObject;
};
export {};
