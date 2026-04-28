import { CopyToClipboardButtonState } from './copy-to-clipboard-button';
import { KindType } from '../../../button';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    buttonStyles: (theme: DesignSystemTheme, { state }: {
        state: CopyToClipboardButtonState;
        kind?: KindType;
    }) => StyleObject;
};
