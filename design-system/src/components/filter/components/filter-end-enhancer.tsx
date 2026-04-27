import type { ReactElement } from 'react';

import { ChevronDown, Close } from '@carbon/icons-react';

import { themedStyled } from '@themes/utilities';

import type { FilterProps } from '../filter.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

const ClearButtonContainer = themedStyled<'span', { $disabled: boolean }>(
  'span',
  ({ $disabled }) => ({
    height: '100%',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    padding: 0,
    color: 'inherit',
    display: 'flex',
    cursor: 'pointer',
    ...($disabled && {
      cursor: 'not-allowed',
    }),
  }),
);

export type FilterEndEnhancerProps = WithTestId<
  Pick<FilterProps, 'disabled' | 'onClear'> & {
    isActive: boolean;
  }
>;

/**
 * Renders a clear button or a chevron down icon based on the `isActive` prop.
 * When active, clicking the clear button triggers the `onClear` callback.
 */
export const FilterEndEnhancer = ({
  'data-testid': testId,
  isActive,
  disabled,
  onClear,
}: FilterEndEnhancerProps): ReactElement => {
  /**
   * Handles the click event on the clear button.
   */
  const handleClear = (e): void => {
    e.stopPropagation();

    onClear();
  };

  return isActive ? (
    <ClearButtonContainer
      data-testid={`${testId}-clear`}
      $disabled={disabled}
      role="button"
      onClick={!disabled ? (e): void => handleClear(e) : undefined}
    >
      <Close />
    </ClearButtonContainer>
  ) : (
    <ChevronDown data-testid={`${testId}-chevron`} />
  );
};
