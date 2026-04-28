import { ReactElement } from 'react';
import { FileItemProps } from './file-item';
type ActionButtonProps = FileItemProps & {
    isHovered?: boolean;
};
/** Renders an action button for a file item */
export declare const ActionButton: ({ "data-testid": dataTestId, onClickAction, status, isHovered, id, }: ActionButtonProps) => ReactElement;
export {};
