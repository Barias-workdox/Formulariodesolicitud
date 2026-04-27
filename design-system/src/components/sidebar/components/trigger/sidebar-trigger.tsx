import type { ReactElement } from 'react';

import { OpenPanelLeft } from '@carbon/icons-react';

import { useSidebar } from '@components/sidebar/sidebar.provider';
import { useTranslation } from '@components/utils';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';

import { SidebarLink } from '../link';

import type { SidebarTriggerProps } from '@components/sidebar/sidebar.interface';

/**
 * SidebarTrigger: A button to toggle the collapsible state of the Sidebar.
 * Uses a Base UI button with full keyboard accessibility support.
 */
export const SidebarTrigger = ({ onClick }: SidebarTriggerProps): ReactElement => {
  const { t } = useTranslation();
  const { isCollapsed } = useSidebar();

  // TODO: In a next iteration the sidebarLink will become a sidebarButton
  return (
    <SidebarLink
      href="#"
      Icon={OpenPanelLeft}
      onClick={onClick}
      aria-label={
        isCollapsed ? t('sidebar.ariaLabels.expandMenu') : t('sidebar.ariaLabels.collapseMenu')
      }
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded={!isCollapsed}
      onKeyDown={ariaKeyDownHandler(onClick)}
    />
  );
};
