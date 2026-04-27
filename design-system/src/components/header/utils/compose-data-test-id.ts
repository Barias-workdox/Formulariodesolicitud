import { addPrefixToStringClosure } from '@utils/string.util';

import { HEADER_DATA_TEST_ID_BASE } from '../constants/data-test-id.constant';

export const composeDataTestId = addPrefixToStringClosure(HEADER_DATA_TEST_ID_BASE);
