import { EntitiesMultiSelectProps } from './entities-multiselect.types';
/**
 * This component behaves like a multi-select dropdown specifically for entities (people and companies),
 * displaying the selected entities as tags inside the main input area.
 *
 * The popover contains searchable lists of people and companies. Selected entities are displayed
 * at the top of their respective lists, followed by the unselected entities.
 *
 * The lists support infinite scrolling via the `onLoadMore` callback, allowing for dynamic
 * fetching of additional options.
 *
 * Users can remove selected entities directly by clicking the tags, and all changes propagate
 * through the `onChange` callback.
 *
 * Unlike a standard Select component, this component cannot be extended from Select due to its
 * highly customized behavior and rendering logic.
 */
export declare const EntitiesMultiSelect: ({ dataTestId, name, options, values, placeholder, searchPlaceholder, isLoading, disabled, peopleTotalElements, companyTotalElements, containerRef, error, onChange, onSearch, onLoadMore, zIndex, leading, }: EntitiesMultiSelectProps) => JSX.Element;
