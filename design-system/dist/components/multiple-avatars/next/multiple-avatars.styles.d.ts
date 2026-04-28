export declare const MultipleAvatarsRoot: import('styletron-react').StyletronComponent<"div", {}>;
/**
 * BaseUI tooltips rely on a DOM element (or a ref-forwarding component) as the trigger.
 * Since `Tag` doesn't forward refs, we wrap it with this anchor element.
 */
export declare const MultipleAvatarsTooltipAnchor: import('styletron-react').StyletronComponent<"button", {
    $isClickable: boolean;
}>;
export declare const MultipleAvatarItemWrapper: import('styletron-react').StyletronComponent<"div", {
    $overlapPx: number;
    $zIndex: number;
    $isFirst: boolean;
}>;
