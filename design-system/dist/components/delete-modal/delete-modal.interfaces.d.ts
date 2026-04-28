import { ReactNode } from 'react';
import { WithZIndex } from '../../interfaces/common.interfaces';
export type DeleteModalStatus = 'confirm' | 'starting' | 'in_progress';
export type DeleteModalVariant = 'simple' | 'stepped';
export interface DeleteModalControllerProps extends WithZIndex {
    'data-testid'?: string;
    /** Text shown in first step above disclaimer*/
    confirmText?: ReactNode;
    /** Custom text shown as a disclaimer message */
    disclaimerText?: ReactNode;
    /** Text shown during countdown  */
    startingText?: ReactNode;
    isOpen?: boolean;
    isLoading?: boolean;
    /** Number of elements to add plurals in confirm button */
    deleteItemsCount?: number;
    /** Modal variant, if you want it simple or in steps */
    variant?: DeleteModalVariant;
    /** Action performed after the countdown was not cancelled by the user */
    onConfirm(): void;
    onClose(step: DeleteModalStatus): void;
}
export interface DeleteModalProps extends DeleteModalControllerProps, WithZIndex {
    status: DeleteModalStatus;
    onTimeout(): void;
}
export type ConfirmDeleteModalStepProps = Pick<DeleteModalControllerProps, 'data-testid' | 'confirmText' | 'disclaimerText' | 'onConfirm' | 'onClose' | 'deleteItemsCount' | 'isLoading'>;
export type InProgressDeleteModalStepProps = Pick<DeleteModalControllerProps, 'isLoading'>;
export type StartingDeleteModalStepProps = Pick<DeleteModalControllerProps, 'startingText' | 'onClose' | 'data-testid'> & {
    onTimeout(): void;
};
export interface DeleteModalCountdownProps {
    onComplete(): void;
}
