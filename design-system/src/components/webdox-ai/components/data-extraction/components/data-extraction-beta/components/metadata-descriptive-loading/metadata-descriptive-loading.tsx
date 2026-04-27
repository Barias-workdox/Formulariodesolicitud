import { Spinner } from '@components/spinner';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { TextRotator } from '@components/webdox-ai/components/text-rotator';

import { StyledContainer } from './styled-components';

/**
 * Component that displays a loading state for metadata descriptive information.
 * It shows a spinner and a rotating text that describes the loading process.
 */
export const MetadataDescriptiveLoading = (): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  const texts = [
    t('webdoxAI.metadataDescriptiveLoading.text1'),
    t('webdoxAI.metadataDescriptiveLoading.text2'),
    t('webdoxAI.metadataDescriptiveLoading.text3'),
    t('webdoxAI.metadataDescriptiveLoading.text4'),
    t('webdoxAI.metadataDescriptiveLoading.text5'),
    t('webdoxAI.metadataDescriptiveLoading.text6'),
  ];

  return (
    <StyledContainer>
      <span>
        <Spinner
          size="sm"
          color="power"
        />
      </span>
      <Text
        variant="bodySmall"
        color="neutralSubdued"
        margin={0}
        fontWeight={500}
        marginTop={theme.spacing.spacingXs}
      >
        {t('webdoxAI.metadataDescriptiveLoading.title')}
      </Text>
      <TextRotator
        texts={texts}
        align="center"
      />
    </StyledContainer>
  );
};
