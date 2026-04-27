import { useMemo } from 'react';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import { TextareaControl } from '@components/forms';
import { DetailedRadio } from '@components/radio';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { MAX_OBSERVATIONS_MESSAGE_LENGHT } from '../../legal-whisper-answer-rating.constants';
import {
  detailedRadioOverrides,
  detailedRadioWithTextareaOverrides,
  textareaOverrides,
} from '../../legal-whisper-answer-rating.styles';
import { StyledRadioDescriptionWithTextarea } from '../../styled-components';

import type { DetailedRadioProps } from '@components/radio/components/detailed-radio';
import type { WithTestId } from '@interfaces/common.interfaces';

export type DetailedRadioWithTextareaProps = WithTestId<{
  showObservationTextarea: boolean;
}> &
  DetailedRadioProps;

/**
 * DetailedRadioWithTextarea component is a styled radio button with a textarea for additional observations.
 */
export const DetailedRadioWithTextarea = ({
  'data-testid': dataTestId,
  showObservationTextarea,
  description,
  ...rest
}: DetailedRadioWithTextareaProps): JSX.Element => {
  const [animateRef] = useAutoAnimate();
  const { t } = useTranslation();

  const detailedRadioWithTextareaMergedOverrides = useMemo(() => {
    return mergeOverridesDeep(detailedRadioOverrides, detailedRadioWithTextareaOverrides);
  }, []);

  return (
    <DetailedRadio
      {...rest}
      overrides={detailedRadioWithTextareaMergedOverrides}
      data-testid={dataTestId}
      description={
        <StyledRadioDescriptionWithTextarea ref={animateRef}>
          <Text
            variant="bodySmall"
            margin={0}
            color="neutralSubdued"
          >
            {description}
          </Text>
          {showObservationTextarea && (
            <TextareaControl
              overrides={textareaOverrides}
              name="observations"
              kind="white"
              isBorderless
              placeholder={t('webdoxAI.legalWhisperAnswerRating.observationsPlaceholder')}
              maxLength={MAX_OBSERVATIONS_MESSAGE_LENGHT}
            />
          )}
        </StyledRadioDescriptionWithTextarea>
      }
    />
  );
};
