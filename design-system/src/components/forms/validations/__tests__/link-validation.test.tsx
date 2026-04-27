import * as yup from 'yup';

import { LINK_STRICTNESS_MODES } from '@components/forms/constants/link-validation.constants';
import { renderHook } from '@test/test-utils';

import { useLinkValidation } from '../hooks';
import { linkValidationSchema, noLinkValidationRule } from '../link.validation';

import type { LinkStrictnessModeType } from '@components/forms/interfaces';

const defaultLinkFormatErrorMessage = 'format error';

/** Reusable mock link validation schema */
const mockLinkValidationSchema = (strictnessValidationMode) => {
  return yup.object({
    inputControl: linkValidationSchema({
      schema: yup,
      containsLinkErrorMessage: defaultLinkFormatErrorMessage,
      strictnessValidationMode,
    }),
  });
};

/** Reusable mock for link validation schema hook */
const mockLinkValidationSchemaHook = ({ schema }: { schema: yup.AnySchema }) => {
  return yup
    .object({
      inputControl: schema,
    })
    .required();
};

/** Reusable hook call */
const mockUseLinkValidation = () => renderHook(() => useLinkValidation());

const mockInvalidStrings = [
  'app.dashes-dash.com',
  'www.facebook.com',
  'facebook.com',
  'fb.com/hello_123',
  'fb.com/hel-lo',
  'fb.com/hello/goodbye',
  'fb.com/hello/goodbye?okay',
  'fb.com/hello/goodbye?okay=alright',
  'Hello www.google.com',
  'Hello www.google.com World http://yahoo.com',
  'https://www.google.com.tr/admin/subPageqs1=sss1&qs2=sss2&qs3=sss3#Services',
  'https://google.com.tr/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'http://google.com/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'ftp://google.com/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'www.google.com.tr/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'www.google.com/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'drive.google.com/test/subPage?qs1=sss1&qs2=sss2&qs3=sss3#Services',
  'https://www.example.pl',
  'http://www.example.com',
  'www.example.pl',
  'example.com',
  'http://blog.example.com',
  'http://www.example.com/product',
  'http://www.example.com/products?id=1&page=2',
  'http://www.example.com#up',
  'http://255.255.255.255',
  '255.255.255.255',
  'shop.facebook.org/derf.html',
  '192.0.0.1',
  'http://192.0.0.1',
  'Test: www.google.com',
  'chrome://extensions',
  'ftp://127.0.0.1',
  'www.google.cl',
  'www.google.com',
];

const mockValidStrings = [
  'Test',
  'Test 1',
  '   Test',
  ' Test . 1',
  'Empresa TEST S.A A-b.C//d',
  'Hola S.A. Corp, C.a.',
  'http: //www . google. com',
];

const mockValidationStrings = {
  HARD_MODE: {
    validStrings: mockValidStrings,
    invalidStrings: [
      'anything123://extensions',
      'Lorem ipsum Company-name.MX',
      'localhost:3000',
      'example.site',
      ...mockInvalidStrings,
    ],
  },
  SOFT_MODE: {
    validStrings: [
      ...mockValidStrings,
      'anything123://extensions',
      'Lorem ipsum Company-name.MX',
      'localhost:3000',
      'example.site',
    ],
    invalidStrings: mockInvalidStrings,
  },
};

const strictnessModesKeys = Object.keys(LINK_STRICTNESS_MODES);

strictnessModesKeys.forEach((strictnessValidationMode: LinkStrictnessModeType) => {
  describe(`noLinkValidationRule util on ${strictnessValidationMode} - tests`, () => {
    mockValidationStrings[strictnessValidationMode].validStrings.forEach((value) => {
      it(`should validate truthy when strings not contains any link: ${value}`, () => {
        expect(noLinkValidationRule(value, strictnessValidationMode)).toBeTruthy();
      });
    });
    mockValidationStrings[strictnessValidationMode].invalidStrings.forEach((value) => {
      it(`should validate falsy when strings contains any link: ${value}`, () => {
        expect(noLinkValidationRule(value, strictnessValidationMode)).toBeFalsy();
      });
    });
  });

  describe(`mockLinkValidationSchema util on ${strictnessValidationMode} - tests`, () => {
    mockValidationStrings[strictnessValidationMode].validStrings.forEach((value) => {
      it(`should validate schema correctly for: ${value}`, () => {
        const optionalEmptySchema = mockLinkValidationSchema(strictnessValidationMode);

        expect(() => optionalEmptySchema.validateSync({ inputControl: value })).not.toThrow();
      });
    });
    mockValidationStrings[strictnessValidationMode].invalidStrings.forEach((value) => {
      it(`should validate schema incorrectly for: ${value}`, () => {
        const optionalEmptySchema = mockLinkValidationSchema(strictnessValidationMode);

        expect(() => optionalEmptySchema.validateSync({ inputControl: value })).toThrow();
      });
    });
  });

  describe(`mockUseLinkValidation hook on ${strictnessValidationMode} - tests`, () => {
    const {
      result: {
        current: { linkValidationSchema, containsLinkErrorMessage },
      },
    } = mockUseLinkValidation();

    mockValidationStrings[strictnessValidationMode].validStrings.forEach((value) => {
      it(`should validate schema correctly for: ${value}`, () => {
        const optionalEmptySchema = mockLinkValidationSchemaHook({
          schema: linkValidationSchema({ schema: yup, strictnessValidationMode }),
        });

        expect(() => optionalEmptySchema.validateSync({ inputControl: value })).not.toThrow();
      });
    });
    mockValidationStrings[strictnessValidationMode].invalidStrings.forEach((value) => {
      it(`should validate schema incorrectly for: ${value}`, () => {
        const optionalEmptySchema = mockLinkValidationSchemaHook({
          schema: linkValidationSchema({ schema: yup, strictnessValidationMode }),
        });

        expect(() => optionalEmptySchema.validateSync({ inputControl: value })).toThrow(
          containsLinkErrorMessage,
        );
      });
    });
  });
});
