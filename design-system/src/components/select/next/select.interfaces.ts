import type { WithIsHoveredProps } from '../../hocs/with-is-hovered';
import type { EnhancerType, InputKind, Size } from '../../input/next/input.interfaces';
import type { WithZIndex } from '@interfaces/common.interfaces';
import type {
  Option as BaseOption,
  SelectProps as BaseSelectProps,
  Options,
  Value,
} from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export type SelectKind = InputKind;

export type SelectValue = Value;

export type SelectOption = BaseOption;

export interface CommonOption<T extends string | number | undefined = string> extends SelectOption {
  id: T;
}

export type SelectProps = WithZIndex &
  WithIsHoveredProps &
  Omit<BaseSelectProps, 'value' | 'size' | 'onChange' | 'onCreate' | 'options'> & {
    'data-testid'?: string;
    /** Indicates the width of the select. By default is 100% */
    className?: string;
    kind?: SelectKind;
    leading?: EnhancerType;
    options: Options;
    size?: Size;
    value?: Value;
    width?: StyleObject['width'];
    name?: string;
    onChange(value: Value): void;
    /** Callback invoked after onChange for new options when creatable prop is provided */
    onCreate?(value: Value): void;
  };

export interface GetOverridesParams extends WithZIndex {
  dataTestId?: string;
  isHovered: boolean;
  isInputDirty?: boolean;
  kind: SelectKind;
  leading?: EnhancerType;
  options: Options;
  size: Size;
  width?: StyleObject['width'];
  name?: string;
  onClear?(): void;
}
