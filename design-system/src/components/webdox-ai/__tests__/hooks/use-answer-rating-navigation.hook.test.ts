import { act, renderHook } from '@test/test-utils';

import { AnswerProblem, AnswerRatingStep } from '../../components';
import { useAnswerRatingNavigation } from '../../hooks/use-answer-rating-navigation.hook';

describe('useAnswerRatingNavigation - tests', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useAnswerRatingNavigation());

    expect(result.current).toEqual({
      currentStep: AnswerRatingStep.RatingAnswer,
      nextStep: expect.any(Function),
      prevStep: expect.any(Function),
      goToSuccessStep: expect.any(Function),
      resetNavigation: expect.any(Function),
    });
  });

  describe('when current step is `RatingAnswer`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.RatingAnswer }),
      );

      act(() => {
        result.current.nextStep({ answerProblem: AnswerProblem.MainAnswer });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.MainAnswerProblems);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.RatingAnswer }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.RatingAnswer);
    });
  });

  describe('when current step is `MainAnswerProblems`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.MainAnswerProblems }),
      );

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.MainAnswerProblems);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.MainAnswerProblems }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.RatingAnswer);
    });

    it('should navigate to the correct prev step when `alreadyRated` is true', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.MainAnswerProblems }),
      );

      act(() => {
        result.current.prevStep({ alreadyRated: true });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SuccessMessage);
    });
  });

  describe('when current step is `QuoteTypeToImprove`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.QuoteTypeToImprove }),
      );

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.QuoteProblem);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.QuoteTypeToImprove }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.RatingAnswer);
    });

    it('should navigate to the correct prev step when `alreadyRated` is true', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.QuoteTypeToImprove }),
      );

      act(() => {
        result.current.prevStep({ alreadyRated: true });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SuccessMessage);
    });
  });

  describe('when current step is `QuoteProblem`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.QuoteProblem }),
      );

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.QuotesToImprove);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.QuoteProblem }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.QuoteTypeToImprove);
    });
  });

  describe('when current step is `LegalWhisperUsage`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.LegalWhisperUsage }),
      );

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.LegalWhisperUsage);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.LegalWhisperUsage }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.RatingAnswer);
    });

    it('should navigate to the correct prev step when `alreadyRated` is true', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.LegalWhisperUsage }),
      );

      act(() => {
        result.current.prevStep({ alreadyRated: true });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SuccessMessage);
    });
  });

  describe('when current step is `SystemError`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.SystemError }),
      );

      act(() => {
        result.current.nextStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SystemError);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.SystemError }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.RatingAnswer);
    });

    it('should navigate to the correct prev step when `alreadyRated` is true', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.SystemError }),
      );

      act(() => {
        result.current.prevStep({ alreadyRated: true });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SuccessMessage);
    });
  });

  describe('when current step is `SuccessMessage`', () => {
    it('should navigate to the correct next step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.SuccessMessage }),
      );

      act(() => {
        result.current.nextStep({ answerProblem: AnswerProblem.MainAnswer });
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.MainAnswerProblems);
    });

    it('should navigate to the correct prev step', () => {
      const { result } = renderHook(() =>
        useAnswerRatingNavigation({ initialStep: AnswerRatingStep.SuccessMessage }),
      );

      act(() => {
        result.current.prevStep();
      });

      expect(result.current.currentStep).toBe(AnswerRatingStep.SuccessMessage);
    });
  });
});
