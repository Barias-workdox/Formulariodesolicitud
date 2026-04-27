import type { ReactElement, ReactNode } from 'react';

import { TruncatedText } from '@components/truncated-text';
import { useCss } from '@components/utils/hooks/use-css';

import type { FilterProps } from '../filter.interfaces';
import type { Overrides } from '@themes/theme.interfaces';
import type { Option } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

export type FilterValueTextProps = Pick<
  FilterProps,
  'multi' | 'value' | 'tooltipText' | 'label' | 'minWidth' | 'maxWidth'
> & {
  overrides?: Overrides;
};

const styles = {
  textStyles: (_, { minWidth, maxWidth }: { minWidth: string; maxWidth: string }): StyleObject => ({
    flex: 1,
    width: 'max-content',
    minWidth,
    maxWidth,
  }),
};

/**
 * Generates a display text based on the filter value(s).
 *
 * @example
 * ```
 * // Single select scenario
 * const result = getValueText({
 *   value: [{ label: "Option 1" }],
 *   multi: false,
 *   label: "Select",
 * });
 * console.log(result); // Outputs: "Select: Option 1"
 * ```
 *
 * @example
 * ```
 * // Multi-select scenario with no selection
 * const result = getValueText({
 *   value: [],
 *   multi: true,
 *   label: "Select",
 * });
 * console.log(result); // Outputs: "Select"
 * ```
 */
const getValueText = ({
  value = [],
  multi,
  label,
}: {
  value: Option[];
  multi: boolean;
  label: string;
}): ReactNode => {
  if (multi || value.filter(Boolean).length === 0) {
    return label;
  }

  const [{ label: valueLabel }] = value;

  if (label) {
    return valueLabel ? `${label}: ${valueLabel}` : label;
  }

  return valueLabel || '';
};

/**
 * Renders a truncated text component displaying the selected filter value(s) or a default label.
 */
export const FilterValueText = ({
  value,
  multi,
  label,
  tooltipText,
  minWidth,
  maxWidth,
}: FilterValueTextProps): ReactElement => {
  const { textStyles } = useCss(styles, { minWidth, maxWidth });
  const valueText = getValueText({ value, multi, label });

  return (
    <TruncatedText
      className={textStyles}
      tooltipProps={{
        content: tooltipText,
        showArrow: true,
        hasPointerEventsEnabled: false,
      }}
      textProps={{
        variant: 'bodySmall',
        color: 'inherit',
        margin: 0,
      }}
    >
      {valueText}
    </TruncatedText>
  );
};
