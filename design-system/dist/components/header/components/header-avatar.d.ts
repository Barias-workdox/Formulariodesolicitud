import { AvatarProps } from '../../avatar/next';
export type HeaderAvatarProps = Omit<AvatarProps, 'size' | 'data-testid' | 'dataTestId'>;
/**
 * Header background icon component.
 */
declare const HeaderAvatar: (props: HeaderAvatarProps) => JSX.Element;
export { HeaderAvatar };
