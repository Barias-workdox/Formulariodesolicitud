import { DesignSystemTheme } from '../../../../../themes';
import { StyleObject } from 'styletron-react';
type StyleOptions = {
    $isScrollable: boolean;
    $rowHeight: string;
};
export declare const actionsColumnsStyles: {
    containerStyles: (theme: DesignSystemTheme, { $isScrollable, $rowHeight }: StyleOptions) => StyleObject;
};
export {};
