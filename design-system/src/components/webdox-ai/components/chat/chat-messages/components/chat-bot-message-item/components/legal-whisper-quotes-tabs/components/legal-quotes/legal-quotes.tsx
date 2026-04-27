import { memo } from 'react';
import type { ReactElement } from 'react';

import { CollapsibleBox, Panel } from '@components/collapsible-box/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { MIN_LEGAL_QUOTES_VISIBLE } from '@components/webdox-ai/constants/webdox-ai.constants';
import { usePartialQuotesRendering } from '@components/webdox-ai/hooks/use-partial-quotes-rendering.hook';

import { ShowMoreButton } from '../../../../../../../../show-more-button';
import { MAX_LEGAL_QUOTES_CONTAINER_HEIGHT } from '../../legal-whisper-quotes-tabs.constants';
import { StyledQuotesContainer } from '../../styled-components';

import { PanelTitle } from './components/panel-title';
import { StyledListItem } from './styled-components/styled-list-item';
import { StyledListItems } from './styled-components/styled-list-items';

import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface LegalQuotesProps extends WithTestId {
  quotes: Quote[];
  zIndex?: number;
}

/** LegalQuotes component renders a list of legal references and their associated children. */
const LegalQuotes = ({
  dataTestId = 'legal-quotes',
  quotes,
  zIndex,
}: LegalQuotesProps): ReactElement => {
  const { t } = useTranslation();

  const { isShowMoreButtonVisible, onToggleShowAllQuotes, partialQuotes, showMoreQuotes } =
    usePartialQuotesRendering({
      quotes,
      minLegalQuotesVisible: MIN_LEGAL_QUOTES_VISIBLE,
    });

  return (
    <StyledQuotesContainer>
      <CollapsibleBox size="small">
        {partialQuotes.map(({ name, children = [], url }, index) => {
          const baseTestId = `${dataTestId}-${index}-${name}`;

          return (
            <Panel
              key={baseTestId}
              title={
                <PanelTitle
                  url={url}
                  zIndex={zIndex}
                >
                  {name}
                </PanelTitle>
              }
              maxHeight={MAX_LEGAL_QUOTES_CONTAINER_HEIGHT}
              endEnhancer={
                <Text
                  variant="microCopy"
                  color="neutralSubdued"
                  margin={0}
                >
                  {t('webdoxAI.chat.relatedArticle', {
                    count: children.length,
                  })}
                </Text>
              }
            >
              <StyledListItems>
                {children.map((article) => {
                  const { name, text } = article;

                  return (
                    <StyledListItem key={`${baseTestId}-${name}`}>
                      <Text
                        variant="bodySmall"
                        color="neutralStrong"
                        margin={0}
                      >
                        <Text
                          variant="bodySmall"
                          color="neutral"
                          margin={0}
                          fontWeight="700"
                          as="span"
                        >{`${name}: `}</Text>
                        {text}
                      </Text>
                    </StyledListItem>
                  );
                })}
              </StyledListItems>
            </Panel>
          );
        })}
        {isShowMoreButtonVisible && (
          <ShowMoreButton
            dataTestId={`${dataTestId}__show-more-button`}
            onClick={onToggleShowAllQuotes}
            isExpanded={showMoreQuotes}
          />
        )}
      </CollapsibleBox>
    </StyledQuotesContainer>
  );
};

const MemoizedLegalQuotes = memo(LegalQuotes);

export { MemoizedLegalQuotes as LegalQuotes };
