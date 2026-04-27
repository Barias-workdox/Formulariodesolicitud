import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const BRAMocks: NicTestMockType = {
  validation: new Map([
    [
      undefined,
      {
        valid: ['123.456.789-09', '987.654.321-00', '555.555.555-55'],
        invalid: ['123.456.789-01', '987.654.321-11', '555.555.555-59'],
      },
    ],
  ]),
};
