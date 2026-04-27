import { COUNTRY_ALPHA3_TO_ALPHA2 } from '@constants/country-alpha-codes.constants';
import { themedStyled } from '@themes/utilities';
import { getFlagEmoji } from '@utils/string.util';

import { useHeader } from '../header.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';
import { getIconSize } from '../utils/size-maps';

import type { CountryCodeType } from '@components/utils/interfaces';

interface HeaderFlagWrapperProps {
  $fontSize?: string;
  $isDisabled?: boolean;
}

export interface HeaderFlagProps {
  countryCode: CountryCodeType;
  label?: string;
}

const HeaderFlagWrapper = themedStyled<'span', HeaderFlagWrapperProps>(
  'span',
  ({ $fontSize, $isDisabled }) => ({
    fontSize: $fontSize,
    opacity: $isDisabled ? 0.2 : 1,
  }),
);
/**
 * Header flag component.
 */
const HeaderFlag = ({ countryCode, label }: HeaderFlagProps): JSX.Element => {
  const { size, dataTestId, isDisabled } = useHeader();

  const flag = getFlagEmoji(COUNTRY_ALPHA3_TO_ALPHA2[countryCode]);
  const testId = composeDataTestId(`${dataTestId}-flag`);
  const fontSize = getIconSize(size);

  return (
    <HeaderFlagWrapper
      role="img"
      $fontSize={fontSize}
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
      data-testid={testId}
      $isDisabled={isDisabled}
    >
      {flag}
    </HeaderFlagWrapper>
  );
};

export { HeaderFlag };
