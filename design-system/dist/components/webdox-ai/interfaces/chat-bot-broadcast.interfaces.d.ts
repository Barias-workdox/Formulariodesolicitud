import { Context, ReactNode } from 'react';
import { ActionCableCable, ActionCableContextValues } from '../../../contexts/action-cable-context';
export type WebdoxAIBroadcastChannelType = 'ConversationChannel';
export type WebdoxAIBroadcastContextValues = ActionCableContextValues<WebdoxAIBroadcastChannelType>;
export type WebdoxAIBroadcastSubscribeType = ReturnType<WebdoxAIBroadcastContextValues['subscribe']>;
export type WebdoxAIBroadcastProviderProps = {
    children: ReactNode;
    cable: ActionCableCable;
    context: Context<WebdoxAIBroadcastContextValues>;
};
