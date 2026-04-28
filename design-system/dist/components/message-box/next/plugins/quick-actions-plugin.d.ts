import { ReactNode } from 'react';
import { MessageBoxPlugin } from '../message-box.interfaces';
export interface QuickActionsPluginProps {
    customRender(query: string): ReactNode;
}
/**
 * QuickActionsPlugin
 *
 * A plugin that renders a quick actions menu when the user types a quick action trigger.
 */
export declare const QuickActionsPlugin: ({ customRender }: QuickActionsPluginProps) => MessageBoxPlugin;
