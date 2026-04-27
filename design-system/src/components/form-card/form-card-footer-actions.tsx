import { Button } from '@components/button/next';
import { themedStyled } from '@themes/utilities';

import type { FormCardFooterActionsProps } from './form-card.interfaces';

const ContainerStyled = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  gap: $theme.spacing.spacingXs,
}));

/**
 * A component that renders action buttons for the FormCard footer.
 *
 * This component provides a consistent layout for footer actions with:
 * - An optional secondary cancel button
 * - An optional primary submit button
 *
 * Intended to be used as `FormCard.FooterActions` within the `footerActions` prop.
 */
export const FormCardFooterActions = ({
  cancelButton,
  submitButton,
}: FormCardFooterActionsProps): JSX.Element => {
  const { text: cancelButtonText } = cancelButton || {};
  const { text: submitButtonText } = submitButton || {};

  return (
    <ContainerStyled>
      {cancelButton && (
        <Button
          kind="brand"
          appearance="outlined"
          size="32px"
          {...cancelButton}
        >
          {cancelButtonText}
        </Button>
      )}

      {submitButton && (
        <Button
          kind="brand"
          appearance="filled"
          size="32px"
          {...submitButton}
        >
          {submitButtonText}
        </Button>
      )}
    </ContainerStyled>
  );
};
