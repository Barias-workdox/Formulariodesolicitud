import type { ButtonProps } from '@components/button/button.interfaces';

export type IconButtonProps = Omit<ButtonProps, 'paddingLeft' | 'paddingRight'>;
