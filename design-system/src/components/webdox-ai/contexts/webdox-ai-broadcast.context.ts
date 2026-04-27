import { createContext } from 'react';
import type { Context, ReactElement } from 'react';

import { ActionCableProvider } from '../../../contexts/action-cable-context';

import type {
  WebdoxAIBroadcastChannelType,
  WebdoxAIBroadcastContextValues,
  WebdoxAIBroadcastProviderProps,
} from '../interfaces/chat-bot-broadcast.interfaces';

/** Utility to create the Webdox AI broadcast context */
export const getWebdoxAIBroadcastContext = (): Context<WebdoxAIBroadcastContextValues> =>
  createContext<WebdoxAIBroadcastContextValues>({
    subscribe: () => {
      return (): void => {
        return;
      };
    },
  });

/** Chat GPT Broadcast provider to subscribe to channel broadcast messages */
export const WebdoxAIBroadcastProvider = ({
  children,
  cable,
  context,
}: WebdoxAIBroadcastProviderProps): ReactElement =>
  ActionCableProvider<WebdoxAIBroadcastChannelType>({
    children,
    cable,
    ActionCableContext: context,
  });
