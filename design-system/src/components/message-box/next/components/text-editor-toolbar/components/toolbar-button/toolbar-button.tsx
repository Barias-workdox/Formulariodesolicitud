import { IconButton } from '@components/button';

import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { StyleOverrideProps } from '@themes/index';

export type ToolbarButtonProps = Pick<
  IconButtonProps,
  'children' | 'onClick' | 'disabled' | 'dataTestId'
> & {
  ariaLabel: string;
  isActive?: boolean;
};

/**
 * Component that renders a button for the toolbar.
 */
export const ToolbarButton = ({
  ariaLabel,
  children,
  dataTestId,
  onClick,
  disabled,
  isActive,
}: ToolbarButtonProps): JSX.Element => {
  return (
    <IconButton
      aria-label={ariaLabel}
      dataTestId={dataTestId}
      disabled={disabled}
      kind="tertiary"
      onClick={onClick}
      size="24px"
      overrides={{
        BaseButton: {
          style: ({ $theme }: StyleOverrideProps) => ({
            backgroundColor: isActive ? $theme.colors.brandWashed : $theme.colors.bgBase,
          }),
        },
      }}
    >
      {children}
    </IconButton>
  );
};
