import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { RatingSelector } from '../../../components/legal-whisper-answer-rating/components/rating-selector';
import { RATING_VALUES_ARRAY } from '../../../components/legal-whisper-answer-rating/legal-whisper-answer-rating.constants';

import type { RatingSelectorProps } from '../../../components/legal-whisper-answer-rating/components/rating-selector';
import type { RenderType } from 'test/test-utils';

const baseTestId = 'rating-selector';
const mockOnChange = testHelpers.fn();

const defaultProps: RatingSelectorProps = {
  'data-testid': baseTestId,
  value: 0,
  onChange: mockOnChange,
};

const renderComponent = (props?: Partial<RatingSelectorProps>): RenderType =>
  render(
    <RatingSelector
      {...defaultProps}
      {...props}
    />,
  );

describe('RatingSelector - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly when value is `0`', async () => {
    renderComponent();

    // Render the 5 stars
    RATING_VALUES_ARRAY.forEach((ratingValue) => {
      expect(
        screen.getByTestId(`${defaultProps['data-testid']}--rating-value-${ratingValue}`),
      ).toBeInTheDocument();
    });
    expect(screen.getByTestId(`${baseTestId}--rating-description`)).toHaveTextContent('');
  });

  it.each(RATING_VALUES_ARRAY)(
    'should render the correct description for rating value `%d`',
    (ratingValue) => {
      renderComponent({ value: ratingValue });

      expect(
        screen.getByText(
          t(`webdoxAI.legalWhisperAnswerRating.ratingDescription.value${ratingValue}`),
        ),
      ).toBeInTheDocument();
    },
  );

  it.each(RATING_VALUES_ARRAY)(
    'should render the correct description when hovered for rating value `%d`',
    async (ratingValue) => {
      renderComponent();

      await userEvent.hover(screen.getByTestId(`${baseTestId}--rating-value-${ratingValue}`));

      expect(
        screen.getByText(
          t(`webdoxAI.legalWhisperAnswerRating.ratingDescription.value${ratingValue}`),
        ),
      ).toBeInTheDocument();
    },
  );

  it('should execute `onChange` function correctly', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseTestId}--rating-value-3`));

    expect(mockOnChange).toHaveBeenCalledWith(3);
  });
});
