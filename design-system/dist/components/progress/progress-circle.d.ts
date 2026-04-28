import * as React from 'react';
interface IProgressCircle {
    stroke?: string;
    fill?: string;
    progressStroke?: string;
    progress?: number;
    shadowed?: boolean;
    completedColor?: string;
}
/** Styled ProgressCircle component */
export declare function ProgressCircle({ stroke, fill, progressStroke, progress, shadowed, completedColor, }: IProgressCircle): React.ReactElement;
export {};
