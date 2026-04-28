import { Context, PropsWithChildren, ReactElement } from 'react';
import { ToasterContainerContextType } from './toaster-container-context.interface';
/**
 * Required to change dynamically the required props of the Global Toaster Container
 */
export declare const getToasterContainerContext: () => Context<ToasterContainerContextType | null>;
/** Creates the context for the toaster container. It should belong to the consumer app */
export declare const ToasterContainerProvider: ({ children, toasterContext, }: PropsWithChildren<{
    toasterContext: Context<ToasterContainerContextType>;
}>) => ReactElement;
