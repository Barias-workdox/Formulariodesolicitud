import { createContext } from 'react';

import type { MessageBoxContextType } from '../message-box.interfaces';

/**
 * MessageBox context type
 */
export const MessageBoxContext = createContext<MessageBoxContextType | null>(null);
