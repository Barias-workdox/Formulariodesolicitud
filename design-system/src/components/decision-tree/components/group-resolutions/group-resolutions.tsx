import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { StyledContainer, StyledInner } from './group-resolutions.styles';

/**
 * Component that is part of a decision tree interface, providing a way to add resolution groups.
 * It displays a button that allows users to add a new group of resolutions, with a label "then"
 * to indicate the subsequent action or outcome following the conditions specified in the decision tree.
 */
export const GroupResolutions = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledInner>
        <Text
          variant="bodySmall"
          margin={0}
        >
          {t('decisionTree.then')}
        </Text>
      </StyledInner>
    </StyledContainer>
  );
};
