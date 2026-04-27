import { themedStyled } from '../../../../themes';
import { tableCellStyles } from '../table-cell';

/** Styled Table Header component with a custom width as a prop parameter */
export const TableHeaderContainer = themedStyled<'th', { $width: string }>(
  'th',
  ({ $width, $theme }) => ({
    ...tableCellStyles($theme),
    width: $width,
    textAlign: 'start',
    paddingTop: 0,
    paddingBottom: 0,
  }),
);
