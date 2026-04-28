import { PropsWithChildren } from 'react';
import { ResizableContainerProps } from './components/resizable-container';
export interface DynamicDialogProps extends PropsWithChildren<ResizableContainerProps> {
    isOpen?: boolean;
}
/**
 * A component that renders a page header.
 */
export declare const DynamicDialog: ({ children, isOpen, ...rest }: DynamicDialogProps) => JSX.Element;
