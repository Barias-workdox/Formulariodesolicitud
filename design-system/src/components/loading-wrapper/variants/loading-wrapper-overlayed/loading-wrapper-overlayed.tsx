import { useRef } from 'react';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';

import { LoadingWrapper } from '@components/loading-wrapper';

import {
  StyledContainer,
  StyledRelativeContainer,
  StyledSpinnerContainer,
} from './loading-wrapper-overlayed.styles';

import type { SpinnerProps } from '@components/spinner';
import type { StyleObject } from 'styletron-react';

export type LoadingWrapperOverlayedProps = PropsWithChildren<{
  isLoading: boolean;
  isRelative?: boolean;
  spinnerSize?: SpinnerProps['size'];
  spinnerColor?: SpinnerProps['color'];
  title?: ReactNode;
  $backgroundColor?: StyleObject['backgroundColor'];
  $opacity?: StyleObject['opacity'];
}>;

/**
 * Component designed to display a loading overlay with a spinner on top
 * of its children components when loading is in progress.
 */
export const LoadingWrapperOverlayed = ({
  isLoading,
  isRelative,
  $backgroundColor,
  $opacity = 0.8,
  spinnerSize,
  spinnerColor,
  title,
  children,
}: LoadingWrapperOverlayedProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  if (!isLoading) {
    return <>{children}</>;
  }

  const content = (
    <>
      {children}
      <StyledContainer
        ref={ref}
        $backgroundColor={$backgroundColor}
        $opacity={$opacity}
      >
        <StyledSpinnerContainer>
          <LoadingWrapper
            isLoading
            spinnerSize={spinnerSize}
            spinnerColor={spinnerColor}
            title={title}
            overrides={{ Container: { height: 'auto' } }}
          />
        </StyledSpinnerContainer>
      </StyledContainer>
    </>
  );

  return isRelative ? <StyledRelativeContainer>{content}</StyledRelativeContainer> : content;
};
