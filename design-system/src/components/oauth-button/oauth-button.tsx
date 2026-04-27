import GoogleIcon from '../../assets/icons/google-icon.svg';
import MicrosoftIcon from '../../assets/icons/microsoft-icon.svg';
import { Button } from '../button';
import { SvgIcon } from '../svg-icon';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { oauthButtonStyledOverrides } from './oauth-button.styles';

import type { ButtonProps } from '@components/button/button.interfaces';

export type OAuthButtonProps = Omit<
  ButtonProps,
  'kind' | 'paddingBottom' | 'paddingTop' | 'paddingLeft' | 'paddingRight'
> & {
  variant: 'google' | 'microsoft';
};

type OAuthButtonOptionsType = {
  buttonText: string;
  icon: string;
};

/** Return all properties for each variant option  */
const allOauthButtonOptions: Record<OAuthButtonProps['variant'], OAuthButtonOptionsType> = {
  google: {
    buttonText: 'Google',
    icon: GoogleIcon,
  },
  microsoft: {
    buttonText: 'Microsoft',
    icon: MicrosoftIcon,
  },
};

/**
 * Custom styled button component to OAuth sign in
 *
 * Extends the Button component and accepts all button props except `kind`.
 */
export const OAuthButton = ({
  'data-testid': dataTestId = 'oauth-button',
  variant,
  ...rest
}: OAuthButtonProps): JSX.Element => {
  const { buttonText, icon } = allOauthButtonOptions[variant];
  const { theme } = useCss();

  return (
    <Button
      data-testid={dataTestId}
      startEnhancer={
        <SvgIcon
          svg={icon}
          width="21px"
          height="21px"
        />
      }
      overrides={oauthButtonStyledOverrides(dataTestId)}
      {...rest}
    >
      <Text
        variant="bodySmall"
        fontWeight="500"
        margin="0"
        color={theme.colors.neutralSubdued}
      >
        {buttonText}
      </Text>
    </Button>
  );
};
