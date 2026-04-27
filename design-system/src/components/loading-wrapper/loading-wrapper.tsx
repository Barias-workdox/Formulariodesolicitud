import type { ReactNode } from 'react';

import { Spinner } from '@components/spinner';
import { Text } from '@components/text';

import { StyledContainer, StyledSpinnerContainer } from './loading-wrapper.styles';

import type { SpinnerProps } from '@components/spinner';
import type { StyleObject } from 'styletron-react';

export type LoadingWrapperOverrides = {
  Container?: StyleObject;
  Svg?: StyleObject;
};

export interface LoadingWrapperProps {
  isLoading: boolean;
  children?: React.ReactNode;
  spinnerSize?: SpinnerProps['size'];
  spinnerColor?: SpinnerProps['color'];
  overrides?: LoadingWrapperOverrides;
  title?: ReactNode;
}

/**
 * Wrapper who is responsible for showing the spinner while isLoading is true.
 * When isLoading is false, the children will be shown.
 */
export const LoadingWrapper = ({
  isLoading,
  children,
  spinnerSize = 'md',
  spinnerColor,
  overrides = {},
  title,
}: LoadingWrapperProps): JSX.Element => {
  if (!isLoading) {
    return <>{children}</>;
  }

  /** Function that renders the title component if the title exists */
  const renderTitle = (rawTitle?: ReactNode): ReactNode => {
    if (!rawTitle) return;

    return typeof rawTitle === 'string' ? (
      <Text
        variant="bodySmall"
        margin={0}
      >
        {rawTitle}
      </Text>
    ) : (
      rawTitle
    );
  };

  return (
    <StyledContainer $overrides={overrides.Container}>
      <StyledSpinnerContainer
        $overrides={overrides.Svg}
        data-testid="loading-spinner--container"
        aria-label="Spinner"
      >
        <Spinner
          size={spinnerSize}
          color={spinnerColor}
        />
      </StyledSpinnerContainer>
      {renderTitle(title)}
    </StyledContainer>
  );
};
