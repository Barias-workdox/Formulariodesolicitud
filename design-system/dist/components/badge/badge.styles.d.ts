import { PLACEMENT, SHAPE } from './badge';
import { DesignSystemTheme } from '../../themes';
import { StyleObject } from 'styletron-react';
/** Get the badge placement by placement prop */
export declare function getPlacementStyles(placement: PLACEMENT): StyleObject;
/** Get the badge shape by shape prop */
export declare function getShapeStyles(shape: SHAPE): StyleObject;
export declare const styles: {
    containerStyles: (theme: DesignSystemTheme, { overrides }: {
        overrides: any;
    }) => StyleObject;
    contentStyles: (theme: DesignSystemTheme, { backgroundColor, color, placement, shape, hidden, overrides }: {
        backgroundColor: any;
        color: any;
        placement: any;
        shape: any;
        hidden: any;
        overrides: any;
    }) => StyleObject;
};
