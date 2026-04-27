import { useEffect } from 'react';

import React from '@storybook/react-vite';
import * as yup from 'yup';

import { InputControl } from '../../components/input/input-control';
import { LINK_STRICTNESS_MODES } from '../../constants/link-validation.constants';
import { useForm } from '../../hooks';
import { FormProvider } from '../../utils';

import { useLinkValidation } from './use-link-validation';

import type { LinkStrictnessModeType } from '../../interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Utils/LinkValidation',
  args: {
    strictnessValidationMode: 'SOFT_MODE',
  },
  argTypes: {
    strictnessValidationMode: {
      options: Object.keys(LINK_STRICTNESS_MODES),
      control: { type: 'inline-radio' },
      defaultValue: 'SOFT_MODE',
    },
  },
} as Meta<{ strictnessValidationMode: LinkStrictnessModeType }>;

/** Reusable link validation schema for story */
const useLinkValidationSchema = (
  strictnessValidationMode: LinkStrictnessModeType = 'SOFT_MODE',
) => {
  const { linkValidationSchema } = useLinkValidation();

  return yup.object({
    text: linkValidationSchema({
      schema: yup,
      strictnessValidationMode,
    }),
  });
};

const FormatCurrencyTemplate: StoryFn<{ strictnessValidationMode: LinkStrictnessModeType }> = ({
  strictnessValidationMode,
}) => {
  const schema = useLinkValidationSchema(strictnessValidationMode);

  const methods = useForm({ schema, mode: 'all' });

  /** Trigger validation when strictness changes */
  useEffect(() => {
    methods.trigger('text');
  }, [methods, strictnessValidationMode]);

  return (
    <FormProvider {...methods}>
      <InputControl name="text" />
    </FormProvider>
  );
};

/**
 * Story to show a sample link input validation.
 *
 * The input could be validated based on two levels of strictness (`HARD_MODE` & `SOFT_MODE`).
 *
 * 1. `HARD_MODE` validation it should checks if the text string contains any url formats, i.e:
 * ```
 *  anything123://extensions
 *  www.google.cl
 *  www.google.com
 *  google.com
 *  http://google.com
 *  ftp://127.0.0.1
 *  chrome://extensions
 *  Test: www.google.com
 *  192.0.0.1
 *  http://192.0.0.1
 *  localhost:3000
 *  Lorem ipsum Company-name.MX
 * ```
 * 2. `SOFT_MODE` validation it should checks if the text string contains any url formats, i.e:
 * ```
 *  www.google.com
 *  http://google.com
 *  ftp://127.0.0.1
 *  chrome://extensions
 *  Test: www.google.com
 *  192.0.0.1
 *  http://192.0.0.1
 * ```
 */
export const FormatCurrency = FormatCurrencyTemplate.bind({});
