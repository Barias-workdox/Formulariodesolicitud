import type { CommonHeight } from '@constants/common.constants';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { ButtonProps as BaseButtonProps, KIND, SIZE } from 'baseui/button';

export type BaseKindType = keyof typeof KIND;

export type BaseSizeType = keyof typeof SIZE;

export type KindType =
  | BaseKindType
  | 'positive'
  | 'dark-positive'
  | 'negative'
  | 'dark-negative'
  | 'warning'
  | 'control'
  | 'selection'
  | 'link-secondary'
  | 'link-secondary-brain'
  | 'link-tertiary'
  | 'ghost-secondary'
  | 'ghost-tertiary'
  | 'primary-brain'
  | 'primary-whisper'
  | 'secondary-brain'
  | 'tertiary-brain'
  | 'tertiary-whisper'
  | 'quaternary-brain'
  | 'quaternary-whisper'
  | 'quaternary'
  | 'action-brain';

export type SizeType = CommonHeight | Exclude<BaseSizeType, 'large'> | 'auto';

export type ButtonProps = Omit<BaseButtonProps, 'kind' | 'size'> &
  WithTestId<{
    kind?: KindType;
    size?: SizeType;
    fullWidth?: boolean;
    paddingLeft?: string | 0;
    paddingRight?: string | 0;
    responsive?: boolean;
    // baseui v16 narrowed ButtonProps to a custom interface that no longer extends
    // React.ButtonHTMLAttributes, dropping mouse event handlers that were previously
    // inherited. These four are explicitly restored because the BaseUI Button class
    // intercepts them internally (handleHovered, handleNotHovered, handlePressed,
    // handleNotPressed) and forwards each to this.props, so they must be passable
    // as direct props for consumers who need them.
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;
  }>;
