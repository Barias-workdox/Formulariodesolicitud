import { addPrefixToStringClosure } from '@utils/string.util';

import { FOOTER_DATA_TEST_ID_BASE } from '../constants/data-test-id.constant';

export const composeDataTestId = addPrefixToStringClosure(FOOTER_DATA_TEST_ID_BASE);
