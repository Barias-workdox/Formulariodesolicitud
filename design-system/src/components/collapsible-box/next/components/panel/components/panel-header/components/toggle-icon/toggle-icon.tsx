import { ChevronDown, ChevronUp } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE } from '@components/collapsible-box/next/collapsible-box.constants';
import { useCollapsibleBoxContext } from '@components/collapsible-box/next/collapsible-box.context';

import { iconButtonOverrides } from './toggle-icon.overrides';

import type { WithTestId } from '@interfaces/common.interfaces';

export interface ToggleIconProps extends WithTestId {
  $expanded?: boolean;
}

/**
 * Component that renders a toggleable icon button.
 * The button displays a `ChevronUp` or `ChevronDown` icon depending on the `$expanded` state.
 */
export const ToggleIcon = ({
  $expanded,
  'data-testid': dataTestId,
}: ToggleIconProps): JSX.Element => {
  const { size } = useCollapsibleBoxContext();
  const elementSize = ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE[size];

  return (
    <IconButton
      size={elementSize}
      responsive={false}
      data-testid={dataTestId}
      overrides={iconButtonOverrides()}
    >
      {$expanded ? <ChevronUp /> : <ChevronDown />}
    </IconButton>
  );
};
