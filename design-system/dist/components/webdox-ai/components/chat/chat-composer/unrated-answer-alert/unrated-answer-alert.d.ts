import { ReactElement } from 'react';
import { WithTestId } from '../../../../../../interfaces/common.interfaces';
export type UnratedAnswerAlertProps = WithTestId & {
    onClick?(): void;
};
/**
 * Component that display a disclaimer when an answer is not rated.
 */
export declare const UnratedAnswerAlert: ({ dataTestId, onClick, }: UnratedAnswerAlertProps) => ReactElement;
