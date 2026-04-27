import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const ECUMocks: NicTestMockType = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - all ok but seems a TS bug with Maps
  validation: new Map([
    [
      undefined,
      {
        valid: ['0910001509001', '1012345678', '2409876543001'],
        invalid: ['1234567890123', '3001234567890', '1701234567000'],
      },
    ],
    [
      'CE',
      {
        valid: ['0123456789', '1012345678', '2412345678'],
        invalid: ['234567890', '512345678', '301234567'],
      },
    ],
    [
      'CI',
      {
        valid: ['0123456789', '1012345678', '2412345678'],
        invalid: ['234567890', '512345678', '301234567'],
      },
    ],
    [
      'RUC',
      {
        valid: ['0910001509001', '1701234567001', '2409876543001'],
        invalid: ['1234567890123', '3001234567890', '1701234567000'],
      },
    ],
    [
      'PAS',
      {
        valid: ['A123456789', 'A987654321', 'A012345678'],
        invalid: ['B123456789', 'A12345678', 'A1234567890'],
      },
    ],
  ]),
};
