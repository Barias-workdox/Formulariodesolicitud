import type { PropsWithChildren, ReactElement } from 'react';

import { AddAlt, SubtractAlt } from '@carbon/icons-react';

import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import { StyledContainer } from './styled-components/styled-container';
import { StyledDivider } from './styled-components/styled-divider';

import type { WithTestId } from '@interfaces/common.interfaces';

export type ShowMoreButtonProps = PropsWithChildren<
  WithTestId<{
    isExpanded: boolean;
    withDivider?: boolean;
    onClick(): void;
  }>
>;

/**
 * Component that renders a button that toggles between showing more or less quotes.
 */
export const ShowMoreButton = ({
  dataTestId = 'show-more-button',
  isExpanded,
  withDivider = true,
  onClick,
}: ShowMoreButtonProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      {withDivider && <StyledDivider />}
      <Button
        dataTestId={dataTestId}
        size="32px"
        kind="control"
        startEnhancer={isExpanded ? <SubtractAlt /> : <AddAlt />}
        onClick={onClick}
      >
        {isExpanded ? t('webdoxAI.chat.showLessQuotes') : t('webdoxAI.chat.showMoreQuotes')}
      </Button>
      {withDivider && <StyledDivider />}
    </StyledContainer>
  );
};
