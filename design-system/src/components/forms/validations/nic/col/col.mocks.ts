import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const COLMocks: NicTestMockType = {
  validation: new Map([
    [
      undefined,
      {
        valid: ['12345678901', '123456-78901', '123456'],
        invalid: ['INVALIDNIT', '12.34-56', '1234567890-'],
      },
    ],
    [
      'PAS',
      {
        valid: ['AB123456', 'CD987654', 'EF012345'],
        invalid: ['ABC123456', 'AB12345', 'ABCD123'],
      },
    ],
  ]),
};
