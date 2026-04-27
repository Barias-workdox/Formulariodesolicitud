import { sanitizeMessageText } from '@hooks/use-message-composer/utils/sanitized-message-text.utils';

describe('sanitizeMessageText - tests', () => {
  it('should remove parentheses from formatted mentions', () => {
    const messageArray = [
      '(',
      '<span contenteditable="false" class="mention" data-user-id="1">',
      '@)',
      'J',
      'o',
      'h',
      '(',
      'n</span>)',
    ];
    const result = sanitizeMessageText(messageArray);

    expect(result).toBe(
      '<span contenteditable="false" class="mention" data-user-id="1">@John</span>',
    );
  });

  it('should handle messages without mentions correctly', () => {
    const messageArray = 'Hello world'.split('');
    const result = sanitizeMessageText(messageArray);

    expect(result).toBe('Hello world');
  });

  it('should handle messages with multiple mentions correctly', () => {
    const messageArray = [
      '(',
      '<span contenteditable="false" class="mention" data-user-id="1">',
      '@)',
      'J',
      'o',
      'h',
      '(',
      'n</span>)',
      ' ',
      'a',
      'n',
      'd',
      ' ',
      '(',
      '<span contenteditable="false" class="mention" data-user-id="2">',
      '@)',
      'J',
      'a',
      'n',
      '(',
      'e</span>)',
    ];
    const result = sanitizeMessageText(messageArray);

    expect(result).toBe(
      '<span contenteditable="false" class="mention" data-user-id="1">@John</span> and <span contenteditable="false" class="mention" data-user-id="2">@Jane</span>',
    );
  });
});
