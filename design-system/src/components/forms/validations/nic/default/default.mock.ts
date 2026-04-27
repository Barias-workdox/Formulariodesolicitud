import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const defaultMocks: NicTestMockType = {
  format: new Map([
    [
      undefined,
      [
        {
          rawNic: 'ABC#@123-DEF&456.abc',
          clean: 'ABC123-DEF456.abc',
          format: 'ABC123-DEF456.abc',
        },
        { rawNic: 'X_Y.Z-987&POQ', clean: 'XY.Z-987POQ', format: 'XY.Z-987POQ' },
        { rawNic: 'Hello!@#$World', clean: 'HelloWorld', format: 'HelloWorld' },
      ],
    ],
  ]),
};
