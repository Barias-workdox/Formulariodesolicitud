import { InputOverrides } from 'baseui/input';
export type OverridesParams = {
    rootRef?: React.Ref<HTMLDivElement>;
};
/**
 * InlineEditInput overrides for the baseui Input component.
 */
export declare const getOverrides: ({ rootRef }: OverridesParams) => InputOverrides;
