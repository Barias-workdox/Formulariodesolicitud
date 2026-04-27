import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const CHLMocks: NicTestMockType = {
  format: new Map([
    [
      undefined,
      [
        {
          rawNic: '1..2-3&4567^89*',
          format: '12.345.678-9',
          clean: '123456789',
        },
        {
          rawNic: '1----9',
          format: '1-9',
          clean: '19',
        },
        {
          rawNic: '12&34ñ5678',
          format: '1.234.567-8',
          clean: '12345678',
        },
      ],
    ],
  ]),
  validation: new Map([
    [
      undefined,
      {
        valid: ['30962127-1', '1-9', '11.111.111-1'],
        invalid: ['ABC123', '12345678-K'],
      },
    ],
  ]),
};
