import type { ReactElement, ReactNode } from 'react';

import { Edit, TrashCan } from '@carbon/icons-react';

import { useTranslation } from '@components/utils/i18n';

import { Menu } from '../../menu';
import { useCss } from '../../utils/hooks/use-css';

import { styles } from './message-options.styles';

import type { TranslationType } from '../../utils/i18n/i18n.interface';
import type { WithTestId } from '@interfaces/common.interfaces';

/**
 * Options of a message
 */
const options = (t: TranslationType, canUpdate: boolean, canDelete: boolean): MessageOption[] =>
  [
    canUpdate &&
      ({
        id: 'edit',
        label: t('general.edit'),
        icon: <Edit size={16} />,
      } as MessageOption),
    canDelete &&
      ({
        id: 'delete',
        label: t('general.delete'),
        icon: <TrashCan size={16} />,
      } as MessageOption),
  ].filter((option) => option);

export interface MessageOptionsProps extends WithTestId {
  canUpdate: boolean;
  canDelete: boolean;
  message: unknown;
  onEditClick(item: unknown): void;
  onDeleteClick(item: unknown): void;
  close(): void;
}

interface MessageOption {
  id: 'edit' | 'delete';
  label: string;
  icon: ReactNode;
}

/**
 * Options of the message to show in the message options popover.
 * Edit option will toggle a textarea in the message to be edited.
 * Delete option will show a confirmation modal to delete the message.
 */
export const MessageOptions = ({
  dataTestId,
  canUpdate,
  canDelete,
  message,
  onEditClick,
  onDeleteClick,
  close,
}: MessageOptionsProps): ReactElement => {
  const { messageOptionStyles } = useCss(styles);
  const { t } = useTranslation();

  /**
   * Handles the option click action
   * Triggers onEditClick or onDeleteClick depending on the item.id
   * Finally, closes the popover.
   */
  const onOptionClick = ({ item }: { item: MessageOption }): void => {
    const actions = {
      edit: onEditClick,
      delete: onDeleteClick,
    };

    actions[item.id](message);

    // Close the popover
    close();
  };

  return (
    <Menu
      dataTestId={dataTestId}
      items={options(t, canUpdate, canDelete)}
      onItemSelect={onOptionClick}
      itemLabelTemplate={(item): ReactElement => (
        <div className={messageOptionStyles}>
          {item.icon}
          {item.label}
        </div>
      )}
    />
  );
};
