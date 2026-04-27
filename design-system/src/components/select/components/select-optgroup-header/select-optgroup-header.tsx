import type { PropsWithChildren } from 'react';

import { themedStyled } from '@themes/utilities';

export type SelectOptgroupHeaderProps = PropsWithChildren<{
  count: number;
  isBorderless: boolean;
}>;

const StyledOptgroupHeaderCounter = themedStyled('span', ({ $theme }) => {
  return {
    ...$theme.typography.ParagraphXSmall,
    color: $theme.colors.brand,
  };
});

const StyledOptgroupHeader = themedStyled<'li', { $isBorderless: boolean }>(
  'li',
  ({ $theme, $isBorderless }) => {
    return {
      ...$theme.typography.ParagraphXSmall,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: $theme.colors.bgBase,
      fontFamily: 'Roboto',
      textTransform: 'uppercase',
      color: $theme.colors.neutral,
      padding: `${$theme.spacing.spacingXs} ${$theme.spacing.spacingSm}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: '1px',
      borderBottomColor: $theme.colors.divisionLine,
      borderBottomStyle: 'solid',
      ...($isBorderless && {
        ...$theme.typography.ParagraphSmall,
        border: 'none',
      }),
    };
  },
);

/** Styled divider used as label for grouping elements in a select component*/
export const SelectOptgroupHeader = ({
  children,
  count,
  isBorderless = false,
  ...rest
}: SelectOptgroupHeaderProps): JSX.Element => {
  return (
    <StyledOptgroupHeader
      {...rest}
      $isBorderless={isBorderless}
    >
      {children} <StyledOptgroupHeaderCounter>({count})</StyledOptgroupHeaderCounter>
    </StyledOptgroupHeader>
  );
};
