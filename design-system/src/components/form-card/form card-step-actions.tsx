import { Button } from '@components/button/next';
import { Tag } from '@components/tag/next';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { themedStyled } from '@themes/utilities';

import { textStyles } from './form-card.styled';

import type { FormCardStepActionsProps } from './form-card.interfaces';

const ContainerStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.spacing.spacingSm,
}));

/**
 * A component that displays step navigation actions for the FormCard header.
 *
 * This component renders:
 * - A step indicator showing current step progress (e.g., "Step 1 of 10")
 * - An optional tag badge with a custom label
 * - An optional tertiary action button
 *
 * Intended to be used as `FormCard.StepActions` within the `navActions` prop.
 */
export const FormCardStepActions = ({
  currentStep,
  totalSteps,
  actionButton,
  tagLabel,
}: FormCardStepActionsProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ContainerStyled>
      <Text
        variant="upperDetails"
        margin={0}
        fontWeight={500}
        $style={textStyles}
      >
        {t('general.stepOf', { current: currentStep, steps: totalSteps })}
      </Text>

      {tagLabel && (
        <Tag
          kind="brand"
          variant="outlined"
          shape="pill"
          size="md"
        >
          {tagLabel}
        </Tag>
      )}

      {actionButton && (
        <Button
          kind="brand"
          appearance="outlined"
          size="32px"
          {...actionButton}
        >
          {actionButton.text}
        </Button>
      )}
    </ContainerStyled>
  );
};
