import { BRAMocks } from '../bra/bra.mock';
import { CHLMocks } from '../chl/chl.mock';
import { COLMocks } from '../col/col.mocks';
import { defaultMocks } from '../default/default.mock';
import { ECUMocks } from '../ecu/ecu.mock';
import { MEXMocks } from '../mex/mex.mock';
import { PERMocks } from '../per/per.mock';

import type { NicTestMockType } from './nic-test.interface';
import type { CountryCodeType } from '../../../../utils/interfaces';

export const allNicMocks = new Map<CountryCodeType, NicTestMockType>([
  ['CHL', CHLMocks],
  ['BRA', BRAMocks],
  ['COL', COLMocks],
  ['MEX', MEXMocks],
  ['PER', PERMocks],
  ['ECU', ECUMocks],
  [undefined, defaultMocks],
]);
