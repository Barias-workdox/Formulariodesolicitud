import { ReactNode } from 'react';
type GroupLayoutProps = {
    header: {
        title: string;
        subtitle?: string;
        action?: ReactNode;
    };
    children: ReactNode;
};
/**
 * Component that serves as a container component that provides a structured layout with a header and body.
 * The header includes a title, an optional subtitle, and an optional action component.
 * The body section holds the main content passed as children.
 */
export declare const GroupLayout: ({ header: { title, subtitle, action }, children, }: GroupLayoutProps) => JSX.Element;
export {};
