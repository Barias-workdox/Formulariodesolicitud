import { userEvent } from '@testing-library/user-event';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, renderUseTranslation, screen } from '@test/test-utils';

import {
  administrativeQuotesMock,
  jurisprudentialQuotesMock,
  legalQuotesMock,
} from '../../__mocks__/legal-whisper-quotes.mock';
import { LegalWhisperQuotesTabs } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/legal-whisper-quotes-tabs';

import type { LegalWhisperQuotesTabsProps } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/legal-whisper-quotes-tabs';
import type { RenderType } from '@test/test-utils';

const defaultProps: LegalWhisperQuotesTabsProps = {
  quotes: {
    legalQuotes: legalQuotesMock,
    jurisprudentialQuotes: jurisprudentialQuotesMock,
    administrativeQuotes: administrativeQuotesMock,
  },
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<LegalWhisperQuotesTabsProps>): RenderType =>
  render(
    <LegalWhisperQuotesTabs
      {...defaultProps}
      {...props}
    />,
  );

describe('LegalWhisperQuotesTabs - tests', () => {
  const { t } = renderUseTranslation();

  describe('should render the legal quotes tabs correctly', () => {
    describe.each(legalQuotesMock)(`Legal Quote %#`, ({ name, children }) => {
      it('should render the legal quote correctly', () => {
        renderComponent();

        expect(screen.getByText(name)).toBeInTheDocument();
        expect(
          screen.getByText(t('webdoxAI.chat.relatedArticle', { count: children.length })),
        ).toBeInTheDocument();
      });
    });

    describe('quotes with URLs', () => {
      const quotesWithUrls = legalQuotesMock.filter(({ url }) => url && url !== '');

      it('should have at least one quote with a URL', () => {
        expect(quotesWithUrls.length).toBeGreaterThan(0);
      });

      it.each(quotesWithUrls)('should render a link for $name', ({ url }) => {
        renderComponent();

        const linkElement = screen.getByRole('link');

        expect(linkElement).toHaveAttribute('href', url);
      });
    });
  });

  describe('should render the jurisprudential quotes tabs correctly', () => {
    describe.each(jurisprudentialQuotesMock)(
      `Jurisprudential Quote %#`,
      ({ name, children, source }) => {
        it('should render the jurisprudential quote correctly', async () => {
          renderComponent();

          await userEvent.click(screen.getByText(t('webdoxAI.chat.jurisprudentialQuotes')));

          expect(screen.getByText(name)).toBeInTheDocument();
          expect(screen.getByText(source)).toBeInTheDocument();

          children.forEach(({ name: childName, fatherName }) => {
            expect(screen.getByText(`${childName} - ${fatherName}`)).toBeInTheDocument();
          });
        });
      },
    );

    describe('quotes with URLs', () => {
      const quotesWithUrls = jurisprudentialQuotesMock.filter(({ url }) => url && url !== '');

      it('should have at least one quote with a URL', () => {
        expect(quotesWithUrls.length).toBeGreaterThan(0);
      });

      it.each(quotesWithUrls)('should render a link for $name', async ({ name, url }) => {
        renderComponent();

        await userEvent.click(screen.getByText(t('webdoxAI.chat.jurisprudentialQuotes')));

        const linkElement = screen.getByText(name);

        expect(linkElement).toHaveAttribute('href', url);
      });
    });
  });

  describe('should render the administrative quotes tabs correctly', () => {
    describe.each(administrativeQuotesMock)(
      `Administrative Quotes %#`,
      ({ name, text, date, source }) => {
        it('should render the administrative quote correctly', async () => {
          renderComponent();

          await userEvent.click(screen.getByText(t('webdoxAI.chat.administrativeQuotes')));

          const formattedDate = formatDateAsText(date, TEST_DEFAULT_LOCALE);
          const title = `${name}, ${source}.`;

          expect(screen.getByText(title)).toBeInTheDocument();
          expect(screen.getByText(text)).toBeInTheDocument();
          expect(screen.getByText(formattedDate)).toBeInTheDocument();
        });
      },
    );

    describe('quotes with URLs', () => {
      const quotesWithUrls = administrativeQuotesMock.filter(({ url }) => url && url !== '');

      it('should have at least one quote with a URL', () => {
        expect(quotesWithUrls.length).toBeGreaterThan(0);
      });

      it.each(quotesWithUrls)('should render a link for $name', async ({ name, url, source }) => {
        renderComponent();

        await userEvent.click(screen.getByText(t('webdoxAI.chat.administrativeQuotes')));

        const title = `${name}, ${source}.`;
        const linkElement = screen.getByText(title);

        expect(linkElement).toHaveAttribute('href', url);
      });
    });
  });

  it('should not render jurisprudential quotes tab when is empty', () => {
    renderComponent({ quotes: { ...defaultProps, jurisprudentialQuotes: [] } });

    expect(screen.queryByText(t('webdoxAI.chat.jurisprudentialQuotes'))).not.toBeInTheDocument();
  });

  it('should not render administrative quotes tab when is empty', () => {
    renderComponent({ quotes: { ...defaultProps, administrativeQuotes: [] } });

    expect(screen.queryByText(t('webdoxAI.chat.administrativeQuotes'))).not.toBeInTheDocument();
  });
});
