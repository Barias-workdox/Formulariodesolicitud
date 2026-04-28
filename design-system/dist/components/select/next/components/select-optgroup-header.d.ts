import { ForwardedRef, ReactNode } from 'react';
export type SelectOptgroupHeaderProps = {
    innerRef?: ForwardedRef<HTMLLIElement>;
    count: number;
    label: ReactNode;
};
/** Styled divider used as label for grouping elements in a select component*/
export declare const SelectOptgroupHeader: ({ innerRef, count, label, ...rest }: SelectOptgroupHeaderProps) => JSX.Element;
