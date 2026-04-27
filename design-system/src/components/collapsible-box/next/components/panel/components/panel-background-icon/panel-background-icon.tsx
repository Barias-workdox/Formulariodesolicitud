import { BackgroundIcon } from '@components/background-icon';
import { ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE } from '@components/collapsible-box/next/collapsible-box.constants';
import { useCollapsibleBoxContext } from '@components/collapsible-box/next/collapsible-box.context';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';

export type PanelBackgroundIconProps = Exclude<BackgroundIconProps, 'size'>;

/**
 * A React component that renders a background icon with a size based on the current collapsible box context.
 */
export const PanelBackgroundIcon = (props: PanelBackgroundIconProps): JSX.Element => {
  const { size } = useCollapsibleBoxContext();

  const elementSize = ELEMENT_SIZE_BY_COLLAPSIBLE_BOX_SIZE[size];

  return (
    <BackgroundIcon
      {...props}
      size={elementSize}
    />
  );
};
