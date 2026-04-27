import { forwardRef, useMemo, useState } from 'react';

import { Star, StarFilled } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { COMMON_HEIGHT_44 } from '@constants/common.constants';

import {
  RATING_DESCRIPTION_WIDTH,
  RATING_VALUES_ARRAY,
} from '../../legal-whisper-answer-rating.constants';

import { styles } from './rating-selector.styles';
import { StyledContainer, StyledIconsContainer } from './styled-components';

import type { WithTestId } from '@interfaces/common.interfaces';

export type RatingSelectorProps = WithTestId<{
  value: number;
  onChange(value: number): void;
}>;

/**
 * RatingSelector component allows users to select a rating from 1 to 5 stars.
 * It displays the selected rating and provides a description based on the rating value.
 */
export const RatingSelector = forwardRef<HTMLDivElement, RatingSelectorProps>(
  function RatingSelectorInner({ 'data-testid': dataTestId, value, onChange }, ref) {
    const [hoveredStar, setHoveredStar] = useState(0);

    const { t } = useTranslation();

    const ratingDescription = useMemo(() => {
      const ratingValue = value || hoveredStar;

      return ratingValue
        ? t(`webdoxAI.legalWhisperAnswerRating.ratingDescription.value${ratingValue}`)
        : '';
    }, [t, value, hoveredStar]);

    return (
      <StyledContainer ref={ref}>
        <StyledIconsContainer>
          {RATING_VALUES_ARRAY.map((ratingValue) => {
            const StarIcon = value < ratingValue ? Star : StarFilled;

            return (
              <IconButton
                data-testid={`${dataTestId}--rating-value-${ratingValue}`}
                key={ratingValue}
                size="56px"
                onMouseEnter={() => setHoveredStar(ratingValue)}
                onMouseLeave={() => setHoveredStar(0)}
                shape="circle"
                onClick={() => onChange(ratingValue)}
              >
                <StarIcon
                  size={COMMON_HEIGHT_44}
                  style={styles.iconStyles}
                />
              </IconButton>
            );
          })}
        </StyledIconsContainer>
        <Text
          data-testid={`${dataTestId}--rating-description`}
          variant="bodySmall"
          color="neutralSubdued"
          maxWidth={RATING_DESCRIPTION_WIDTH}
          margin={0}
          textAlign="center"
          height={COMMON_HEIGHT_44}
        >
          {ratingDescription}
        </Text>
      </StyledContainer>
    );
  },
);

RatingSelector.displayName = 'RatingSelector';
