import { ModalProps } from './modal';
import { ModalOverrides } from 'baseui/modal';
type ModalOverridesParams = ModalProps & {
    canClose: boolean;
};
/** Generates custom overrides for a modal component. */
export declare const modalOverrides: ({ zIndex, canClose }: ModalOverridesParams) => ModalOverrides;
export {};
