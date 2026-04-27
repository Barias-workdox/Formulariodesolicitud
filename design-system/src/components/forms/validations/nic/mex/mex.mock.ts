import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const MEXMocks: NicTestMockType = {
  format: new Map([
    [
      undefined,
      [
        {
          rawNic: 'LOREM-12!34_56...XXX',
          clean: 'LOREM-123456...XXX',
          format: 'LOREM-123456...XXX',
        },
        {
          rawNic: 'ÑD!F_8&9#07---23A.BC',
          clean: 'ÑDF8&907---23A.BC',
          format: 'ÑDF8&907---23A.BC',
        },
        {
          rawNic: 'ME%$X&45..67.PQR',
          clean: 'MEX&45..67.PQR',
          format: 'MEX&45..67.PQR',
        },
      ],
    ],
  ]),
  validation: new Map([
    [
      undefined,
      {
        valid: ['CURC9208159V3', 'GARL940215GN7', 'VELA7906061V5'],
        invalid: ['INVALIDRFC123', '123456789012', 'ABCD123456789'],
      },
    ],
  ]),
};
