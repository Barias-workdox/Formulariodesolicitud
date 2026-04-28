import { StyleObject } from 'styletron-react';
interface StyledComponentProps {
    $isLoading: boolean;
    $hasError?: boolean;
}
export declare const styles: {
    iconStyles: (_: any, { $isLoading }: StyledComponentProps) => StyleObject;
};
export declare const StyledButton: import('styletron-react').StyletronComponent<"button", StyledComponentProps>;
export {};
