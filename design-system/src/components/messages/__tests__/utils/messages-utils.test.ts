import { defaultColors, getMessageBarColor } from '@components/messages/utils/messages.utils';

import type { MessageBarColorParams } from '@components/messages/messages.interfaces';

const defaultParams: MessageBarColorParams = {
  authorId: 1,
  currentUserId: 2,
  type: 'inquiry',
  barsOverrides: {},
};

describe('getMessageBarColor', () => {
  it('should return warning if type is inquiry', () => {
    const result = getMessageBarColor(defaultParams);

    expect(result).toBe('warning');
  });

  it('should return authorColor if authorId is equal to currentUserId', () => {
    const result = getMessageBarColor({
      ...defaultParams,
      authorId: 1,
      currentUserId: 1,
      type: 'comment',
    });

    expect(result).toBe(defaultColors.authorColor);
  });

  it('should return otherUserColor if authorId is not equal to currentUserId', () => {
    const result = getMessageBarColor({ ...defaultParams, type: 'comment' });

    expect(result).toBe(defaultColors.otherUserColor);
  });

  it('should override default colors with barsOverrides', () => {
    const customColors: MessageBarColorParams['barsOverrides'] = {
      authorColor: 'neutralBase',
      otherUserColor: 'base',
    };

    const resultAuthor = getMessageBarColor({
      type: 'comment',
      authorId: 1,
      currentUserId: 1,
      barsOverrides: customColors,
    });

    expect(resultAuthor).toBe(customColors.authorColor);

    const resultOther = getMessageBarColor({
      ...defaultParams,
      type: 'comment',
      barsOverrides: customColors,
    });

    expect(resultOther).toBe(customColors.otherUserColor);
  });
});
