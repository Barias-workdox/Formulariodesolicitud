import { TagProps } from '../../../tag/next/tag.interfaces';
export type AITagProps = Omit<TagProps, 'kind' | 'icon'>;
/**
 * Component that renders a tag with an AI icon.
 */
export declare const AITag: ({ children, ...rest }: AITagProps) => JSX.Element;
