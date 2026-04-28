import { ReactElement } from 'react';
import { BackgroundIconProps } from '../../../../background-icon/background-icon.interfaces';
export type HeaderTabProps = {
    'data-testid': string;
    title: string;
    startEnhancerProps?: BackgroundIconProps;
    onClose(): void;
};
/** Reusable component that renders a heading for a tab container */
export declare const HeaderTab: ({ "data-testid": dataTestId, title, startEnhancerProps, onClose, }: HeaderTabProps) => ReactElement;
