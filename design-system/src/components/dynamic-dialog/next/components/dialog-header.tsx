import type { ReactElement } from 'react';

import { ArrowLeft, Close, Draggable, Maximize, Minimize } from '@carbon/icons-react';

import { IconButton } from '@components/button/variants/icon-button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';

import { useDynamicDialog } from '../context/dynamic-dialog.context';
import { DIALOG_Z_INDEX } from '../dynamic-dialog.constants';

import {
  StyledDialogHeader,
  StyledDragHandle,
  StyledHeaderActions,
  StyledHeaderContent,
  StyledHeaderMainRow,
  StyledHeaderTexts,
} from './styled-components';

import type { DynamicDialogHeaderProps } from '../dynamic-dialog.interfaces';

/**
 * Header component for the DynamicDialog
 */
export const DynamicDialogHeader = ({
  dataTestId = 'dynamic-dialog-header',
  title,
  icon,
  description,
  showDescription = true,
  showBackButton = true,
  actions,
  showActions = true,
  visible = true,
  className,
  onBackButtonClick,
}: DynamicDialogHeaderProps): ReactElement | null => {
  const { theme } = useCss();
  const { t } = useTranslation();

  const {
    fullViewport,
    draggable,
    toggleFullViewport,
    close,
    closable,
    isMobile,
    handleDragStart,
  } = useDynamicDialog();

  if (!visible) {
    return null;
  }

  const showDragHandle = draggable && !fullViewport && !isMobile;

  return (
    <StyledDialogHeader
      data-testid={dataTestId}
      className={className}
      $draggable={false}
      $fullViewport={fullViewport}
      $isMobile={isMobile}
    >
      {showDragHandle && (
        <StyledDragHandle
          data-testid="drag-handle"
          onPointerDown={handleDragStart}
        >
          <Draggable
            width={COMMON_ICON_SIZE_16}
            height={COMMON_ICON_SIZE_16}
            color={theme.colors.neutralSubdued}
            style={{
              rotate: '90deg',
            }}
          />
        </StyledDragHandle>
      )}

      {/* Main header row - back button, content, and actions */}
      <StyledHeaderMainRow>
        {/* Back Button */}
        {showBackButton && (
          <IconButton
            onClick={onBackButtonClick}
            size="32px"
            kind="control"
          >
            <ArrowLeft />
          </IconButton>
        )}

        {/* Header Content */}
        <StyledHeaderContent>
          {/* Icon */}
          {icon && icon}

          {/* Text Content */}
          <StyledHeaderTexts>
            {title && (
              <TruncatedText
                textProps={{
                  variant: 'h2',
                  fontWeight: 'bold',
                  color: 'neutralStrong',
                  margin: 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
                tooltipProps={{
                  content: title,
                }}
                zIndex={DIALOG_Z_INDEX.TOOLTIP}
              >
                {title}
              </TruncatedText>
            )}
            {description && showDescription && (
              <TruncatedText
                textProps={{
                  variant: 'bodySmall',
                  color: 'neutral',
                  margin: 0,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                }}
                tooltipProps={{
                  content: description,
                }}
                zIndex={DIALOG_Z_INDEX.TOOLTIP}
              >
                {description}
              </TruncatedText>
            )}
          </StyledHeaderTexts>
        </StyledHeaderContent>

        {/* Actions */}
        <StyledHeaderActions>
          {actions && showActions && actions}

          {/* Full Viewport Toggle */}
          {!isMobile && (
            <StatefulTooltipNext
              content={
                fullViewport
                  ? t('dynamicDialog.header.actions.minimize')
                  : t('dynamicDialog.header.actions.expand')
              }
              ignoreBoundary
              placement="auto"
              popoverMargin={8}
              zIndex={DIALOG_Z_INDEX.TOOLTIP}
              showArrow
            >
              <IconButton
                onClick={toggleFullViewport}
                size="32px"
                kind="tertiary"
              >
                {fullViewport ? <Minimize /> : <Maximize />}
              </IconButton>
            </StatefulTooltipNext>
          )}

          {/* Close Button */}
          {closable && (
            <StatefulTooltipNext
              content={t('dynamicDialog.header.actions.close')}
              ignoreBoundary
              placement="auto"
              popoverMargin={8}
              zIndex={DIALOG_Z_INDEX.TOOLTIP}
              showArrow
            >
              <IconButton
                onClick={close}
                size="32px"
                kind="control"
              >
                <Close />
              </IconButton>
            </StatefulTooltipNext>
          )}
        </StyledHeaderActions>
      </StyledHeaderMainRow>
    </StyledDialogHeader>
  );
};
