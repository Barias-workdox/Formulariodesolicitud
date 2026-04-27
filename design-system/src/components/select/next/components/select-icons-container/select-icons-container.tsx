import { useMemo } from 'react';

import { CompoundEndEnhancer } from '@components/input/next/components/compound-end-enhancer';

import { StyledIconsContainer } from '../../styled-components';
import { ArrowIcon } from '../arrow-icon';

import type { SelectKind } from '../../select.interfaces';
import type { Size } from '@components/input/next';
import type { CompoundStartEnhancerProps } from '@components/input/next/components/compound-start-enhancer';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';
import type { InputProps, SharedProps } from 'baseui/input';
import type { SharedStylePropsArg } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export type SelectIconsContainerProps = SharedProps &
  SharedStylePropsArg &
  WithZIndex &
  WithTestId<{
    size?: Size;
    kind: SelectKind;
    isHovered: boolean;
    isInputDirty: boolean;
    leading?: CompoundStartEnhancerProps['leading'];
    width?: StyleObject['width'];
    endEnhancer?: InputProps['endEnhancer'];
    onClear?(): void;
  }>;

/**
 * Component to be used to provide additional functionality such as clearing the selection
 * and indicating the open/closed state of the dropdown.
 */
export const SelectIconsContainer = ({
  'data-testid': dataTestId,
  isInputDirty,
  $clearable,
  $disabled,
  $isEmpty,
  $isLoading,
  $positive,
  $error,
  $isOpen,
  endEnhancer,
  ...rest
}: SelectIconsContainerProps): JSX.Element => {
  const canClear = useMemo(
    () => $clearable && !$disabled && (isInputDirty || !$isEmpty),
    [$clearable, $disabled, $isEmpty, isInputDirty],
  );

  return (
    <StyledIconsContainer>
      <CompoundEndEnhancer
        {...rest}
        data-testid={dataTestId}
        canClear={canClear}
        error={$error}
        isLoading={$isLoading}
        positive={$positive}
        endEnhancer={endEnhancer}
      />
      <ArrowIcon
        isOpen={$isOpen}
        color={$disabled ? 'neutralDepressed' : 'neutral'}
      />
    </StyledIconsContainer>
  );
};
