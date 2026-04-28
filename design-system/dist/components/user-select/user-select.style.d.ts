import { UserSelectOverridesProps } from './user-select.interface';
import { SelectOverrides } from 'baseui/select';
export declare const ThemedCreatableOption: import('styletron-react').StyletronComponent<"div", {}>;
export declare const ThemedCreatableIconOption: import('styletron-react').StyletronComponent<"span", {}>;
/** UserSelect overrides */
export declare const getUserSelectOverrides: ({ theme, placeholder, dataTestId, }: UserSelectOverridesProps) => SelectOverrides;
