import { Children, Fragment, forwardRef, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

import { addExtraProps } from '@utils/add-extra-props';

import { StyledContainer, StyledDivider } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

export interface CompoundTitleProps extends WithTestId {
  $expanded?: boolean;
}

/**
 * Component that renders a compound title with optional dividers between its child elements.
 * It supports custom props for child elements and adjusts their appearance based on the `$expanded` prop.
 */

export const CompoundTitle = forwardRef<HTMLDivElement, PropsWithChildren<CompoundTitleProps>>(
  function CompoundTitleComponent({ children, $expanded, 'data-testid': dataTestId }, ref) {
    const childrenArray = Children.toArray(children);
    const childrenWithDivider = useMemo(
      () =>
        childrenArray.map((child, index) => {
          const childWithExtraProps = addExtraProps(child, { $expanded });

          return (
            <Fragment key={index}>
              {index !== 0 && <StyledDivider data-testid={`${dataTestId}--divider`} />}
              {childWithExtraProps}
            </Fragment>
          );
        }),
      [childrenArray, $expanded, dataTestId],
    );

    return <StyledContainer ref={ref}>{childrenWithDivider}</StyledContainer>;
  },
);
