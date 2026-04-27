import type { ElementType, PropsWithChildren } from 'react';

import { ReactComponent as BrainCompanionIcon } from '@assets/icons/webdox-ai/brain-companion-icon.svg';
import { ReactComponent as SuiteAIIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { ReactComponent as LegalWhisperIcon } from '@assets/icons/webdox-ai/legal-whisper-icon.svg';
import { BackgroundIcon } from '@components/background-icon';
import { useCss } from '@components/utils/hooks/use-css';
import { getSuiteAIBackgroundGradient } from '@components/webdox-ai/webdox-ai.styles';

import { styles } from './popover-title-with-icon.styles';
import { StyledTitle } from './styled-components';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export type IconType = WebdoxAIOptionType | 'suiteAI';

export type PopoverTitleWithIconProps = WithTestId &
  PropsWithChildren<{
    iconType?: IconType;
    showIcon?: boolean;
  }>;

const backgroundIconConfigByType: Record<
  IconType,
  Pick<BackgroundIconProps, 'backgroundColor' | 'overrides'> & {
    Icon: ElementType;
  }
> = {
  legalWhisper: {
    backgroundColor: 'sweetSubtle',
    Icon: LegalWhisperIcon,
  },
  brainCompanion: {
    backgroundColor: 'natureSubtle',
    Icon: BrainCompanionIcon,
  },
  suiteAI: {
    Icon: SuiteAIIcon,
    overrides: {
      Root: {
        style: getSuiteAIBackgroundGradient({ shape: 'square' }),
      },
    },
  },
};

/**
 * Component that renders a title with an optional icon.
 */
export const PopoverTitleWithIcon = ({
  'data-testid': dataTestId,
  children,
  showIcon,
  iconType = 'suiteAI',
}: PopoverTitleWithIconProps): JSX.Element => {
  const { css } = useCss(styles);

  const { Icon, backgroundColor, overrides } = backgroundIconConfigByType[iconType];

  return (
    <StyledTitle>
      {showIcon && (
        <BackgroundIcon
          data-testid={dataTestId}
          size="32px"
          shape="square"
          backgroundColor={backgroundColor}
          overrides={overrides}
        >
          <Icon
            className={css(styles.iconStyles())}
            data-testid={`${dataTestId}--icon`}
          />
        </BackgroundIcon>
      )}
      {children}
    </StyledTitle>
  );
};
