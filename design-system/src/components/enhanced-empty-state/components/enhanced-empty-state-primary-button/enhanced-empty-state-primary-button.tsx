import type { ReactElement } from 'react';

import { Button } from '@components/button';

import {
  desktopButtonOverrides,
  mobileButtonOverrides,
} from './enhanced-empty-state-primary-button.styles';

import type { ButtonProps } from '@components/button';

export type EnhancedEmptyStatePrimaryButtonProps = Pick<
  ButtonProps,
  'children' | 'data-testid' | 'onClick' | 'startEnhancer' | 'disabled'
>;

/**
 * A button component for desktop view.
 */
export const DesktopButton = ({
  'data-testid': dataTestId = 'enhanced-empty-state__primary-button',
  children,
  ...others
}: EnhancedEmptyStatePrimaryButtonProps): ReactElement => {
  return (
    <Button
      {...others}
      data-testid={dataTestId}
      overrides={desktopButtonOverrides}
    >
      {children}
    </Button>
  );
};

/**
 * A button component for mobile view.
 */
export const MobileButton = ({
  'data-testid': dataTestId = 'enhanced-empty-state__primary-button',
  children,
  ...others
}: EnhancedEmptyStatePrimaryButtonProps): ReactElement => {
  return (
    <Button
      {...others}
      data-testid={dataTestId}
      size="compact"
      overrides={mobileButtonOverrides}
    >
      {children}
    </Button>
  );
};

/**
 * A component to render primary button for enhanced empty state.
 */
export const EnhancedEmptyStatePrimaryButton = ({
  'data-testid': dataTestId,
  children,
  onClick,
  startEnhancer,
  disabled,
}: EnhancedEmptyStatePrimaryButtonProps): ReactElement => {
  const buttonProps = {
    'data-testid': dataTestId,
    kind: 'primary',
    onClick,
    startEnhancer,
    disabled,
  };

  return (
    <>
      <MobileButton {...buttonProps}>{children}</MobileButton>
      <DesktopButton {...buttonProps}>{children}</DesktopButton>
    </>
  );
};
