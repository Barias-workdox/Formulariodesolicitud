import { ReactNode } from 'react';
import { StatefulTooltipProps as BaseStatefulTooltipProps } from 'baseui/tooltip';
import { StyleObject } from 'styletron-react';
export type StatefulTooltipProps = Omit<BaseStatefulTooltipProps, 'content' | 'children'> & {
    /** If type `string`, will render the content with the component override styles */
    content?: BaseStatefulTooltipProps['content'] | 'string';
    /**
     * Used to override only the styles of the simple tooltip content. Will only applies if
     * `override` property is undefined
     */
    tooltipOverrideStyles?: StyleObject;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    /** If undefined, will not render the tooltip */
    children?: ReactNode;
};
/**
 * Stateful tooltip that have a basic DS styles for most cases, but also
 * allows the user to create complex components.
 *
 * @deprecated For a more modern approach with better support for custom styling and functionality,
 * consider using the StatefulTooltipNext component located in the file `src/components/tooltip-next/stateful-tooltip-next/stateful-tooltip-next.tsx`.
 */
export declare const StatefulTooltip: ({ content, children, tooltipOverrideStyles, overrides: rawOverrides, zIndex, ...rest }: StatefulTooltipProps) => JSX.Element;
