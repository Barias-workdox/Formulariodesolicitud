import type { ReactElement, ReactNode } from 'react';

import { Checkmark } from '@carbon/icons-react';

import { TruncatedText } from '@components/truncated-text';

import { Spinner } from '../../spinner';
import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-react';

interface MenuItemLabelProps {
  children: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  startEnhancer?: ReactNode;
  endEnhancer?: ReactNode;
}

const styles = {
  wrapperStyles: (theme: DesignSystemTheme, { disabled }: { disabled?: boolean }): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.spacingXs,
    color: disabled ? theme.colors.neutralDepressed : theme.colors.neutralSubdued,
  }),
};

/**
 * Label to use in the MenuItem. This label accept a startEnhancer, endEnhancer and three status:
 * isLoading, disabled or selected.
 */
export const MenuItemLabel = ({
  children,
  isLoading,
  disabled,
  startEnhancer,
  endEnhancer,
  selected,
}: MenuItemLabelProps): ReactElement => {
  const { wrapperStyles } = useCss(styles, { disabled });

  return (
    <div className={wrapperStyles}>
      {startEnhancer}
      <TruncatedText
        textProps={{
          variant: 'bodySmall',
          margin: 0,
          color: 'inherit',
          flex: 1,
          as: 'span',
        }}
        tooltipProps={{
          content: children,
          showArrow: true,
        }}
      >
        {children}
      </TruncatedText>
      {isLoading ? <Spinner size="sm" /> : selected ? <Checkmark size={16} /> : endEnhancer}
    </div>
  );
};
