import { sanitizeUrl } from '@utils/url.utils';

describe('sanitizeUrl', () => {
  it('returns empty string for nullish values', () => {
    expect(sanitizeUrl(undefined as unknown as string)).toBe('');
    expect(sanitizeUrl(null as unknown as string)).toBe('');
  });

  it('trims whitespace and replaces spaces with hyphens', () => {
    expect(sanitizeUrl('  hello world  ')).toBe('hello-world');
  });

  it('replaces non-word characters with hyphens', () => {
    expect(sanitizeUrl('hello@world!#test')).toBe('hello-world-test');
  });

  it('collapses multiple hyphens and underscores', () => {
    expect(sanitizeUrl('a---b__c____d')).toBe('a-b-c-d');
  });

  it('trims leading and trailing separators', () => {
    expect(sanitizeUrl('-_-hello-world-_-')).toBe('hello-world');
  });

  it('handles urls and paths', () => {
    expect(sanitizeUrl('/settings/profile')).toBe('settings-profile');
    expect(sanitizeUrl('https://app.example.com/a/b?x=1#hash')).toBe(
      'app-example-com-a-b-x-1-hash',
    );
    expect(sanitizeUrl('mailto:user@example.com')).toBe('user-example-com');
  });

  it('strips diacritics', () => {
    expect(sanitizeUrl('Café mañana')).toBe('cafe-manana');
    expect(sanitizeUrl('Crème brûlée / menú')).toBe('creme-brulee-menu');
  });

  it('allows custom replacement and lowercase', () => {
    expect(sanitizeUrl('Section Title: Part 2', { replacement: '_', toLowerCase: true })).toBe(
      'section_title_part_2',
    );
  });

  it('can remove underscores when keepUnderscores is false', () => {
    expect(
      sanitizeUrl('user_profile__settings', { keepUnderscores: false, replacement: '-' }),
    ).toBe('user-profile-settings');
  });

  it('can keep protocol when removeProtocol is false', () => {
    expect(sanitizeUrl('https://example.com/path', { removeProtocol: false })).toBe(
      'https-example-com-path',
    );
  });
});
