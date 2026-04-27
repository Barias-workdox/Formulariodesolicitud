import { Button } from '@components/button/next';

import { useFooter } from '../footer.provider';

import type { ButtonProps } from '@components/button/next';

export type FooterButtonProps = Omit<ButtonProps, 'size'>;

/**
 * Footer Button Component
 */
export const FooterButton = (props: FooterButtonProps): JSX.Element => {
  const { isDisabled, fullWidthActions, size } = useFooter();
  const isButtonDisabled = props.disabled || isDisabled;
  const isFullWidth = size === 'small' ? fullWidthActions : false;

  return (
    <Button
      {...props}
      fullWidth={isFullWidth}
      disabled={isButtonDisabled}
      size="44px"
    />
  );
};
