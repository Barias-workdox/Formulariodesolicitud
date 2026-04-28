import { CommonHeight } from '../../constants/common.constants';
import { WithTestId } from '../../interfaces/common.interfaces';
import { ButtonProps as BaseButtonProps, KIND, SIZE } from 'baseui/button';
export type BaseKindType = keyof typeof KIND;
export type BaseSizeType = keyof typeof SIZE;
export type KindType = BaseKindType | 'positive' | 'dark-positive' | 'negative' | 'dark-negative' | 'warning' | 'control' | 'selection' | 'link-secondary' | 'link-secondary-brain' | 'link-tertiary' | 'ghost-secondary' | 'ghost-tertiary' | 'primary-brain' | 'primary-whisper' | 'secondary-brain' | 'tertiary-brain' | 'tertiary-whisper' | 'quaternary-brain' | 'quaternary-whisper' | 'quaternary' | 'action-brain';
export type SizeType = CommonHeight | Exclude<BaseSizeType, 'large'> | 'auto';
export type ButtonProps = Omit<BaseButtonProps, 'kind' | 'size'> & WithTestId<{
    kind?: KindType;
    size?: SizeType;
    fullWidth?: boolean;
    paddingLeft?: string | 0;
    paddingRight?: string | 0;
    responsive?: boolean;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
}>;
