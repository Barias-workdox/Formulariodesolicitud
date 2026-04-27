import { escapeRegex, sanitizeClassUserMention } from '../regex.utils';

describe('escapeRegex', () => {
  it('should escape special characters in a string', () => {
    const input = '^test$[string]{with}(special)*characters?';
    const expected = '\\^test\\$\\[string\\]\\{with\\}\\(special\\)\\*characters\\?';

    expect(escapeRegex(input)).toBe(expected);
  });

  it('should not modify a string with no special characters', () => {
    const input = 'This is a simple string';

    expect(escapeRegex(input)).toBe(input);
  });

  it('should escape a string with only special characters', () => {
    const input = '[-+*?](){}';
    const expected = '\\[\\-\\+\\*\\?\\]\\(\\)\\{\\}';

    expect(escapeRegex(input)).toBe(expected);
  });

  it('should escape a string with slashes and backslashes', () => {
    const input = '/path/to/file\\folder';
    const expected = '\\/path\\/to\\/file\\\\folder';

    expect(escapeRegex(input)).toBe(expected);
  });

  it('should escape a string with a mixture of special characters and regular characters', () => {
    const input = 'Hello [World], how are you?';
    const expected = 'Hello \\[World\\], how are you\\?';

    expect(escapeRegex(input)).toBe(expected);
  });

  it('should handle an empty string', () => {
    expect(escapeRegex('')).toBe('');
  });
});

describe('sanitizeClassUserMention', () => {
  it('should update the output class', () => {
    const text = '<span class="test-class">@JohnDoe</span> how are you?';

    expect(
      sanitizeClassUserMention({
        text,
        userMentionCssClassName: 'test-class',
        mentionedUserStyles: 'output-class',
      }),
    ).toBe('<span class="output-class">@JohnDoe</span> how are you?');
  });
});
