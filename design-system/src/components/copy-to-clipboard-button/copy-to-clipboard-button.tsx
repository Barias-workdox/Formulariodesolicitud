import { useState } from 'react';
import type { ReactElement } from 'react';

import { Checkmark, Copy } from '@carbon/icons-react';

import { StatefulTooltipNext } from '@components/tooltip-next';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';

import { IconButton } from '../button';
import { useTranslation } from '../utils';

import type { StatefulTooltipProps } from '../tooltip';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';

export type CopyToClipboardButtonState = 'default' | 'copied';

export interface CopyToClipboardButtonProps {
  'data-testid': string;
  /** Text to copy to clipboard */
  text: string;
  /** Override the default i18n tooltip text */
  tooltipText?: string;
  /** Override the default i18n tooltip text after the it is copied */
  copiedTooltipText?: string;
  buttonKind?: IconButtonProps['kind'];
  buttonSize?: IconButtonProps['size'];
  /** Used to override the copy to clipboard component */
  children?: ReactElement;
  /** All properties of the icon button. Used only if children is undefined */
  iconButtonProps?: Omit<IconButtonProps, 'onClick'>;
  /** All properties of the tooltip. Used only if children is undefined */
  tooltipProps?: StatefulTooltipProps;
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
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
}

/** Get the copy to clipboard button states with texts and icons required by the component */
const getAllCopyToClipboardButtonStates = (
  tooltipText?: string,
  copiedTooltipText?: string,
): Record<CopyToClipboardButtonState, CopyToClipboardButtonStateType> => ({
  default: {
    Icon: Copy,
    tooltipTextKey: 'copyToClipboardButton.defaultTooltipText',
    mainTooltipText: tooltipText,
  },
  copied: {
    tooltipTextKey: 'copyToClipboardButton.copiedTooltipText',
    Icon: Checkmark,
    mainTooltipText: copiedTooltipText,
  },
});

/**
 * Allows to render a default icon button with a dynamic tooltip
 * and copies the text to clipboard. Also, a new children can be passed
 * to override the default component
 */
export const CopyToClipboardButton = ({
  'data-testid': dataTestId,
  text,
  tooltipText: overrideTooltipText,
  copiedTooltipText: overrideCopiedTooltipText,
  buttonKind = 'control',
  buttonSize = '32px',
  children,
  iconButtonProps = {},
  tooltipProps = {},
  zIndex,
  onCopy,
}: CopyToClipboardButtonProps): ReactElement => {
  const [buttonState, setButtonState] = useState<CopyToClipboardButtonState>('default');

  const { t } = useTranslation();

  const { tooltipTextKey, mainTooltipText, Icon } = getAllCopyToClipboardButtonStates(
    overrideTooltipText,
    overrideCopiedTooltipText,
  )[buttonState];
  const tooltipText = mainTooltipText ?? t(tooltipTextKey);

  /** Try to copy to clipboard, otherwise return error */
  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
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
      {children}
    </div>
  ) : (
    <StatefulTooltipNext
      content={tooltipText}
      showArrow
      placement="bottom"
      zIndex={zIndex}
      {...tooltipProps}
    >
      <IconButton
        data-testid={dataTestId}
        kind={buttonKind}
        size={buttonSize}
        onClick={copyToClipboard}
        {...iconButtonProps}
      >
        <Icon />
      </IconButton>
    </StatefulTooltipNext>
  );
};
