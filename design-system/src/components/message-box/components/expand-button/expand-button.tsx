import { ReactComponent as ExpandIcon } from '@assets/icons/expand.svg';

import { StyledButton } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

export interface ExpandButtonProps extends WithTestId {
  isExpanded: boolean;
  onClick(): void;
}

/**
 * This component renders a button with an expand icon.
 * The icon rotates based on the `isExpanded` prop.
 */
export const ExpandButton = ({
  'data-testid': dataTestId,
  isExpanded,
  onClick,
}: ExpandButtonProps): JSX.Element => {
  return (
    <StyledButton
      data-testid={dataTestId}
      $rotate={isExpanded}
      onClick={onClick}
    >
      <ExpandIcon />
    </StyledButton>
  );
};
