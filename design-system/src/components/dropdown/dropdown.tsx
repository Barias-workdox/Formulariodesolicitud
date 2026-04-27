import type { PropsWithChildren, ReactElement } from 'react';

import { ChevronDown } from '@carbon/icons-react';
import { TRIGGER_TYPE } from 'baseui/popover';
import { ParagraphSmall } from 'baseui/typography';

import { themedUseStyletron } from '../../themes';
import { Button } from '../button';
import { Menu } from '../menu';
import { Popover } from '../popover';

import { DropdownListItem } from './components';

import type { DropdownOption, DropdownProps } from './dropdown.interfaces';
import type { StyleOverrideProps } from '../../themes/theme.interfaces';
import type { StatefulContentRenderProp } from 'baseui/popover';
import type { StyleObject } from 'styletron-react';

/**
 * Dropdown component to show a menu with a list of items
 */
export const Dropdown = ({
  dataTestId = 'dropdown',
  options = [],
  children,
  size,
  textForTooltip,
  placement = 'auto',
  buttonKind = 'primary',
}: PropsWithChildren<DropdownProps>): ReactElement => {
  const [css, theme] = themedUseStyletron();
  const activeOptions = options.filter((item) => item.isActive);

  /**
   * Handles the selection of a dropdown item
   */
  const handleItemSelect = (
    item: DropdownOption,
    close: Parameters<StatefulContentRenderProp>[0]['close'],
  ): void => {
    item.onClick();
    close?.();
  };

  return (
    <Popover
      placement={placement}
      accessibilityType="menu"
      triggerType={activeOptions.length > 0 ? TRIGGER_TYPE.click : TRIGGER_TYPE.hover}
      content={({ close }): ReactElement =>
        activeOptions.length > 0 ? (
          <Menu
            dataTestId={`${dataTestId}__menu`}
            itemLabelTemplate={(item): React.ReactElement => <DropdownListItem item={item} />}
            items={activeOptions}
            onItemSelect={({ item }) => handleItemSelect(item, close)}
          />
        ) : (
          <div
            className={css({
              padding: theme.spacing.spacingXl,
              backgroundColor: theme.colors.neutral,
              width: '250px',
            })}
          >
            <ParagraphSmall
              $style={{ textAlign: 'center', margin: 0, color: theme.colors.textBase }}
            >
              {textForTooltip}
            </ParagraphSmall>
          </div>
        )
      }
      showArrow
      overrides={{
        Arrow: {
          style: ({ $theme }: StyleOverrideProps): StyleObject => ({
            backgroundColor: activeOptions.length > 0 ? '#fff' : $theme.colors.neutral,
          }),
        },
      }}
    >
      <Button
        data-testid={`${dataTestId}__button`}
        size={size}
        type="button"
        disabled={activeOptions.length === 0}
        endEnhancer={() => (
          <ChevronDown
            size={16}
            color="neutralSubdued"
          />
        )}
        kind={buttonKind}
      >
        {children}
      </Button>
    </Popover>
  );
};
