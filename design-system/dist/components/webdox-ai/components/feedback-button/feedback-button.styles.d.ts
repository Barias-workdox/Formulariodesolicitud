import { FeedbackState } from './feedback-button.interfaces';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    buttonStyles: (theme: DesignSystemTheme, { state }: {
        state: FeedbackState;
    }) => StyleObject;
};
