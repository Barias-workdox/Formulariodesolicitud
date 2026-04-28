import { StyleOverrideProps } from '../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const commonStyles: StyleObject;
/**
 * Returns the styles for the table container.
 */
export declare const getTableContainerStyles: ({ $theme }: StyleOverrideProps) => StyleObject;
export declare const StyledTableContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledColumnsContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledWrapper: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledEmptyMessageWrapper: import('styletron-react').StyletronComponent<"div", {}>;
