import { DesignSystemTheme } from '../../../../themes';
import { StyleObject } from 'styletron-react';
type StyleOptions = {
    documentUploaded?: boolean;
};
export declare const subtasksStyles: {
    wrapperStyles: (theme: DesignSystemTheme, { documentUploaded }: StyleOptions) => StyleObject;
    documentTitle: (theme: DesignSystemTheme, { documentUploaded }: StyleOptions) => StyleObject;
    titleWrapper: (theme: DesignSystemTheme) => StyleObject;
};
export {};
