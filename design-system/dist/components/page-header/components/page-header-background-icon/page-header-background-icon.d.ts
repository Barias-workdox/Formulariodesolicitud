import { ReactElement } from 'react';
import { BackgroundIconProps } from '../../../background-icon/background-icon.interfaces';
export type PageHeaderBackgroundIconProps = Pick<BackgroundIconProps, 'Icon' | 'backgroundColor' | 'iconColor'>;
/**
 * A component to render a responsive background icon for the header.
 */
export declare const PageHeaderBackgroundIcon: (props: PageHeaderBackgroundIconProps) => ReactElement;
