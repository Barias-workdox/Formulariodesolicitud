import { InputKind } from '../input/input';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
import { SelectProps as BaseSelectProps, Option, Options, Value } from 'baseui/select';
/** @deprecated for a borderless kind, use the `isBorderless` property instead */
type BorderlessKind = 'borderless';
export type SelectKind = InputKind | BorderlessKind;
export interface SelectProps extends Omit<BaseSelectProps, 'value'> {
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    className?: string;
    kind?: SelectKind;
    name?: string;
    value?: Value | Option;
    'data-testid'?: string;
    isBorderless?: boolean;
    onChange(value: Option): void;
    /** Callback invoked after onChange for new options when creatable prop is provided */
    onCreate?(value: Option): void;
}
export interface ArrowIconProps {
    isOpen: boolean;
    isBorderless?: boolean;
    color?: DesignSystemColorType;
}
export interface GetOverridesParams {
    kind: SelectKind;
    /**
     * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
     *
     * @deprecated Only required for legacy support with `DocumentViewerModal`
     */
    zIndex?: number;
    dataTestId?: string;
    name?: string;
    isOpen?: boolean;
    /** @deprecated Use kind="borderless" instead */
    isBorderless?: boolean;
    options?: Options;
}
export {};
