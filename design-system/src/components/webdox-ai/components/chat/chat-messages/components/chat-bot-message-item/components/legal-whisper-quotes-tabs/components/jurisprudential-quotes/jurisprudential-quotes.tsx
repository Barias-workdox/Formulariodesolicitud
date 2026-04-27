import { memo } from 'react';
import type { ReactElement } from 'react';

import { Launch } from '@carbon/icons-react';

import { Link } from '@components/link';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { usePartialQuotesRendering } from '../../../../../../../../../hooks/use-partial-quotes-rendering.hook';
import { ShowMoreButton } from '../../../../../../../../show-more-button';
import { StyledQuoteContainer, StyledQuotesContainer } from '../../styled-components';

import { styles } from './jurisprudential-quotes.styles';
import { StyledTagsContainer } from './styled-components';
import { StyledQuoteReference } from './styled-components/styled-quote-reference';

import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type JurisprudentialQuotesProps = WithTestId<
  WithZIndex<{
    quotes: Quote[];
  }>
>;

/** LegalQuotes component renders a list of legal references and their associated children. */
const JurisprudentialQuotes = ({
  dataTestId = 'jurisprudential-quotes',
  quotes,
}: JurisprudentialQuotesProps): ReactElement => {
  const { iconStyles } = useCss(styles);
  const { isShowMoreButtonVisible, onToggleShowAllQuotes, partialQuotes, showMoreQuotes } =
    usePartialQuotesRendering({ quotes });

  return (
    <StyledQuotesContainer>
      {partialQuotes.map(({ name, source, children = [], url }, index) => {
        const baseTestId = `${dataTestId}-${index}-${name}`;

        return (
          <StyledQuoteContainer key={baseTestId}>
            <Text
              variant="bodySmall"
              margin={0}
              color="neutralStrong"
            >
              <Link
                dataTestId={`${baseTestId}__link`}
                href={url}
                size="small"
                fontWeight="700"
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
              >
                {name}
                <Launch className={iconStyles} />
              </Link>
              <br />
              {source}
            </Text>
            <StyledTagsContainer>
              {children.map(({ name, fatherName }) => (
                <StyledQuoteReference key={name}>
                  <Text
                    variant="bodySmall"
                    margin={0}
                    color="brandMedium"
                  >
                    {`${name} - ${fatherName}`}
                  </Text>
                </StyledQuoteReference>
              ))}
            </StyledTagsContainer>
          </StyledQuoteContainer>
        );
      })}
      {isShowMoreButtonVisible && (
        <ShowMoreButton
          dataTestId={`${dataTestId}__show-more-button`}
          onClick={onToggleShowAllQuotes}
          isExpanded={showMoreQuotes}
        />
      )}
    </StyledQuotesContainer>
  );
};

const MemoizedJurisprudentialQuotes = memo(JurisprudentialQuotes);

export { MemoizedJurisprudentialQuotes as JurisprudentialQuotes };
