import { ReactElement } from 'react';
import { BackgroundIconProps } from '../../../background-icon';
export type TimelineIconProps = Omit<BackgroundIconProps, 'shape'>;
/** Component that render an icon that could be used as a indicator on a timeline step */
export declare const TimelineIcon: ({ "data-testid": dataTestId, ...rest }: TimelineIconProps) => ReactElement;
