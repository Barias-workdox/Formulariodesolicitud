import { PropsWithChildren } from 'react';
import { AnswerReference } from '../../../../../../../interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../../interfaces/common.interfaces';
export type AnswerReferencesProps = PropsWithChildren<WithZIndex<WithTestId<{
    disabled?: boolean;
    selectedReference?: AnswerReference;
    updateSelectedAnswerReference?(range: AnswerReference): void;
}>>>;
/**
 * AnswerReferences component displays a list of references
 * within a tooltip. It allows users to select a specific reference of text
 * and update the selected answer reference.
 */
export declare const AnswerReferences: ({ dataTestId, children, disabled, selectedReference, updateSelectedAnswerReference, zIndex, }: AnswerReferencesProps) => JSX.Element;
