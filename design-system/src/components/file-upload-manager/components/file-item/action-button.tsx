import { type ReactElement, useMemo } from 'react';

import { CloseOutline, Restart, View } from '@carbon/icons-react';

import { FILE_ICON_MAP } from '@components/file-upload-manager/file-upload-manager.constants';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { COMMON_HEIGHT_24 } from '@constants/common.constants';
import { themedStyled } from '@themes/utilities';

import type { FileItemProps } from './file-item';
import type { FileStatus } from '@components/file-upload-manager/file-upload-manager.interfaces';

type ActionButtonProps = FileItemProps & {
  isHovered?: boolean;
};

/** Styled button component */
const StyledPolymorphicButton = themedStyled<
  'button',
  { $backgroundColor: string; $color: string; disabled: boolean; $isHovered: boolean }
>('button', ({ $theme, $backgroundColor, $color, disabled, $isHovered }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: !disabled ? 'pointer' : 'auto',
  backgroundColor: $theme.colors[$backgroundColor as keyof typeof $theme.colors],
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: $theme.colors[$backgroundColor as keyof typeof $theme.colors],
  borderRadius: '50%',
  color: $theme.colors[$color as keyof typeof $theme.colors],
  padding: 0,
  width: COMMON_HEIGHT_24,
  height: COMMON_HEIGHT_24,
  transition: $theme.animation.timing100,
  ...($isHovered && !disabled
    ? {
        backgroundColor: $theme.colors.bgBase,
        borderColor: $theme.colors.neutralSubtle,
        color: $theme.colors.neutral,
        borderRadius: '0%',
      }
    : {}),
}));

/** Renders an action button for a file item */
export const ActionButton = ({
  'data-testid': dataTestId,
  onClickAction,
  status,
  isHovered = false,
  id,
}: ActionButtonProps): ReactElement => {
  const { t } = useTranslation();

  const { Icon, iconColor, backgroundColor } = useMemo(
    () =>
      status === 'rejected' && !onClickAction
        ? FILE_ICON_MAP.canceled
        : (FILE_ICON_MAP[status] ?? FILE_ICON_MAP.pending),
    [status, onClickAction],
  );

  const HoveredIcon = useMemo(
    () =>
      isHovered && onClickAction
        ? ({
            uploading: CloseOutline,
            pending: CloseOutline,
            rejected: Restart,
            completed: View,
          }[status] ?? Icon)
        : Icon,
    [Icon, isHovered, status, onClickAction],
  );

  const validStatuses: FileStatus[] = ['uploading', 'pending', 'rejected', 'completed'];
  const isValidStatus = validStatuses.includes(status) && onClickAction !== undefined;
  const actionTooltipContent = isValidStatus
    ? t(`fileUploadManager.fileActionTooltip.${status}`)
    : '';

  return (
    <StatefulTooltipNext
      content={actionTooltipContent}
      showArrow
      ignoreBoundary
    >
      <StyledPolymorphicButton
        aria-label={actionTooltipContent}
        data-testid={`${dataTestId}__file-action-${id}`}
        $backgroundColor={backgroundColor}
        $color={iconColor}
        $isHovered={isHovered}
        disabled={!onClickAction}
        onClick={onClickAction}
      >
        <HoveredIcon />
      </StyledPolymorphicButton>
    </StatefulTooltipNext>
  );
};
