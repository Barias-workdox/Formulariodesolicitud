import React from '@storybook/react-vite';

import { formatDate, formatDateAsText, formatDatetime } from './date.utils';

import type { Meta, StoryFn } from '@storybook/react-vite';

type DateArg = number | string | undefined;

/** Converts Storybook date control (timestamp or ISO string) to ISO string for formatDate/formatDatetime. */
function toIsoString(value: DateArg): string {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  const d = new Date(value);

  return Number.isNaN(d.getTime()) ? '' : d.toISOString();
}

/** Default: 27 Jan 2026 14:30 UTC so output is consistent across timezones (ES: 27 ene 2026, EN: Jan 27, 2026, PT: 27 jan 2026). */
const DEFAULT_DATE_MS = new Date('2026-01-27T14:30:00.000Z').getTime();

const meta: Meta = {
  title: 'Utils/Date',
  args: {
    date: DEFAULT_DATE_MS,
    locale: 'es',
    showTime: true,
    defaultValue: 'No date',
  },
  argTypes: {
    date: {
      control: 'date',
      description:
        'Pick a date to format. Use the date picker or clear to see empty/invalid handling.',
    },
    locale: {
      options: ['es', 'en', 'pt'],
      control: { type: 'select' },
      description: 'Switch locale to test ES (27 ene 2026), EN (Jan 27, 2026), PT (27 jan 2026).',
    },
    showTime: {
      control: 'boolean',
      description: 'Include time (24h) in FormatDatetime and FormatDateAsText.',
    },
    defaultValue: {
      control: 'text',
      description: 'Shown when date is invalid or empty (FormatDateAsText).',
    },
  },
  parameters: {
    docs: {
      source: { type: 'code' },
      description: {
        component:
          'Use **locale** to test the 3 languages (ES, EN, PT). Each story documents which controls apply.',
      },
    },
  },
};

export default meta;

/** 1) Numeric date only: DD/MM/YYYY (ES/PT) or MM/DD/YYYY (EN). showTime not used — hidden in controls. */
export const FormatDate: StoryFn<{
  date: DateArg;
  locale: 'es' | 'en' | 'pt';
  showTime?: boolean;
  defaultValue?: string;
}> = ({ date, locale }) => {
  const iso = toIsoString(date);

  return (
    <div>
      <strong>Output:</strong> {iso ? formatDate(iso, locale) : '—'}
    </div>
  );
};

FormatDate.argTypes = {
  showTime: { table: { disable: true } },
  defaultValue: { table: { disable: true } },
};

FormatDate.parameters = {
  docs: {
    description: {
      story:
        'Controls: **date**, **locale**. Use locale to see ES (dd/MM/yyyy), EN (MM/dd/yyyy), PT (dd/MM/yyyy).',
    },
  },
};

/** 2) Numeric date + time (24h), comma-separated. Toggle showTime. */
export const FormatDatetime: StoryFn<{
  date: DateArg;
  locale: 'es' | 'en' | 'pt';
  showTime: boolean;
  defaultValue?: string;
}> = ({ date, locale, showTime }) => {
  const iso = toIsoString(date);

  return (
    <div>
      <strong>Output:</strong> {iso ? formatDatetime(iso, locale, showTime) : '—'}
    </div>
  );
};

FormatDatetime.args = {
  showTime: true,
};

FormatDatetime.argTypes = {
  defaultValue: { table: { disable: true } },
};

FormatDatetime.parameters = {
  docs: {
    description: {
      story:
        'Controls: **date**, **locale**, **showTime**. Examples: ES "27/01/2026, 14:30", EN "01/27/2026, 14:30", PT "27/01/2026, 14:30".',
    },
  },
};

/** 3) Human-readable: "27 ene 2026" / "Jan 27, 2026" (optionally with 24h time). */
export const FormatDateAsText: StoryFn<{
  date: DateArg;
  locale: 'es' | 'en' | 'pt';
  showTime: boolean;
  defaultValue: string;
}> = ({ date, locale, showTime, defaultValue }) => {
  const out = formatDateAsText(date, locale, { showTime, defaultValue });

  return (
    <div>
      <strong>Output:</strong> {out || '—'}
    </div>
  );
};

FormatDateAsText.args = {
  showTime: false,
  defaultValue: 'No date',
};

FormatDateAsText.parameters = {
  docs: {
    description: {
      story:
        'Controls: **date**, **locale**, **showTime**, **defaultValue**. Use locale to see ES "27 ene 2026", EN "Jan 27, 2026", PT "27 jan 2026". Clear date to test defaultValue.',
    },
  },
};
