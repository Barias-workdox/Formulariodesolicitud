import type { ReactElement } from 'react';

import { List } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type SuggestionsButtonProps = WithZIndex<
  WithTestId<{
    isLoading: boolean;
    onClick?(): void;
  }>
>;

/**
 * Suggestions button that opens the suggestions list when clicked.
 */
export const SuggestionsButton = ({
  dataTestId,
  isLoading,
  zIndex,
  onClick,
}: SuggestionsButtonProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <StatefulTooltipNext
      content={t('webdoxAI.suggestionsSection.buttonText')}
      placement="bottomRight"
      showArrow
      zIndex={zIndex}
    >
      <IconButton
        dataTestId={`${dataTestId}--prompt-suggestion-button`}
        onClick={onClick}
        disabled={isLoading}
        kind="tertiary"
        size="32px"
      >
        <List />
      </IconButton>
    </StatefulTooltipNext>
  );
};
