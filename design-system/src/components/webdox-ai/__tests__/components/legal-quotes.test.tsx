import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { legalQuotesMock } from '../../__mocks__/legal-whisper-quotes.mock';
import { LegalQuotes } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/legal-whisper-quotes-tabs/components/legal-quotes';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType => render(<LegalQuotes quotes={legalQuotesMock} />);

describe('LegalQuotes - tests', () => {
  const { t } = renderUseTranslation();

  describe.each(legalQuotesMock)(`Legal Quote %#`, ({ name, children }) => {
    it('should render the legal quote correctly', () => {
      renderComponent();

      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t('webdoxAI.chat.relatedArticle', { count: children.length })),
      ).toBeInTheDocument();
    });

    it('should render the articles correctly', async () => {
      renderComponent();

      await userEvent.click(screen.getByText(name).parentElement);

      await waitFor(() => {
        children.forEach(({ text, name }) => {
          expect(screen.getByText(`${name}:`)).toBeInTheDocument();
          expect(screen.getByText(text)).toBeInTheDocument();
        });
      });
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
