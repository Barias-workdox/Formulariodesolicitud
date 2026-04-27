import { getWebdoxAIUsageStatus } from '../../utils/webdox-ai-plans.utils';

describe('WebdoxAIPlansUtils - tests', () => {
  describe('getWebdoxAIUsageStatus', () => {
    it('should return the correct usage status when the remaining requests are over the 20% of the total requests', () => {
      expect(getWebdoxAIUsageStatus({ remainingRequests: 80, totalRequests: 100 })).toBe('active');
    });
    it('should return the correct usage status when the remaining requests are under the 20% of the total requests', () => {
      expect(getWebdoxAIUsageStatus({ remainingRequests: 20, totalRequests: 100 })).toBe('low');
    });
    it('should return the correct usage status when the remaining requests are 0', () => {
      expect(getWebdoxAIUsageStatus({ remainingRequests: 0, totalRequests: 100 })).toBe(
        'exhausted',
      );
    });
  });
});
