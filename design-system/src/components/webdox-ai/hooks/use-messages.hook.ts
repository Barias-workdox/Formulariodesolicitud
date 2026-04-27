import { useCallback, useMemo } from 'react';

import { useTranslation } from '@components/utils';
import { messageUtils } from '@components/webdox-ai/utils/message.util';

import type { AnswerReference } from '@components/webdox-ai/interfaces';

export interface UseMessagesProps {
  value: string;
  answerReferences?: AnswerReference[];
}

export interface UseMessagesReturn {
  /**
   * processed value to render in the chat content
   */
  replacedValue: string;
  /**
   * this reference map will help to get faster the page number with the reference text
   *
   * @example
   * ```
   * {
   *   "page 1": 1,
   *   "page 4": 4,
   *   ...
   * }
   * ```
   */
  referenceMap: { [x: string]: number };
}

/**
 * Hook to manage messages formatting
 */
export const useMessages = ({ value, answerReferences }: UseMessagesProps): UseMessagesReturn => {
  const { t } = useTranslation();

  const pageTranslation = useCallback(
    (pageNumber: number): string => t('webdoxAI.chat.pageNumber', { pageNumber }),
    [t],
  );
  const sanitizedValue = useMemo(() => messageUtils.sanitizeString(value), [value]);
  const replacedValue = useMemo(
    () =>
      messageUtils.getMessageWithReplacedEncodedData({
        message: sanitizedValue,
        getReferenceName: pageTranslation,
        availableReferences: answerReferences,
      }),
    [answerReferences, pageTranslation, sanitizedValue],
  );

  const referenceMap = useMemo(
    () => messageUtils.getMessageMapReferences(value || '', pageTranslation),
    [pageTranslation, value],
  );

  return {
    replacedValue,
    referenceMap,
  };
};
