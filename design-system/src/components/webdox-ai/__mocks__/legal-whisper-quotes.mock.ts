import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';

export const legalQuotesMock: Quote[] = [
  {
    name: 'Law N°10.000',
    url: 'https://www.example.com',
    children: [
      {
        name: 'Article 1',
        text: 'This is the first article',
      },
    ],
  },
  {
    name: 'Law N°20.000',
    url: '',
    children: [
      {
        name: 'Article 2',
        text: 'This is the second article',
      },
      {
        name: 'Article 3',
        text: 'This is the third article',
      },
    ],
  },
];

export const jurisprudentialQuotesMock: Quote[] = [
  {
    name: 'Jurisprudential 1',
    url: 'https://www.jurisprudential1.com',
    source: 'Source 1',
    children: [
      {
        name: 'Article 1',
        text: 'This is the first article',
        fatherName: 'Law 1',
      },
    ],
  },
  {
    name: 'Jurisprudential 2',
    url: 'https://www.jurisprudential2.com',
    source: 'Source 2',
    children: [
      {
        name: 'Article 2',
        text: 'This is the first article',
        fatherName: 'Law 2',
      },
    ],
  },
];

export const administrativeQuotesMock: Quote[] = [
  {
    name: 'Administrative 1',
    url: 'https://www.administrative1.com',
    text: 'Text 1',
    date: '2023-01-02T13:16:23.690-04:00',
  },
  {
    name: 'Administrative 2',
    text: 'Text 2',
    date: '2023-01-03T13:16:23.690-04:00',
  },
];

export const legalWhisperAnswerQuotes = {
  legalQuotes: legalQuotesMock,
  jurisprudentialQuotes: jurisprudentialQuotesMock,
  administrativeQuotes: administrativeQuotesMock,
};
