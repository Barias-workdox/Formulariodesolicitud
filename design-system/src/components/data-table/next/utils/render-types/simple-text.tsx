import type { ReactElement } from 'react';

import { DATA_TABLE_Z_INDEX } from '@components/data-table/next/data-table.constants';
import { TruncatedText } from '@components/truncated-text';

import { useDataTableDisabledRow } from '../../hooks/use-data-table-disabled-row';

type SimpleTextProps = { value: string | number };

/**
 * A component for displaying simple text with optional truncation and tooltip.
 *
 * This component wraps the provided `value` within a `TruncatedText` component,
 * allowing for text truncation and tooltip display for long content.
 */
export const SimpleText = ({ value }: SimpleTextProps): ReactElement => {
  const { isRowDisabled: disabled } = useDataTableDisabledRow();

  return (
    <TruncatedText
      textProps={{
        color: disabled ? 'neutralDepressed' : 'neutralSubdued',
        variant: 'body',
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'inherit',
        $style: { flex: 1 },
      }}
      tooltipProps={{
        content: value,
        placement: 'top',
        popoverMargin: 4,
        ignoreBoundary: true,
        showArrow: true,
        hasPointerEventsEnabled: false,
        zIndex: DATA_TABLE_Z_INDEX.popover,
      }}
    >
      {value}
    </TruncatedText>
  );
};
