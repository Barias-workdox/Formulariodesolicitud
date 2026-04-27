import type { ReactElement, ReactNode } from 'react';

import { useCss } from '../../../../../../utils/hooks/use-css';

import { styles } from './popover-menu-options-wrapper.styles';

type PopoverMenuOptionsWrapperProps = {
  children: ReactNode;
};

/**
 * This component is used to create a container for a list of options or items
 * within a popover menu. It can contain multiple menu items as its children.
 */
export const PopoverMenuOptionsWrapper = ({
  children,
}: PopoverMenuOptionsWrapperProps): ReactElement => {
  const { optionsWrapperStyles } = useCss(styles);

  return (
    <li>
      <ul className={optionsWrapperStyles}>{children}</ul>
    </li>
  );
};
