import { Edit, PenFountain, TrashCan, View } from '@carbon/icons-react';

import { useTranslation } from '@components/utils/i18n';

import { IconButton } from '../../../button';
import { StatefulTooltip } from '../../../tooltip';

import type { KindType } from '../../../button';
import type { StatefulTooltipProps } from '../../../tooltip';
import type { TranslationType } from '../../../utils/i18n/i18n.interface';

export type ActionType = 'position' | 'edit' | 'delete' | 'view';

export interface TableActionProps {
  'data-testid'?: string;
  /** Used to add extra styles to icon button */
  buttonKind?: KindType;
  disabled?: boolean;
  /**
   * @deprecated Define the tooltip text in the `tooltipProps` content instead.
   * Use this property to provide a short description or label for the action.
   */
  tooltipText?: string;
  /**
   * Customize the appearance and behavior of the tooltip.
   */
  tooltipProps?: StatefulTooltipProps;
  size?: number;
  action: ActionType;
  showTooltip?: boolean;
  onClick(): void;
}

export interface ActionData {
  tooltipText: string;
  icon: React.ReactNode;
}

/**
 * Get all dynamic properties based on every possible action in table actions.
 * Tooltip texts act as default values, they can be override
 */
export const getActionData = (
  currentAction: ActionType,
  size = 16,
  t: TranslationType,
): ActionData => {
  const actionOptions: Record<ActionType, ActionData> = {
    position: {
      tooltipText: t('table.positionSignature'),
      icon: (
        <PenFountain
          width={size}
          height={size}
        />
      ),
    },
    delete: {
      tooltipText: t('table.delete'),
      icon: (
        <TrashCan
          width={size}
          height={size}
        />
      ),
    },
    edit: {
      tooltipText: t('table.edit'),
      icon: (
        <Edit
          width={size}
          height={size}
        />
      ),
    },
    view: {
      tooltipText: t('table.view'),
      icon: (
        <View
          width={size}
          height={size}
        />
      ),
    },
  };

  return actionOptions[currentAction];
};

/** An Icon Button component with an icon showing an action in the table right section */
export const TableAction = ({
  'data-testid': dataTestId,
  action,
  buttonKind = 'link-tertiary',
  onClick,
  disabled = false,
  tooltipText,
  tooltipProps = {},
  size,
  showTooltip = true,
}: TableActionProps): JSX.Element => {
  const { t } = useTranslation();
  const { content: tooltipContent, ...tooltipRest } = tooltipProps;

  const actionData = getActionData(action, size, t);

  return (
    <StatefulTooltip
      placement="bottom"
      showArrow
      content={showTooltip ? (tooltipContent ?? tooltipText ?? actionData.tooltipText) : undefined}
      {...tooltipRest}
    >
      <div>
        <IconButton
          data-testid={dataTestId}
          disabled={disabled}
          kind={buttonKind}
          shape="circle"
          onClick={onClick}
          size="32px"
        >
          {actionData.icon}
        </IconButton>
      </div>
    </StatefulTooltip>
  );
};
