import { ButtonProps } from '../button/button.interfaces';
export type OAuthButtonProps = Omit<ButtonProps, 'kind' | 'paddingBottom' | 'paddingTop' | 'paddingLeft' | 'paddingRight'> & {
    variant: 'google' | 'microsoft';
};
/**
 * Custom styled button component to OAuth sign in
 *
 * Extends the Button component and accepts all button props except `kind`.
 */
export declare const OAuthButton: ({ "data-testid": dataTestId, variant, ...rest }: OAuthButtonProps) => JSX.Element;
