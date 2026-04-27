import { forwardRef } from 'react';
import type { ReactElement } from 'react';

import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { useTranslation } from '@components/utils';

import type { ButtonProps } from '@components/button';

export type ClearButtonProps = Pick<ButtonProps, 'data-testid' | 'onClick' | 'overrides'> & {
  'aria-label'?: string;
  iconColor?: string;
};

/**
 * A button component that displays a "Close" icon, typically used to clear or dismiss elements such as notifications or input fields.
 */
export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  function ClearButtonInner(
    {
      'data-testid': dataTestId = 'clear-button',
      'aria-label': ariaLabel,
      onClick,
      iconColor,
      overrides,
    },
    ref,
  ): ReactElement {
    const { t } = useTranslation();

    return (
      <IconButton
        data-testid={dataTestId}
        ref={ref}
        kind="ghost-tertiary"
        size="24px"
        aria-label={ariaLabel}
        onClick={onClick}
        overrides={overrides}
      >
        <Close
          title={t('general.close')}
          fill={iconColor}
        />
      </IconButton>
    );
  },
);

ClearButton.displayName = 'ClearButton';
