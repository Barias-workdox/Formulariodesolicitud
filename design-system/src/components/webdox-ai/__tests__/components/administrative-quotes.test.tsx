import { formatDateAsText } from '@components/utils/strings/date.utils';
import { TEST_DEFAULT_LOCALE, render, screen } from '@test/test-utils';

import { administrativeQuotesMock } from '../../__mocks__/legal-whisper-quotes.mock';
import { AdministrativeQuotes } from '../../components/chat/chat-messages/components/chat-bot-message-item/components/legal-whisper-quotes-tabs/components/administrative-quotes';

import type { RenderType } from '@test/test-utils';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (): RenderType =>
  render(<AdministrativeQuotes quotes={administrativeQuotesMock} />);

describe('AdministrativeQuotes - tests', () => {
  describe.each(administrativeQuotesMock)(
    `Administrative Quotes %#`,
    ({ name, text, date, source }) => {
      it('should render the administrative quote correctly', () => {
        renderComponent();

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

    it.each(quotesWithUrls)('should render a link for $name', ({ name, url, source }) => {
      renderComponent();

      const title = `${name}, ${source}.`;
      const linkElement = screen.getByText(title);

      expect(linkElement).toHaveAttribute('href', url);
    });
  });
});
