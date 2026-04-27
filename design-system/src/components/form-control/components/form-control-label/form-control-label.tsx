import { Information } from '@carbon/icons-react';

import { REQUIRED_FIELD_INDICATOR } from '@components/form-control/form-control.constants';

import { Text } from '../../../text';
import { StatefulTooltipNext } from '../../../tooltip-next';
import { useCss } from '../../../utils/hooks/use-css';

import { labelFontStyle, styles } from './form-control-label.styles';

import type { FormControlProps } from '../../form-control';
import type { WithZIndex } from '@interfaces/common.interfaces';

export interface FormControlLabelProps extends WithZIndex {
  /** To include horizontal padding on label, default true */
  labelWithHorizontalPadding?: FormControlProps['labelWithHorizontalPadding'];
  /** If supplied, will render an info icon with a tooltip with this caption on the Form control label right side */
  infoTooltip?: FormControlProps['infoTooltip'];
  /** To display the character count */
  showCharacterCounter?: boolean;
  /** Maximum allowable length character */
  maxLength?: number;
  /** Counting the number of characters typed in a text box component  */
  currentCharactersQuantity?: number;
  label: FormControlProps['label'];
  disabled?: FormControlProps['disabled'];
  /** Wether should apply the bottom margin */
  hasMargin?: boolean;
  /** To display an asterisk to indicate required fields. */
  required?: boolean;
}

/**
 * Styled label component to be used in the form controls
 *
 * Render a info icon with a tooltip when the property `infoTooltip` is supplied,
 * can also display a label with the maximum allowable character length value
 */
export const FormControlLabel = ({
  label,
  showCharacterCounter,
  maxLength,
  currentCharactersQuantity,
  infoTooltip,
  zIndex,
  required,
}: FormControlLabelProps): JSX.Element => {
  const { theme, customLabelContainerStyles, infoTooltipWrapperStyles, labelTextContainerStyles } =
    useCss(styles);

  const shouldRenderCharacterCount =
    showCharacterCounter && (maxLength && currentCharactersQuantity) !== undefined;

  return (
    <div className={customLabelContainerStyles}>
      <div className={labelTextContainerStyles}>
        <Text
          variant="body"
          $style={labelFontStyle({
            $theme: theme,
            labelWithHorizontalPadding: false,
            hasMargin: false,
          })}
          as="span"
        >
          {label}
        </Text>
        {required && (
          <Text
            variant="h2"
            margin={0}
            color="neutral"
            as="span"
          >
            {REQUIRED_FIELD_INDICATOR}
          </Text>
        )}
        {infoTooltip && (
          <StatefulTooltipNext
            placement="auto"
            showArrow
            content={infoTooltip}
            zIndex={zIndex}
          >
            <div className={infoTooltipWrapperStyles}>
              <Information
                title="Info"
                size={16}
                color={theme.colors.brand}
              />
            </div>
          </StatefulTooltipNext>
        )}
      </div>
      {shouldRenderCharacterCount && (
        <Text
          variant="body"
          $style={{
            ...labelFontStyle({ $theme: theme, isCharacterLabel: true }),
          }}
        >
          {`${currentCharactersQuantity} / ${maxLength}`}
        </Text>
      )}
    </div>
  );
};
