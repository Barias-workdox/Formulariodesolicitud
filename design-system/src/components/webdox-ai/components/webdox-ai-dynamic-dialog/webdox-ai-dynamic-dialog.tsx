import { useMemo, type ElementType } from 'react';

import { OpenPanelFilledRight } from '@carbon/icons-react';

import { ReactComponent as BrainCompanionIcon } from '@assets/icons/webdox-ai/brain-companion-icon.svg';
import { ReactComponent as LegalWhisperIcon } from '@assets/icons/webdox-ai/legal-whisper-icon.svg';
import { BackgroundIcon } from '@components/background-icon';
import {
  DynamicDialog,
  DynamicDialogHeader,
  DynamicDialogBody,
} from '@components/dynamic-dialog/next';
import { DIALOG_Z_INDEX } from '@components/dynamic-dialog/next/dynamic-dialog.constants';
import { useTranslation } from '@components/utils';
import { noop } from '@utils/noop';

import { ActionIconButton } from '../action-icon-button';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { DynamicDialogProps } from '@components/dynamic-dialog/next';
import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface WebdoxAIDynamicDialogProps extends WithTestId, DynamicDialogProps {
  type: WebdoxAIOptionType;
  showSideViewButton?: boolean;
  onClose?(): void;
  onToggleExpand?(isFullViewport: boolean): void;
  onClickSideView?(): void;
}

const iconByWebdoxAIOption: Record<
  WebdoxAIOptionType,
  Pick<BackgroundIconProps, 'backgroundColor'> & { Icon: ElementType }
> = {
  brainCompanion: {
    Icon: BrainCompanionIcon,
    backgroundColor: 'natureSubtle',
  },
  legalWhisper: {
    Icon: LegalWhisperIcon,
    backgroundColor: 'sweetSubtle',
  },
};

/**
 * A dynamic dialog component for displaying Webdox AI options with a specific layout and design.
 *
 * This dialog includes:
 * - A header with a background icon and title based on the selected AI option.
 * - A close button to dismiss the dialog.
 * - Customizable content passed as children.
 */
export const WebdoxAIDynamicDialog = ({
  dataTestId = 'webdox-ai-dynamic-dialog',
  children,
  fullViewport,
  showSideViewButton = false,
  type,
  zIndex = DIALOG_Z_INDEX.TOOLTIP,
  onClose = noop,
  onToggleExpand = noop,
  onClickSideView = noop,
  ...rest
}: WebdoxAIDynamicDialogProps): JSX.Element => {
  const { t } = useTranslation();
  const { Icon, backgroundColor } = iconByWebdoxAIOption[type];

  const actions = useMemo(() => {
    return [
      ...(showSideViewButton
        ? [
            <ActionIconButton
              key="side-view-button"
              dataTestId={`${dataTestId}--side-view-button`}
              Icon={<OpenPanelFilledRight />}
              onClick={onClickSideView}
              tooltipContent={t('webdoxAI.assistantLayout.sideViewTooltip')}
              zIndex={zIndex}
            />,
          ]
        : []),
    ];
  }, [showSideViewButton, onClickSideView, dataTestId, t, zIndex]);

  return (
    <DynamicDialog
      {...rest}
      dataTestId={dataTestId}
      fullViewport={fullViewport}
      onClose={onClose}
      onFullViewportChange={onToggleExpand}
    >
      <DynamicDialogHeader
        title={t(`webdoxAI.assistantOptions.${type}`)}
        showBackButton={false}
        icon={
          <BackgroundIcon
            shape="square"
            backgroundColor={backgroundColor}
            size="32px"
            overrides={{
              Root: {
                style: {
                  borderRadius: '4px',
                },
              },
            }}
          >
            <Icon />
          </BackgroundIcon>
        }
        actions={actions}
      />
      <DynamicDialogBody padding="0px">{children}</DynamicDialogBody>
    </DynamicDialog>
  );
};
