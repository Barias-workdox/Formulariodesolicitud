import type { ReactElement } from 'react';

import { Checkbox, CheckboxCheckedFilled } from '@carbon/icons-react';

import { useCss } from '@components/utils/hooks/use-css';

type CheckmarkProps = {
  dataTestId?: string;
  checked: boolean;
  disabled?: boolean;
};

/**
 * Renders a Carbon checkbox icon based on the `checked` and `disabled` states.
 */
export const CheckboxCheckmark = ({
  dataTestId,
  checked,
  disabled,
}: CheckmarkProps): ReactElement => {
  const { theme } = useCss();

  const color = disabled
    ? theme.colors.neutralDepressed
    : checked
      ? theme.colors.brand
      : theme.colors.neutralSubdued;

  return checked ? (
    <CheckboxCheckedFilled
      data-testid={dataTestId}
      color={color}
    />
  ) : (
    <Checkbox
      data-testid={dataTestId}
      color={color}
    />
  );
};
