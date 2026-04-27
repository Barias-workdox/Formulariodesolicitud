import { ChevronLeft } from '@carbon/icons-react';

import { IconButton } from '../icon-button';

import type { ButtonProps } from '@components/button/button.interfaces';

export type BackButtonProps = Pick<
  ButtonProps,
  'dataTestId' | 'onClick' | 'data-testid' | 'disabled' | 'isLoading'
>;

/** Styled icon button with a left arrow, used to indicate go back action */
export function BackButton({ dataTestId = 'back-button', ...props }: BackButtonProps): JSX.Element {
  return (
    <IconButton
      data-testid={dataTestId}
      kind="control"
      size="32px"
      type="button"
      {...props}
    >
      <ChevronLeft
        aria-label="Back"
        size={16}
      />
    </IconButton>
  );
}
