import { KindType, ToasterKindParams, ToasterType } from './toast.interface';
import { ToasterContainerContextType } from './toaster-container-context/toaster-container-context.interface';
/**
 * Generates the toast to show with all props. Also, receives the updateToasterContainer function
 * to set new props or default ones to Toaster context on update every toaster call on each component
 */
export declare const createToasterKind: (kind: KindType, updateToasterContainer: ToasterContainerContextType["updateToasterContainerProps"], toastManager: {
    canShowToast(): Promise<boolean>;
    addToastToQueue(key: React.Key): void;
    removeToastFromQueue(key: React.Key): void;
}) => ({ placement, zIndex, marginX, marginY, width, duration, ...rest }: ToasterKindParams) => Promise<React.Key | null>;
/**
 * Call toaster function with an updater function to Toaster context, to set new props or default
 * ones on each toaster call
 */
export declare const toaster: (updateToasterContainer: ToasterContainerContextType["updateToasterContainerProps"], toastManager: {
    canShowToast(): Promise<boolean>;
    addToastToQueue(key: React.Key): void;
    removeToastFromQueue(key: React.Key): void;
}) => ToasterType;
export type ToasterProps = ReturnType<typeof toaster>;
/**
 * All updates to toaster props, like placement or zIndex will trigger on Toaster
 * context and render the component with the desired props.
 *
 * The toaster automatically manages the queue and will limit to a maximum of 3 toasts
 * displayed simultaneously. When a 4th toast is added, the oldest one will be dismissed.
 */
export declare function useToaster(toasterContext: React.Context<ToasterContainerContextType>): ToasterProps;
