import { FileType } from '../file-type-icon';
import { SupportedKind, SupportedVariant } from '../tag';
import { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import { KindType } from '../button';
import { StatefulTooltipNextProps } from '../tooltip-next';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
/**
 * Specifies the document type for the `FeedFile` component.
 * Combines the properties of a partial `File` object with additional custom properties.
 */
export type FeedFileType = Partial<File> & {
    id?: number;
    /** File extension used to display file type icons */
    fileExt?: FileType;
};
/**
 * Props for `FeedFileInfoTag` component.
 * Tag used to show additional information, like errors or warnings,
 * about the file that is shown on `FeedFile`.
 */
export interface FeedFileInfoTagProps {
    'data-testid'?: string;
    /** Tag title prop */
    title?: string;
    /** Supported Tag kinds to change component styles */
    kind?: SupportedKind;
    /** Supported Tag variants to change component styles */
    variant?: SupportedVariant;
    /** Tooltip content that shows user more information */
    content?: StatefulTooltipNextProps['content'];
    /** Tag icon (by default component uses `InformationFilled`) */
    icon?: CarbonIconType;
}
export interface FeedFileProps {
    'data-testid'?: string;
    /** Document element to be shown on FeedFile */
    document: FeedFileType;
    /**
     * Info message that will be displayed to the user
     * when an error occurs while uploading the file
     */
    tagProps?: FeedFileInfoTagProps;
    /** Can change optionally the background color of `FeedFile` */
    backgroundColor?: DesignSystemColorType;
    /** Show the path of the file before the name*/
    showPath?: boolean;
}
export type FeedFileActionType = 'download' | 'delete' | 'view';
export interface FeedFileActionProps {
    'data-testid'?: string;
    /** Used to add extra styles to icon button */
    buttonKind?: KindType;
    /** Enable/disable `FeedFileAction` button */
    disabled?: boolean;
    /**
     * Customize the appearance and behavior of the tooltip.
     */
    action: FeedFileActionType;
    /** Trigger the action on "onClick" event */
    onClick(): void;
}
