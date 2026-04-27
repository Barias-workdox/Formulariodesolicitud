import { memo } from 'react';
import type { ReactElement } from 'react';

import { Launch, Pen } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { Link } from '@components/link';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';

import { usePartialQuotesRendering } from '../../../../../../../../../hooks/use-partial-quotes-rendering.hook';
import { ShowMoreButton } from '../../../../../../../../show-more-button';
import { StyledQuoteContainer, StyledQuotesContainer } from '../../styled-components';

import { styles } from './administrative-quotes.styles';
import { StyledQuoteHeader, StyledQuoteHeaderTitle } from './styled-components';

import type { Quote } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type AdministrativeQuotesProps = WithTestId<
  WithZIndex<{
    quotes: Quote[];
  }>
>;

/** AdministrativeQuotes component renders a list of legal references. */
const AdministrativeQuotes = ({
  dataTestId = 'administrative-quotes',
  quotes,
}: AdministrativeQuotesProps): ReactElement => {
  const { iconStyles, theme } = useCss(styles);
  const { isShowMoreButtonVisible, onToggleShowAllQuotes, partialQuotes, showMoreQuotes } =
    usePartialQuotesRendering({ quotes });

  const { formatDateAsText } = useDateUtilsWithLocale();

  return (
    <StyledQuotesContainer>
      {partialQuotes.map(({ name, source, text, url = '', date = '' }, index) => {
        const baseTestId = `${dataTestId}-${index}-${name}`;
        const isUrlValid = url !== '';
        const headerTitle = `${name}, ${source}.`;
        const formattedDate = formatDateAsText(date);

        return (
          <StyledQuoteContainer
            key={baseTestId}
            $gap={theme.spacing.spacingXs}
          >
            <StyledQuoteHeader>
              <BackgroundIcon
                Icon={Pen}
                backgroundColor="peaceSubtle"
                iconColor="peace"
                size="24px"
              />
              <StyledQuoteHeaderTitle>
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutral"
                  fontWeight={700}
                >
                  {isUrlValid ? (
                    <Link
                      dataTestId={`${baseTestId}__link`}
                      href={url}
                      size="small"
                      fontWeight="700"
                      onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                        event.stopPropagation()
                      }
                    >
                      {headerTitle}
                      <Launch className={iconStyles} />
                    </Link>
                  ) : (
                    headerTitle
                  )}
                </Text>
                <Text
                  variant="bodySmall"
                  margin={0}
                  color="neutral"
                >
                  {formattedDate}
                </Text>
              </StyledQuoteHeaderTitle>
            </StyledQuoteHeader>
            <Text
              variant="bodySmall"
              margin={0}
              color="neutralStrong"
            >
              {text}
            </Text>
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

const MemoizedAdministrativeQuotes = memo(AdministrativeQuotes);

export { MemoizedAdministrativeQuotes as AdministrativeQuotes };
