import React from '@storybook/react-vite';

import { currencies } from '../constants/currency.constants';

import { useFormatCurrency } from './use-format-currency.hook';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Utils/FormatCurrency',
  args: {
    value: 1500.76,
    locale: 'en',
    currency: 'USD',
  },
  argTypes: {
    locale: {
      options: ['es', 'en', 'pt'],
      control: { type: 'select' },
    },
    currency: {
      options: currencies.map(({ currencyCode }) => currencyCode),
      control: { type: 'select' },
    },
  },
} as Meta;

const FormatCurrencyTemplate: StoryFn = ({ value, locale, currency }) => {
  const { formatCurrency } = useFormatCurrency();

  const formattedCurrency = formatCurrency({ value, locale, currency });

  return <div>{formattedCurrency}</div>;
};

const FormatCurrencyWithTranslationsTemplate: StoryFn = ({ value, locale, currency }) => {
  const { formatCurrency, getCurrencyTranslate } = useFormatCurrency();

  const formattedCurrency = formatCurrency({ value, locale, currency });

  return <div>{`${formattedCurrency} (${getCurrencyTranslate({ currency })})`}</div>;
};

/**
 * Story to display the currency format for a given locale and currency.
 *
 * This story demonstrates the formatted currency value based on the specified locale and currency.
 * The displayed value adheres to the ISO 4217 currency code standard.
 * For more information on ISO 4217 codes, refer to the [ISO 4217 documentation](https://www.iso.org/iso-4217-currency-codes.html).
 *
 */
export const FormatCurrency = FormatCurrencyTemplate.bind({});

export const FormatCurrencyWithTranslations = FormatCurrencyWithTranslationsTemplate.bind({});
