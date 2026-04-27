import { useState } from 'react';
import type { ReactElement } from 'react';

import { Checkmark, Copy } from '@carbon/icons-react';

import { Button } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './copy-to-clipboard-button.styles';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { ButtonProps } from '@components/button';
import type { StatefulTooltipProps } from '@components/tooltip';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type CopyToClipboardButtonState = 'default' | 'copied';

export interface CopyToClipboardButtonProps extends WithZIndex {
  'data-testid': string;
  /** Value to copy. */
  value: string | ClipboardItem;
  /** Override the default i18n tooltip text */
  tooltipText?: string;
  /** Override the default i18n tooltip text after the it is copied */
  copiedTooltipText?: string;
  /** Override the default i18n button text */
  buttonText?: string;
  /** Override the default i18n button text after the it is copied */
  copiedButtonText?: string;
  buttonSize?: ButtonProps['size'];
  /** Used to override the copy to clipboard component */
  children?:
    | ReactElement
    | (({ buttonState }: { buttonState: CopyToClipboardButtonState }) => ReactElement);
  /** All properties of the button. Used only if children is undefined */
  buttonProps?: Omit<ButtonProps, 'onClick'>;
  /** All properties of the tooltip. Used only if children is undefined */
  tooltipProps?: StatefulTooltipProps;
  buttonKind?: ButtonProps['kind'];
  /** After the clipboard is saved, this callback will trigger */
  onCopy?(isError?: boolean): void;
}

interface CopyToClipboardButtonStateType {
  /** Default i18n tooltip text key */
  tooltipTextKey?: string;
  /** The icon that will render in the icon button section */
  Icon: CarbonIconType;
  /** Will override the default i18n tooltipTextKey if supplied */
  mainTooltipText?: string;
  /** Will override the default i18n textKey if supplied */
  mainButtonText?: string;
  /** Default i18n text key to show in the button */
  textKey?: string;
}

/** Get the copy to clipboard button states with texts and icons required by the component */
export const getAllCopyToClipboardButtonStates = (
  tooltipText?: string,
  copiedTooltipText?: string,
  buttonText?: string,
  copiedButtonText?: string,
): Record<CopyToClipboardButtonState, CopyToClipboardButtonStateType> => ({
  default: {
    Icon: Copy,
    tooltipTextKey: 'copyToClipboardButton.defaultTooltipText',
    mainTooltipText: tooltipText,
    mainButtonText: buttonText,
    textKey: 'copyToClipboardButton.defaultText',
  },
  copied: {
    tooltipTextKey: 'copyToClipboardButton.copiedTooltipText',
    Icon: Checkmark,
    mainTooltipText: copiedTooltipText,
    mainButtonText: copiedButtonText,
    textKey: 'copyToClipboardButton.defaultText',
  },
});

/**
 * Allows to render a default icon button with a dynamic tooltip
 * and copies the text to clipboard. Also, a new children can be passed
 * to override the default component
 */
export const CopyToClipboardButton = ({
  'data-testid': dataTestId,
  value,
  tooltipText: overrideTooltipText,
  copiedTooltipText: overrideCopiedTooltipText,
  buttonText: overrideButtonText,
  copiedButtonText: overrideCopiedButtonText,
  children,
  buttonProps = {},
  tooltipProps = {},
  zIndex,
  buttonKind = 'tertiary',
  onCopy,
}: CopyToClipboardButtonProps): ReactElement => {
  const [buttonState, setButtonState] = useState<CopyToClipboardButtonState>('default');

  const { t } = useTranslation();
  const { theme } = useCss();

  const { tooltipTextKey, mainTooltipText, Icon, textKey, mainButtonText } =
    getAllCopyToClipboardButtonStates(
      overrideTooltipText,
      overrideCopiedTooltipText,
      overrideButtonText,
      overrideCopiedButtonText,
    )[buttonState];
  const tooltipText = mainTooltipText ?? t(tooltipTextKey);
  const buttonText = mainButtonText ?? t(textKey);

  /** Try to copy to clipboard, otherwise return error */
  const copyToClipboard = async (): Promise<void> => {
    try {
      if (typeof value === 'string') {
        await navigator.clipboard.writeText(value);
      } else {
        await navigator.clipboard.write([value]);
      }

      setButtonState('copied');

      if (buttonState === 'default') {
        setTimeout(() => {
          setButtonState('default');
        }, 2000);
      }

      onCopy?.();
    } catch {
      onCopy?.(true);
    }
  };

  return children ? (
    <div
      data-testid={dataTestId}
      role="button"
      tabIndex={0}
      onClick={copyToClipboard}
      onKeyDown={ariaKeyDownHandler(copyToClipboard)}
    >
      {typeof children === 'function' ? children({ buttonState }) : children}
    </div>
  ) : (
    <StatefulTooltipNext
      content={tooltipText}
      showArrow
      placement="bottom"
      zIndex={zIndex}
      {...tooltipProps}
    >
      <div>
        <Button
          kind={buttonKind}
          size="32px"
          data-testid={dataTestId}
          onClick={copyToClipboard}
          overrides={{
            BaseButton: {
              style: styles.buttonStyles(theme, { state: buttonState }),
            },
          }}
          endEnhancer={<Icon />}
          paddingLeft={theme.spacing.spacingXs}
          paddingRight={theme.spacing.spacingXs}
          {...buttonProps}
        >
          {buttonText}
        </Button>
      </div>
    </StatefulTooltipNext>
  );
};
