import { PropsWithChildren } from 'react';
export type SelectOptgroupHeaderProps = PropsWithChildren<{
    count: number;
    isBorderless: boolean;
}>;
/** Styled divider used as label for grouping elements in a select component*/
export declare const SelectOptgroupHeader: ({ children, count, isBorderless, ...rest }: SelectOptgroupHeaderProps) => JSX.Element;
