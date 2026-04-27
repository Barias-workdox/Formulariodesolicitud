import { ArrowLeft } from '@carbon/icons-react';

import { Button } from '@components/button/next';
import { Text } from '@components/text';

import { FormCardStepActions } from './form card-step-actions';
import { FormCardFooterActions } from './form-card-footer-actions';
import {
  FormCardFooterActionStyled,
  FormCardContainerStyled,
  FormCardDescriptionStyled,
  FormCardFooterStyled,
  FormCardNavLeftStyled,
  FormCardNavRightStyled,
  FormCardNavStyled,
  FormCardFooterActionButtonsStyled,
  FormCardBodyStyled,
  FormCardHeaderStyled,
  FormCardTopContainerStyled,
  textStyles,
  backButtonOverrides,
} from './form-card.styled';

import type { FormCardProps } from './form-card.interfaces';

/**
 * A styled form card component with a header, body, and footer layout.
 *
 * This component provides a consistent card structure for forms with:
 * - A navigation bar with back button and optional actions
 * - A header section with title and subtitle
 * - A scrollable body for main content
 * - A footer with label, text, and optional actions
 */
export const FormCard = ({
  $hasElevation,
  $height,
  $width,
  $maxWidth,
  title,
  navActions,
  headerInfo,
  headerTitle,
  headerSubtitle,
  children,
  footerText,
  footerLabel,
  footerInfo,
  footerActions,
  onBack,
}: FormCardProps): JSX.Element => {
  const shouldRenderFooter = footerInfo || footerLabel || footerText || footerActions;

  return (
    <FormCardContainerStyled
      $hasElevation={$hasElevation}
      $height={$height}
      $width={$width}
      $maxWidth={$maxWidth}
    >
      <FormCardTopContainerStyled>
        <FormCardHeaderStyled>
          <FormCardNavStyled>
            <FormCardNavLeftStyled>
              {onBack && (
                <Button
                  dataTestId="form-card--back-button"
                  aria-label="Go back button"
                  kind="neutral"
                  appearance="outlined"
                  size="32px"
                  onClick={onBack}
                  overrides={backButtonOverrides}
                >
                  <ArrowLeft />
                </Button>
              )}

              <Text
                variant="bodySmall"
                margin={0}
                fontWeight={500}
              >
                {title}
              </Text>
            </FormCardNavLeftStyled>

            {navActions && <FormCardNavRightStyled>{navActions}</FormCardNavRightStyled>}
          </FormCardNavStyled>

          <FormCardDescriptionStyled>
            {headerInfo && <div>{headerInfo}</div>}

            <Text
              variant="h1"
              margin={0}
              fontWeight="bold"
              color="neutralStrong"
            >
              {headerTitle}
            </Text>

            {headerSubtitle && (
              <Text
                variant="body"
                margin={0}
                color="neutralStrong"
              >
                {headerSubtitle}
              </Text>
            )}
          </FormCardDescriptionStyled>
        </FormCardHeaderStyled>

        <FormCardBodyStyled>{children}</FormCardBodyStyled>
      </FormCardTopContainerStyled>

      {shouldRenderFooter && (
        <FormCardFooterStyled>
          {footerInfo && <div>{footerInfo}</div>}

          <FormCardFooterActionStyled>
            <div>
              <Text
                margin={0}
                variant="upperDetails"
                color="neutralStrong"
                fontWeight={400}
                $style={textStyles}
              >
                {footerLabel}
              </Text>
              <Text
                variant="bodySmall"
                margin={0}
                color="neutralStrong"
                fontWeight={500}
              >
                {footerText}
              </Text>
            </div>

            {footerActions && (
              <FormCardFooterActionButtonsStyled>{footerActions}</FormCardFooterActionButtonsStyled>
            )}
          </FormCardFooterActionStyled>
        </FormCardFooterStyled>
      )}
    </FormCardContainerStyled>
  );
};

FormCard.StepActions = FormCardStepActions;
FormCard.FooterActions = FormCardFooterActions;
