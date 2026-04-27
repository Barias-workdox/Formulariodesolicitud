import { themedStyled } from '@themes/utilities';

import {
  DESCRIPTIVE_LOADING_HEIGHT,
  DESCRIPTIVE_LOADING_HEIGHT_PX,
} from '../chat/chat-messages/chat-messages.constants';

import type { StyleObject } from 'styletron-react';

export const StyledTextRotatorContainer = themedStyled<
  'div',
  { $textIndex: number; $align?: StyleObject['alignItems'] }
>('div', ({ $textIndex, $align = 'start' }) => ({
  transform: `translateY(-${$textIndex * DESCRIPTIVE_LOADING_HEIGHT}px)`,
  height: DESCRIPTIVE_LOADING_HEIGHT_PX,
  transition: 'transform 0.6s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: $align,
}));

export const StyledTextContainer = themedStyled('div', () => ({
  minHeight: DESCRIPTIVE_LOADING_HEIGHT_PX,
  display: 'flex',
  alignItems: 'center',
}));

export const StyledOverflowContainer = themedStyled('div', () => ({
  overflow: 'hidden',
}));
