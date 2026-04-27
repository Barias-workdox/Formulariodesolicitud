import { RequestQuote } from '@carbon/icons-react';

import { Button } from '@components/button/next';
import { useTranslation } from '@components/utils';
import { useLegalWhisperConversationsContext } from '@components/webdox-ai/hooks/use-legal-whisper-conversations-context.hook';

import { ConversationSelectorContainer } from './components/conversation-selector';
import { CountryAndAreaSelector } from './components/country-and-area-selector/country-and-area-selector';
import { StyledContainer, StyledControlsWrapper, StyledDivider } from './styled-components';

import type { SelectProps } from '@components/select/next';
import type { CountryCodeType } from '@components/utils/interfaces/country-code.interface';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export interface LegalWhisperSettingsProps extends WithZIndex, WithTestId {
  areaOptions: SelectProps['options'];
  countryOptions: CountryCodeType[];
  selectedArea?: SelectProps['value'];
  selectedCountry?: SelectProps['value'];
  onAreaChange: SelectProps['onChange'];
  onCountryChange: SelectProps['onChange'];
}

/**
 * LegalWhisperSettings is a component that displays the settings for the Legal Whisper feature.
 */
export const LegalWhisperSettings = ({
  areaOptions,
  countryOptions,
  dataTestId,
  onAreaChange,
  onCountryChange,
  selectedArea,
  selectedCountry,
  zIndex,
}: LegalWhisperSettingsProps): JSX.Element => {
  const { t } = useTranslation();
  const { onCreateConversation } = useLegalWhisperConversationsContext();

  return (
    <StyledContainer>
      <StyledControlsWrapper>
        <CountryAndAreaSelector
          areaOptions={areaOptions}
          countryOptions={countryOptions}
          dataTestId={`${dataTestId}__country-and-area-selector`}
          onAreaChange={onAreaChange}
          onCountryChange={onCountryChange}
          selectedArea={selectedArea}
          selectedCountry={selectedCountry}
          zIndex={zIndex}
        />
        <Button
          appearance="outlined"
          onClick={onCreateConversation}
          startEnhancer={RequestQuote}
          size="32px"
        >
          {t('webdoxAI.legalWhisperSettings.newConversation')}
        </Button>
      </StyledControlsWrapper>
      <StyledDivider />
      <ConversationSelectorContainer
        dataTestId={`${dataTestId}__conversation-selector`}
        zIndex={zIndex}
      />
    </StyledContainer>
  );
};
