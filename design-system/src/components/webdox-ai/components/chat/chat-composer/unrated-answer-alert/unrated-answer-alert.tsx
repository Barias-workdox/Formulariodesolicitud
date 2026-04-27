import type { ReactElement } from 'react';

import { Button } from '@components/button';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { StyledContainer } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

export type UnratedAnswerAlertProps = WithTestId & {
  onClick?(): void;
};

/**
 * Component that display a disclaimer when an answer is not rated.
 */
export const UnratedAnswerAlert = ({
  dataTestId = 'unrated-answer-alert',
  onClick = noop,
}: UnratedAnswerAlertProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <Text
        variant="bodySmall"
        margin={0}
      >
        {t('webdoxAI.legalWhisperAnswerRating.unratedAnswerAlert')}
      </Text>
      <Button
        dataTestId={dataTestId}
        onClick={onClick}
        kind="primary"
        size="32px"
      >
        {t('webdoxAI.legalWhisperAnswerRating.rateButton')}
      </Button>
    </StyledContainer>
  );
};
