import { IconButton } from '@components/button';
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE } from '@components/collapsible-box/next/collapsible-box.constants';
import { useCollapsibleBoxContext } from '@components/collapsible-box/next/collapsible-box.context';

import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface PanelIconButtonProps extends WithTestId, Exclude<IconButtonProps, 'size'> {}

/**
 * A React component that renders an icon button with a size determined by the current collapsible box context.
 */
export const PanelIconButton = ({
  dataTestId = 'panel-icon-button',
  ...rest
}: PanelIconButtonProps): JSX.Element => {
  const { size } = useCollapsibleBoxContext();

  const elementSize = ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE[size];

  return (
    <IconButton
      data-testid={dataTestId}
      {...rest}
      size={elementSize}
      responsive={false}
    />
  );
};
