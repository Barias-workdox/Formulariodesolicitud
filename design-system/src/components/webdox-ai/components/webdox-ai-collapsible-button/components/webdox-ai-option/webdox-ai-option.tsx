import type { ElementType } from 'react';

import { ReactComponent as BrainCompanionIcon } from '@assets/icons/webdox-ai/brain-companion-icon.svg';
import { ReactComponent as LegalWhisperIcon } from '@assets/icons/webdox-ai/legal-whisper-icon.svg';
import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import type { WebdoxAIOption as WebdoxAIOptionType } from '../../webdox-ai-collapsible-button.interfaces';
import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

const buttonConfigByType: Record<
  WebdoxAIOptionType['type'],
  Pick<IconButtonProps, 'kind'> & {
    Icon: ElementType;
  }
> = {
  legalWhisper: {
    kind: 'quaternary-whisper',
    Icon: LegalWhisperIcon,
  },
  brainCompanion: {
    kind: 'quaternary-brain',
    Icon: BrainCompanionIcon,
  },
};

/**
 * `WebdoxAIOption` is a component that renders an icon button with a tooltip.
 * The button type determines the icon and style of the button.
 */
export const WebdoxAIOption = ({
  'data-testid': dataTestId,
  disabled,
  isLoading,
  type,
  zIndex,
  onClick,
}: WithTestId<WebdoxAIOptionType>): JSX.Element => {
  const { t } = useTranslation();

  const { Icon, kind } = buttonConfigByType[type];

  return (
    <StatefulTooltipNext
      content={t(`webdoxAI.assistantOptions.${type}`)}
      showArrow
      zIndex={zIndex}
    >
      <div>
        <IconButton
          data-testid={dataTestId}
          size="32px"
          kind={kind}
          disabled={disabled}
          isLoading={isLoading}
          onClick={onClick}
          overrides={{
            Root: { style: { flexShrink: 0 } },
          }}
        >
          <Icon />
        </IconButton>
      </div>
    </StatefulTooltipNext>
  );
};
