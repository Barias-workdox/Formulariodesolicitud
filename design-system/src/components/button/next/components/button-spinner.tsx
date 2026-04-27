import { Spinner } from '@components/spinner/next';
import { useCss } from '@components/utils/hooks/use-css';

import { getButtonStyles } from '../button.utils';

import type { ButtonProps } from '../button.interfaces';

type ButtonSpinnerProps = Required<Pick<ButtonProps, 'disabled' | 'kind' | 'appearance'>>;

/**
 * Spinner component for the button.
 */
export const ButtonSpinner = ({ disabled, kind, appearance }: ButtonSpinnerProps): JSX.Element => {
  const { theme } = useCss();

  const {
    spinner: { kind: spinnerKind },
  } = getButtonStyles(theme, kind, appearance);

  return (
    <Spinner
      size="small"
      kind={disabled ? 'brand' : spinnerKind}
    />
  );
};
