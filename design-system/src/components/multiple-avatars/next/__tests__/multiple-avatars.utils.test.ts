import { describe, expect, it } from 'vitest';

import { getCounterText, getCounterTooltipContent } from '../multiple-avatars.utils';

describe('multiple-avatars utils (next)', () => {
  describe('getCounterText', () => {
    it('renders full numbers up to 999', () => {
      expect(getCounterText(0)).toBe('+0');
      expect(getCounterText(7)).toBe('+7');
      expect(getCounterText(999)).toBe('+999');
    });

    it('formats thousands as K from 1,000 to 999,999', () => {
      expect(getCounterText(1_000)).toBe('+1K');
      expect(getCounterText(12_000)).toBe('+12K');
      expect(getCounterText(12_500)).toBe('+12.5K');
      // avoid rounding up to 1000K at the upper bound
      expect(getCounterText(999_999)).toBe('+999.9K');
    });

    it('formats millions as M from 1,000,000 and up', () => {
      expect(getCounterText(1_000_000)).toBe('+1M');
      expect(getCounterText(1_200_000)).toBe('+1.2M');
      expect(getCounterText(12_500_000)).toBe('+12.5M');
    });
  });

  describe('getCounterTooltipContent', () => {
    const t = (_key: string, options?: Record<string, unknown>) => {
      const count = Number(options?.count ?? 0);

      return count === 1 ? `+${count} additional signer` : `+${count} additional signers`;
    };

    it('returns a comma-separated list up to 10 names', () => {
      const avatars = Array.from({ length: 10 }, (_, i) => ({
        id: String(i),
        name: `User ${i + 1}`,
      }));

      expect(getCounterTooltipContent(avatars, t)).toBe(
        'User 1, User 2, User 3, User 4, User 5, User 6, User 7, User 8, User 9, User 10',
      );
    });

    it('returns the first 10 names and appends additional signers count when there are more than 10', () => {
      const avatars = Array.from({ length: 12 }, (_, i) => ({
        id: String(i),
        name: `User ${i + 1}`,
      }));

      expect(getCounterTooltipContent(avatars, t)).toBe(
        'User 1, User 2, User 3, User 4, User 5, User 6, User 7, User 8, User 9, User 10, +2 additional signers',
      );
    });

    it('returns empty string for empty input', () => {
      expect(getCounterTooltipContent([], t)).toBe('');
    });
  });
});
