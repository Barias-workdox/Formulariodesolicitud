import { SelectKind } from '../../select.interfaces';
import { Size } from '../../../../input/next';
import { CompoundStartEnhancerProps } from '../../../../input/next/components/compound-start-enhancer';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
import { InputProps, SharedProps } from 'baseui/input';
import { SharedStylePropsArg } from 'baseui/select';
import { StyleObject } from 'styletron-react';
export type SelectIconsContainerProps = SharedProps & SharedStylePropsArg & WithZIndex & WithTestId<{
    size?: Size;
    kind: SelectKind;
    isHovered: boolean;
    isInputDirty: boolean;
    leading?: CompoundStartEnhancerProps['leading'];
    width?: StyleObject['width'];
    endEnhancer?: InputProps['endEnhancer'];
    onClear?(): void;
}>;
/**
 * Component to be used to provide additional functionality such as clearing the selection
 * and indicating the open/closed state of the dropdown.
 */
export declare const SelectIconsContainer: ({ "data-testid": dataTestId, isInputDirty, $clearable, $disabled, $isEmpty, $isLoading, $positive, $error, $isOpen, endEnhancer, ...rest }: SelectIconsContainerProps) => JSX.Element;
