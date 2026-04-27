import { addPrefixToStringClosure } from '@utils/string.util';

import { ANSWER_RATING_BASE_TEST_ID } from '../legal-whisper-answer-rating.constants';

export const composeDataTestId = addPrefixToStringClosure(ANSWER_RATING_BASE_TEST_ID);
