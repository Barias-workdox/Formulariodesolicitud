import { PropsWithChildren } from 'react';
import { CompoundStartEnhancerProps } from '../../../../input/next/components/compound-start-enhancer';
import { SelectKind } from '../../select.interfaces';
import { Size } from '../../../../input/next';
import { WithTestId, WithZIndex } from '../../../../../interfaces/common.interfaces';
import { SharedProps } from 'baseui/input';
import { SharedStylePropsArg } from 'baseui/select';
import { StyleObject } from 'styletron-react';
export type SelectControlContainerProps = SharedProps & Pick<SharedStylePropsArg, '$type'> & WithZIndex & WithTestId<PropsWithChildren<{
    size?: Size;
    kind: SelectKind;
    isHovered: boolean;
    leading?: CompoundStartEnhancerProps['leading'];
    width?: StyleObject['width'];
}>>;
/**
 * Component to be used to provide a container for the select control, including leading icons and styles.
 */
export declare const SelectControlContainer: ({ "data-testid": dataTestId, children, leading, size, kind, $type, isHovered, ...rest }: SelectControlContainerProps) => JSX.Element;
