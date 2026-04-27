import type { PropsWithChildren } from 'react';

import { Search } from '@carbon/icons-react';
import { StyledRoot as BStyledRoot } from 'baseui/input';
import { isNil } from 'lodash';

import { getInputRootStyles } from '@components/input/next';
import {
  CompoundStartEnhancer,
  type CompoundStartEnhancerProps,
} from '@components/input/next/components/compound-start-enhancer';
import { useCss } from '@components/utils/hooks/use-css';

import { StyledStartEnhancerContainer } from '../../styled-components';

import type { SelectKind } from '../../select.interfaces';
import type { Size } from '@components/input/next';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';
import type { SharedProps } from 'baseui/input';
import type { SharedStylePropsArg } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export type SelectControlContainerProps = SharedProps &
  Pick<SharedStylePropsArg, '$type'> &
  WithZIndex &
  WithTestId<
    PropsWithChildren<{
      size?: Size;
      kind: SelectKind;
      isHovered: boolean;
      leading?: CompoundStartEnhancerProps['leading'];
      width?: StyleObject['width'];
    }>
  >;

/**
 * Component to be used to provide a container for the select control, including leading icons and styles.
 */
export const SelectControlContainer = ({
  'data-testid': dataTestId,
  children,
  leading,
  size,
  kind,
  $type,
  isHovered,
  ...rest
}: SelectControlContainerProps): JSX.Element => {
  const { theme } = useCss();

  const isSearchType = $type === 'search';
  const withStartEnhancer = !isNil(leading) || isSearchType;

  return (
    <BStyledRoot
      {...rest}
      $style={getInputRootStyles({
        ...rest,
        $theme: theme,
        $kind: kind,
        $size: size,
        $isHovered: isHovered,
        $withStartEnhancer: withStartEnhancer,
      })}
    >
      {withStartEnhancer && (
        <StyledStartEnhancerContainer data-testid={`${dataTestId}--start-enhancer-container`}>
          <CompoundStartEnhancer
            {...rest}
            data-testid={dataTestId}
            leading={leading}
            size={size}
            startEnhancer={
              isSearchType ? <Search data-testid={`${dataTestId}--search-icon`} /> : undefined
            }
          />
        </StyledStartEnhancerContainer>
      )}
      {children}
    </BStyledRoot>
  );
};
