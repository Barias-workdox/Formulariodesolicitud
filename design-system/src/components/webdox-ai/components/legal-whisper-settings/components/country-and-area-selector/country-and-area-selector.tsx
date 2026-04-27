import { Select, type SelectProps } from '@components/select/next';
import { useCountryCodeOptions } from '@components/utils/hooks/use-country-code-options';
import { getSelectorCountryOptionLabel } from '@components/webdox-ai/utils/legal-whisper-selector.util';

import { selectOverrides } from './country-and-area-selector.overrides';
import { StyledContainer, StyledSelectWrapper } from './styled-components';

import type { CountryCodeType } from '@components/utils/interfaces/country-code.interface';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface CountryAndAreaSelectorProps extends WithZIndex, WithTestId {
  areaOptions: SelectProps['options'];
  countryOptions: CountryCodeType[];
  selectedArea?: SelectProps['value'];
  selectedCountry?: SelectProps['value'];
  onAreaChange: SelectProps['onChange'];
  onCountryChange: SelectProps['onChange'];
}

/**
 * CountryAndAreaSelector is a component that displays the country and area selectors.
 */
export const CountryAndAreaSelector = ({
  areaOptions,
  countryOptions,
  dataTestId,
  onAreaChange,
  onCountryChange,
  selectedArea,
  selectedCountry,
  zIndex,
}: CountryAndAreaSelectorProps): JSX.Element => {
  const options = useCountryCodeOptions(countryOptions, { sort: 'asc' });

  return (
    <StyledContainer>
      <Select
        clearable={false}
        data-testid={`${dataTestId}__country-select`}
        getOptionLabel={({ option }) => getSelectorCountryOptionLabel({ option })}
        getValueLabel={({ option }) => getSelectorCountryOptionLabel({ option, withLabel: false })}
        overrides={selectOverrides}
        kind="white"
        onChange={onCountryChange}
        options={options}
        searchable={false}
        size="sm"
        value={selectedCountry}
        zIndex={zIndex}
      />
      <StyledSelectWrapper>
        <Select
          clearable={false}
          data-testid={`${dataTestId}__area-select`}
          kind="white"
          onChange={onAreaChange}
          options={areaOptions}
          searchable={false}
          size="sm"
          value={selectedArea}
          zIndex={zIndex}
        />
      </StyledSelectWrapper>
    </StyledContainer>
  );
};
