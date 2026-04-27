import type { ReactElement } from 'react';

import { useTranslation } from '../../../../../../utils';
import { useCss } from '../../../../../../utils/hooks/use-css';

import { styles } from './popover-menu-empty.styles';

/**
 * This component is used when there are no items to display in a popover menu.
 * It provides a message to indicate that the menu is empty.
 */
export const PopoverMenuEmpty = (): ReactElement => {
  const { t } = useTranslation();
  const { containerStyles } = useCss(styles);

  return <li className={containerStyles}>{t('dataTable.addColumnsEmpty')}</li>;
};
