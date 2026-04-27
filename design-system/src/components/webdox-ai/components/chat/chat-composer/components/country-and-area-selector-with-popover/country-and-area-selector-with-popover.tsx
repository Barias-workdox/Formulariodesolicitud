import { useState, type ReactElement } from 'react';

import { z } from 'zod';

import { Footer } from '@components/footer';
import { FormProvider, SelectControlContainer, useForm } from '@components/forms';
import { Header } from '@components/header';
import { StatelessPopover } from '@components/popover';
import { useTranslation } from '@components/utils';
import { useCountryCodeOptions } from '@components/utils/hooks/use-country-code-options';
import { noop } from '@utils/noop';

import {
  getCountryAndAreaValueLabel,
  getSelectorCountryOptionLabel,
} from '../../../../../utils/legal-whisper-selector.util';
import { InputSelector } from '../input-selector';

import { StyledBody, StyledPopoverContent } from './styled-components';

import type { CommonOption, SelectProps } from '@components/select/next/select.interfaces';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface CountryAndAreaSelectorWithPopoverProps extends WithZIndex, WithTestId {
  countryOptions?: CountryCodeType[];
  areaOptions?: SelectProps['options'];
  onCountryChange?: SelectProps['onChange'];
  selectedCountry?: SelectProps['value'];
  onAreaChange?: SelectProps['onChange'];
  selectedArea?: SelectProps['value'];
}

type FormData = {
  country: CommonOption<CountryCodeType>;
  area: CommonOption<string>;
};

/**
 * Component that displays a country and area selector with a popover.
 */
export const CountryAndAreaSelectorWithPopover = ({
  dataTestId = 'country-and-area-selector-with-popover',
  zIndex,
  onCountryChange = noop,
  onAreaChange = noop,
  selectedArea,
  selectedCountry,
  countryOptions,
  areaOptions = [],
}: CountryAndAreaSelectorWithPopoverProps): ReactElement => {
  const { t } = useTranslation();
  const options = useCountryCodeOptions(countryOptions, { sort: 'asc' });

  const methods = useForm<FormData, unknown, FormData, 'zod'>({
    resolverType: 'zod',
    defaultValues: {
      country: selectedCountry,
      area: selectedArea,
    },
    schema: z.object({
      country: z.array(z.object({ id: z.any(), label: z.any() })).min(1),
      area: z.array(z.object({ id: z.any(), label: z.any() })).min(1),
    }),
  });

  const {
    formState: { isDirty },
  } = methods;

  const [isOpen, setIsOpen] = useState(false);

  /**
   * Handles the close of the popover
   */
  const handleClose = (): void => {
    setIsOpen(false);
  };

  /**
   * Handles the open of the popover
   */
  const handleOpen = (): void => {
    methods.reset({
      country: selectedCountry,
      area: selectedArea,
    });

    setIsOpen(true);
  };

  /**
   * Handles the form submission and updates the country and area selections
   */
  const handleSubmit = ({ area, country }: FormData): void => {
    if (area.length > 0 && country.length > 0) {
      onAreaChange([area[0]]);
      onCountryChange([country[0]]);
      handleClose();
    }
  };

  return (
    <StatelessPopover
      isOpen={isOpen}
      onClickOutside={handleClose}
      onEsc={handleClose}
      placement="top"
      ignoreBoundary
      zIndex={zIndex}
      content={
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <StyledPopoverContent>
              <Header
                title={t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.title')}
                onClose={handleClose}
                size="xsmall"
              />
              <StyledBody>
                <SelectControlContainer
                  data-testid={`${dataTestId}__country-select`}
                  autoFocus
                  clearable={false}
                  getOptionLabel={({ option }) => getSelectorCountryOptionLabel({ option })}
                  getValueLabel={({ option }) => getSelectorCountryOptionLabel({ option })}
                  label={t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.country')}
                  name="country"
                  options={options}
                  required
                  searchable={false}
                  size="sm"
                  zIndex={zIndex}
                />
                <SelectControlContainer
                  data-testid={`${dataTestId}__area-select`}
                  clearable={false}
                  searchable={false}
                  label={t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.area')}
                  name="area"
                  options={areaOptions}
                  required
                  size="sm"
                  zIndex={zIndex}
                />
              </StyledBody>
              <Footer
                size="small"
                fullWidthActions
                actions={
                  <Footer.Button
                    type="submit"
                    disabled={!isDirty}
                  >
                    {t('general.save')}
                  </Footer.Button>
                }
              />
            </StyledPopoverContent>
          </form>
        </FormProvider>
      }
      showArrow
    >
      <InputSelector
        value={getCountryAndAreaValueLabel({
          countryOption: selectedCountry,
          areaOption: selectedArea,
          defaultLabel: t('webdoxAI.legalWhisperSettings.countryAndAreaSettings.title'),
        })}
        isOpen={isOpen}
        handleOpen={handleOpen}
        zIndex={zIndex}
        dataTestId={dataTestId}
      />
    </StatelessPopover>
  );
};
