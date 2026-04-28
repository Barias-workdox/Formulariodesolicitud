import { ButtonOverrides } from 'baseui/button';
export declare const StyledContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledInner: import('styletron-react').StyletronComponent<"div", {}>;
/** Custom overrides */
export declare const buttonOverrides: ({ isActive, isOrButton, }: {
    isActive: boolean;
    isOrButton?: boolean;
}) => ButtonOverrides;
