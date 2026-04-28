import { ReactNode } from 'react';
import { BaseSizeType } from '../../button';
import { WithIsHoveredProps } from '../../hocs/with-is-hovered';
import { CommonHeight } from '../../../constants/common.constants';
import { CommonInputKind } from '../../../interfaces/common.interfaces';
import { InputProps as BaseInputProps, SharedProps as BaseSharedProps } from 'baseui/input';
import { StyleObject } from 'styletron-react';
export type InputKind = CommonInputKind;
export type LegacySize = Exclude<CommonHeight | BaseSizeType, '24px' | '36px' | '56px' | 'mini' | 'large'>;
export type Size = 'sm' | 'md';
export type EnhancerType = ReactNode | ((props: BaseSharedProps) => ReactNode);
export interface SharedProps extends Omit<BaseSharedProps, '$size'> {
    $size: Size;
    $kind: InputKind;
    $isHovered: boolean;
    $withStartEnhancer?: boolean;
    $width?: StyleObject['width'];
}
export type InputProps = WithIsHoveredProps & Omit<BaseInputProps, 'size'> & {
    'data-testid'?: string;
    kind?: InputKind;
    size?: Size;
    isLoading?: boolean;
    forceShowEndEnhancer?: boolean;
    showCopyContentButton?: boolean;
    leading?: EnhancerType;
    startEnhancer?: EnhancerType;
    endEnhancer?: EnhancerType;
    prefixText?: string;
    /** Indicates the width of the input. By default is 100% */
    width?: StyleObject['width'];
    onClear?(): void;
};
