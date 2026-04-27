import {
  LINK_STRICTNESS_MODES,
  LINK_VALIDATION_REGEX,
} from '../constants/link-validation.constants';

import type { LinkStrictnessModeType } from '../interfaces';
import type { AnyObject, AnySchema } from 'yup';

export interface LinkValidationSchemaProps {
  schema: AnyObject;
  /** The i18n text to render if the link validation fails */
  containsLinkErrorMessage: string;
  /** Mode used to set validation strictness */
  strictnessValidationMode?: LinkStrictnessModeType;
}

/**
 * Checks if value has any link within the string.
 */
export const noLinkValidationRule = (
  value: string,
  strictnessValidationMode: LinkStrictnessModeType = LINK_STRICTNESS_MODES['SOFT_MODE'],
): boolean => !value.match(LINK_VALIDATION_REGEX[strictnessValidationMode]);

/** String link reusable yup schema validation. */
export const linkValidationSchema = ({
  schema,
  containsLinkErrorMessage,
  strictnessValidationMode = LINK_STRICTNESS_MODES['SOFT_MODE'],
}: LinkValidationSchemaProps): AnySchema =>
  schema.string().test('no-link-validation', containsLinkErrorMessage, (value) => {
    return noLinkValidationRule(value, strictnessValidationMode);
  });
