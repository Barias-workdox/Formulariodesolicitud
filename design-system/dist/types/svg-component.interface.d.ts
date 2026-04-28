import { default as React } from 'react';
/** Represents an SVG used as a component. */
export type SvgComponentProps = React.ComponentProps<'svg'> & {
    title?: string;
};
/** Represents an SVG used as a component. */
export type SvgComponentType = React.FunctionComponent<SvgComponentProps>;
