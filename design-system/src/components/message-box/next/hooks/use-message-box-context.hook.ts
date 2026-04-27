import { useContext } from 'react';

import { noop } from '@utils/noop';

import { MessageBoxContext } from '../contexts';

import type { MessageBoxContextType } from '../message-box.interfaces';

export const defaultContext: MessageBoxContextType = {
  disabled: false,
  editorContentNode: null,
  isEmpty: true,
  isFocused: false,
  isHovered: false,
  handleSubmit: noop,
  setIsFocused: noop,
  setIsHovered: noop,
};

/**
 * Gets message box context values
 */
export const useMessageBoxContext = (): MessageBoxContextType => {
  const context = useContext(MessageBoxContext);
  if (!context) {
    console.warn('useMessageBoxContext must be used within a MessageBoxProvider');

    return defaultContext;
  }

  return context;
};
