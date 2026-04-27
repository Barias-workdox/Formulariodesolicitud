import type { ReactNode } from 'react';

import { MessageBoxPluginNames, QUICK_ACTION_TRIGGER } from '../message-box.constants';

import type { MessageBoxPlugin } from '../message-box.interfaces';

export interface QuickActionsPluginProps {
  customRender(query: string): ReactNode;
}

/**
 * QuickActionsPlugin
 *
 * A plugin that renders a quick actions menu when the user types a quick action trigger.
 */
export const QuickActionsPlugin = ({ customRender }: QuickActionsPluginProps): MessageBoxPlugin => {
  /**
   * Renders the quick actions menu.
   */
  const render: MessageBoxPlugin['render'] = ({ textValue } = {}): ReactNode => {
    const isQuickActionsVisible = textValue?.startsWith(QUICK_ACTION_TRIGGER);

    if (textValue && isQuickActionsVisible) {
      const query = textValue.replace(QUICK_ACTION_TRIGGER, '');

      return customRender(query);
    }

    return null;
  };

  return {
    name: MessageBoxPluginNames.QuickActions,
    render,
  };
};
