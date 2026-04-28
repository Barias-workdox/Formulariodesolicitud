import { BackgroundIconProps } from '../../../../../../background-icon/background-icon.interfaces';
export type PanelBackgroundIconProps = Exclude<BackgroundIconProps, 'size'>;
/**
 * A React component that renders a background icon with a size based on the current collapsible box context.
 */
export declare const PanelBackgroundIcon: (props: PanelBackgroundIconProps) => JSX.Element;
