import type { ReactElement } from 'react';

import { Button } from '@components/button';
import { COMMON_HEIGHT_32, COMMON_HEIGHT_44 } from '@constants/common.constants';
import { useResponsiveProps } from '@utils/use-responsive-props.util';

import { buttonOverrides } from './page-header-primary-button.overrides';

import type { ButtonProps } from '@components/button';
import type { WithTestId } from '@interfaces/common.interfaces';

export type PageHeaderPrimaryButtonProps = Partial<
  Pick<
    ButtonProps,
    'children' | 'data-testid' | 'onClick' | 'startEnhancer' | 'disabled' | 'isLoading'
  >
> &
  WithTestId;

/**
 * A component to render primary button for page header.
 */
export const PageHeaderPrimaryButton = ({
  dataTestId = 'page-header__primary-button',
  children,
  ...rest
}: PageHeaderPrimaryButtonProps): ReactElement => {
  const responsiveProps = useResponsiveProps<Partial<ButtonProps>>(
    { large: { size: COMMON_HEIGHT_44 } },
    { size: COMMON_HEIGHT_32 },
  );

  return (
    <Button
      data-testid={dataTestId}
      kind="primary"
      overrides={buttonOverrides}
      {...rest}
      {...responsiveProps}
    >
      {children}
    </Button>
  );
};
