export type CardStyledProps = {
    $disabled?: boolean;
};
export declare const StyledCardWrapper: import('styletron-react').StyletronComponent<"div", {
    $disabled: boolean;
}>;
export declare const StyledCardHeaderWrapper: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledCardFooterWrapper: import('styletron-react').StyletronComponent<"div", {}>;
export declare const StyledTruncatedText: import('styletron-react').StyletronComponent<({ tooltipProps: { content, ...restTooltip }, textProps: { $style, ...restText }, maxLines, zIndex, children, className, }: import('../truncated-text').TruncatedTextProps) => JSX.Element, {}>;
