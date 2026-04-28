import { DesignSystemTheme } from '../../themes';
import { ModalOverrides } from 'baseui/modal';
import { StyleObject } from 'styletron-react';
/** Overrides styles for the Modal component */
export declare const modalStyledOverrides: () => ModalOverrides;
export declare const documentViewerModalStyles: {
    modalHeaderStyles: (theme: DesignSystemTheme) => StyleObject;
    documentNameWrapper: StyleObject;
    documentNameStyles: (theme: DesignSystemTheme) => StyleObject;
    modalBodyStyles: (theme: DesignSystemTheme) => StyleObject;
};
