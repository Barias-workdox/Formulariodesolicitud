import { ComposerTextareaContainerProps } from './composer-textarea-container.interfaces';
import { MessageComposerProps } from '../../message-composer.interfaces';
import { DesignSystemTheme } from '../../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
type StyleOptions = Pick<MessageComposerProps, 'isEditing'> & Pick<ComposerTextareaContainerProps, '$minHeight' | '$maxHeight' | 'isDisabled'>;
export declare const styles: {
    containerStyles: (theme: DesignSystemTheme) => StyleObject;
    composerWrapperStyles: (theme: DesignSystemTheme, { isEditing, $minHeight, $maxHeight }: StyleOptions) => StyleObject;
};
export declare const stylesOverrides: {
    Container: {
        style: ({ $theme }: {
            $theme: any;
        }) => StyleObject;
    };
    ComposerWrapper: {
        style: ({ $theme, ...rest }: {
            [x: string]: any;
            $theme: any;
        }) => StyleObject;
    };
};
export {};
