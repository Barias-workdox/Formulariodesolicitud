import { render, screen } from '@test/test-utils';

import { jurisprudentialQuotesMock } from '../../__mocks__/legal-whisper-quotes.mock';
import { JurisprudentialQuotes } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/legal-whisper-quotes-tabs/components/jurisprudential-quotes';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType =>
  render(<JurisprudentialQuotes quotes={jurisprudentialQuotesMock} />);

describe('JurisprudentialQuotes - tests', () => {
  describe.each(jurisprudentialQuotesMock)(
    `Jurisprudential Quotes %#`,
    ({ name, source, children }) => {
      it('should render the jurisprudential quote correctly', () => {
        renderComponent();

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

    it.each(quotesWithUrls)('should render a link for $name', ({ name, url }) => {
      renderComponent();

      const linkElement = screen.getByText(name);

      expect(linkElement).toHaveAttribute('href', url);
    });
  });
});
