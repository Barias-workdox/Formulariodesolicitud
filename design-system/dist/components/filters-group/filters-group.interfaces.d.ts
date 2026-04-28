import { FilterProps } from '../filter/filter.interfaces';
export type FilterConfig = Pick<FilterProps, 'label' | 'startEnhancer'> & {
    id: string;
    /** When true, the filter will be focused and brought into view when shown. Defaults to false if not provided. */
    focusOnShow?: boolean;
};
