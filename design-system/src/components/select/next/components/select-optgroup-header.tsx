import type { ForwardedRef, ReactNode } from 'react';

import { themedStyled } from '@themes/utilities';

export type SelectOptgroupHeaderProps = {
  innerRef?: ForwardedRef<HTMLLIElement>;
  count: number;
  label: ReactNode;
};

const StyledOptgroupHeaderCounter = themedStyled('span', ({ $theme }) => {
  return {
    ...$theme.typography.ParagraphXSmall,
    color: $theme.colors.brand,
  };
});

const StyledOptgroupHeader = themedStyled<'li', object>('li', ({ $theme }) => {
  return {
    ...$theme.typography.ParagraphXSmall,
    textTransform: 'uppercase',
    color: $theme.colors.neutralSubdued,
    padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingSm}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: '1px',
    borderBottomColor: $theme.colors.neutralSubtle,
    borderBottomStyle: 'solid',
  };
});

/** Styled divider used as label for grouping elements in a select component*/
export const SelectOptgroupHeader = ({
  innerRef,
  count,
  label,
  ...rest
}: SelectOptgroupHeaderProps): JSX.Element => {
  return (
    <StyledOptgroupHeader
      {...rest}
      ref={innerRef}
    >
      {label} <StyledOptgroupHeaderCounter>({count})</StyledOptgroupHeaderCounter>
    </StyledOptgroupHeader>
  );
};
