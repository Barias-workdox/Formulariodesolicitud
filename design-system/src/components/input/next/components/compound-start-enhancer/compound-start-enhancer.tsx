import { useMemo } from 'react';

import { isNil } from 'lodash';

import { resolveEnhancer } from '../../utils/resolve-enhancer.util';

import {
  StyledContainer,
  StyledLeading,
  StyledPrefixText,
  StyledRightColumn,
} from './styled-components';

import type { InputProps, Size } from '../../input.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { SharedProps } from 'baseui/input';

export type CompoundStartEnhancerProps = WithTestId &
  SharedProps & {
    prefixText?: string;
    size: Size;
    startEnhancer?: InputProps['startEnhancer'];
    leading?: InputProps['leading'];
  };

/**
 * Compound Start Enhancer Component.
 *
 * The `CompoundStartEnhancer` is a wrapper component that allows for the inclusion of
 * additional elements (such as icons or text) before the main input element.
 */
export const CompoundStartEnhancer = ({
  'data-testid': dataTestId,
  leading,
  prefixText,
  size,
  startEnhancer,
  ...rest
}: CompoundStartEnhancerProps): JSX.Element => {
  const { $disabled, $isReadOnly } = rest;

  const startEnhancerElement = useMemo(
    () => resolveEnhancer(startEnhancer, rest),
    [startEnhancer, rest],
  );

  const leadingElement = useMemo(() => resolveEnhancer(leading, rest), [leading, rest]);

  return (
    <StyledContainer
      $size={size}
      $withLeftPadding={isNil(leading)}
    >
      {leading && (
        <StyledLeading
          $size={size}
          $isReadOnly={$isReadOnly}
          data-testid={`${dataTestId}--leading`}
        >
          {leadingElement}
        </StyledLeading>
      )}
      {(prefixText || startEnhancer) && (
        <StyledRightColumn $disabled={$disabled}>
          {startEnhancerElement}
          {prefixText && (
            <StyledPrefixText
              $size={size}
              $disabled={$disabled}
              data-testid={`${dataTestId}--prefix-text`}
            >
              {prefixText}
            </StyledPrefixText>
          )}
        </StyledRightColumn>
      )}
    </StyledContainer>
  );
};
