import { renderHook } from '@testing-library/react';

import { useFormatCurrency } from '../hooks/use-format-currency.hook';

describe('useFormatCurrency - tests', () => {
  it('should return the correct values', async () => {
    const {
      result: { current },
    } = renderHook(useFormatCurrency);

    expect(current).toEqual({
      formatCurrency: expect.any(Function),
      getCurrencyTranslate: expect.any(Function),
      t: expect.any(Function),
    });
  });
});
