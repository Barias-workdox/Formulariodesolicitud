import { ReactElement } from 'react';
import { FileType } from '../../file-icon';
import { SelectOption } from '../../select';
export interface Option extends SelectOption {
    id: string | number;
    fileExt?: FileType;
}
export interface ActivityTabContainerProps {
    'data-testid': string;
    onClose(): void;
}
/**
 * Container of the activity tab.
 *
 * It manages the state of the selected document and ensures that changes in document selection
 * are reflected in the ActivityTab.
 */
export declare const ActivityTabContainer: ({ "data-testid": dataTestId, onClose, }: ActivityTabContainerProps) => ReactElement;
