import { updateMessageText } from '@hooks/use-message-composer/utils/update-message-text.utils';

describe('updateMessageText - tests', () => {
  it('should format mentions with parentheses correctly', () => {
    const message =
      'Hello <span contenteditable="false" class="mention" data-user-id="1">@John</span>';
    const result = updateMessageText(message);

    expect(result).toEqual([
      'H',
      'e',
      'l',
      'l',
      'o',
      ' ',
      '(<span contenteditable="false" class="mention" data-user-id="1">@)',
      'J',
      'o',
      'h',
      '(n</span>)',
    ]);
  });

  it('should split the message into characters without mentions', () => {
    const message = 'Hello world';
    const result = updateMessageText(message);

    expect(result).toEqual(message.split(''));
  });
});
