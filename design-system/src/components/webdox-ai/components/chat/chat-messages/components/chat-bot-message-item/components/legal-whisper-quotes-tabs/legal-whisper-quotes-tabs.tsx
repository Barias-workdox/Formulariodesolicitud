import { useRef } from 'react';

import { StatefulTabs, Tab } from '@components/tabs';
import { useTranslation } from '@components/utils';

import { AdministrativeQuotes } from './components/administrative-quotes';
import { JurisprudentialQuotes } from './components/jurisprudential-quotes';
import { LegalQuotes } from './components/legal-quotes';
import { LegalWhisperQuotesTabKeys } from './legal-whisper-quotes-tabs.constants';
import { tabsOverrides } from './legal-whisper-quotes-tabs.overrides';

import type { LegalWhisperAnswerType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type LegalWhisperQuotesTabsProps = WithZIndex<
  WithTestId<{
    quotes: LegalWhisperAnswerType['quotes'];
  }>
>;

/**
 * LegalWhisperQuotesTabs component renders tabs for different type of legal quotes.
 */
export const LegalWhisperQuotesTabs = ({
  dataTestId = 'legal-whisper-quotes-tabs',
  quotes,
  zIndex,
}: LegalWhisperQuotesTabsProps): JSX.Element => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { legalQuotes = [], jurisprudentialQuotes = [], administrativeQuotes = [] } = quotes || {};

  const shouldRenderJurisprudentialQuotes = jurisprudentialQuotes.length > 0;
  const shouldRenderAdministrativeQuotes = administrativeQuotes.length > 0;

  /**
   * Handles the tab change event.
   * Scrolls the tabs into view to adjust their position since the tabs have different sizes.
   *
   * TODO: This logic will be removed in the future when the tabs are styled properly.
   */
  const handleChange = (): void => {
    setTimeout(() => {
      if (ref.current && ref.current.scrollIntoView) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div ref={ref}>
      <StatefulTabs
        data-testid={`${dataTestId}__tabs`}
        overrides={tabsOverrides}
        onChange={handleChange}
      >
        <Tab
          key={LegalWhisperQuotesTabKeys.LegalQuotes}
          data-testid={`${dataTestId}__legal-tab`}
          title={t('webdoxAI.chat.legalQuotes')}
        >
          <LegalQuotes
            quotes={legalQuotes}
            dataTestId={`${dataTestId}__legal-quotes`}
            zIndex={zIndex}
          />
        </Tab>
        {shouldRenderJurisprudentialQuotes && (
          <Tab
            key={LegalWhisperQuotesTabKeys.JurisprudentialQuotes}
            data-testid={`${dataTestId}__jurisprudential-tab`}
            title={t('webdoxAI.chat.jurisprudentialQuotes')}
          >
            <JurisprudentialQuotes
              quotes={jurisprudentialQuotes}
              dataTestId={`${dataTestId}__jurisprudential-quotes`}
              zIndex={zIndex}
            />
          </Tab>
        )}
        {shouldRenderAdministrativeQuotes && (
          <Tab
            key={LegalWhisperQuotesTabKeys.AdministrativeQuotes}
            data-testid={`${dataTestId}__administrative-tab`}
            title={t('webdoxAI.chat.administrativeQuotes')}
          >
            <AdministrativeQuotes
              quotes={administrativeQuotes}
              dataTestId={`${dataTestId}__administrative-quotes`}
              zIndex={zIndex}
            />
          </Tab>
        )}
      </StatefulTabs>
    </div>
  );
};
