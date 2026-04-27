import type { ReactElement } from 'react';

import { CheckmarkOutline, CloseOutline, OverflowMenuVertical } from '@carbon/icons-react';

import { Button, IconButton } from '@components/button';
import { StatefulMenu } from '@components/menu';
import { Popover } from '@components/popover';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './responsible-header-options.styles';

import type { Items, OnItemSelectFn } from 'baseui/menu';

export type ResponsibleHeaderOptionsProps = {
  'data-testid': string;
  onFinalize(): void;
  onCancel(): void;
};

/**
 * Component that provides a set of header options for a
 * responsible within a collaboration negotiation.
 */
export const ResponsibleHeaderOptions = ({
  'data-testid': dataTestId,
  onFinalize,
  onCancel,
}: ResponsibleHeaderOptionsProps): ReactElement => {
  const { containerStyles, theme } = useCss(styles);
  const { t } = useTranslation();

  /** Array of items on the menu */
  const items: Items = [
    {
      id: 'cancel',
      label: t('contractNegotiationCollaboration.cancel'),
      startEnhancer: <CloseOutline />,
    },
  ];

  /** Object that contains the handlers for the menu items */
  const menuOptionsHandler = {
    cancel: (): void => onCancel(),
  };

  return (
    <div className={containerStyles}>
      <Button
        data-testid={`${dataTestId}__finalize`}
        size="compact"
        startEnhancer={<CheckmarkOutline />}
        onClick={onFinalize}
      >
        {t('contractNegotiationCollaboration.finalize')}
      </Button>

      <Popover
        ignoreBoundary
        placement="bottomRight"
        content={
          <StatefulMenu
            items={items}
            onItemSelect={({ item: { id } }): OnItemSelectFn => menuOptionsHandler[id]()}
          />
        }
      >
        <IconButton
          type="button"
          size="32px"
          kind="control"
          data-testid={`${dataTestId}__overflow`}
        >
          <OverflowMenuVertical color={theme.colors.neutral} />
        </IconButton>
      </Popover>
    </div>
  );
};
