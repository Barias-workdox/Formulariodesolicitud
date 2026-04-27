import type { PropsWithChildren, ReactElement } from 'react';

import { themedUseStyletron } from '../../../../themes';
import { TableHeader } from '../table-header';

import { tableLayoutContainerStyles, tableSeparationLineStyles } from './table-layout.styles';

import type { OverrideObject, Overrides } from '@themes/theme.interfaces';

export interface TableLayoutOverrides extends Overrides {
  Root?: OverrideObject<object>;
}

/** A Custom division line for Workflows Table. Could be used anywhere between header and table rows */
export const TableDivisionLine = (): JSX.Element => {
  const [css, theme] = themedUseStyletron();

  return (
    <div
      id="division-line"
      className={css(tableSeparationLineStyles(theme))}
    />
  );
};

/**
 * A table layout component for Workflow details tabs tables. Will render headers in the first row,
 * then a separation line that will use all the width with a hacky negative margin, and finally
 * will render all the children elements.
 */
export const TableLayout = ({
  headerValues,
  gridTemplateColumns,
  children,
  overrides = {},
}: PropsWithChildren<{
  /** All headers that will fill first row. With this length the number of columns is calculated */
  headerValues: string[];
  /** Indicates the style of gridTemplateColumns, following CSS Grid structure */
  gridTemplateColumns: string;
  /** Override pattern for customizing component styles and props */
  overrides?: TableLayoutOverrides;
}>): ReactElement => {
  const [css, theme] = themedUseStyletron();

  const { Root: RootOverride } = overrides;

  const className = css({
    ...tableLayoutContainerStyles(theme, gridTemplateColumns),
    ...(RootOverride?.style
      ? typeof RootOverride?.style === 'function'
        ? RootOverride.style({ $theme: theme })
        : RootOverride.style
      : {}),
  });

  return (
    <div className={className}>
      {headerValues.map((headerValue, index) => (
        <TableHeader key={`header-${index}`}>{headerValue}</TableHeader>
      ))}
      <TableDivisionLine />
      {children}
    </div>
  );
};
