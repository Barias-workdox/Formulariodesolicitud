import { Context, ReactElement } from 'react';
import { WebdoxAIBroadcastContextValues, WebdoxAIBroadcastProviderProps } from '../interfaces/chat-bot-broadcast.interfaces';
/** Utility to create the Webdox AI broadcast context */
export declare const getWebdoxAIBroadcastContext: () => Context<WebdoxAIBroadcastContextValues>;
/** Chat GPT Broadcast provider to subscribe to channel broadcast messages */
export declare const WebdoxAIBroadcastProvider: ({ children, cable, context, }: WebdoxAIBroadcastProviderProps) => ReactElement;
