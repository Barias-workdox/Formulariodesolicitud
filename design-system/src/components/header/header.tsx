import { useMemo } from 'react';

import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Close,
  Draggable,
  OverflowMenuHorizontal,
} from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { getAllowedComponent } from '@utils/react.utils';

import { ALLOWED_ENHANCER_ELEMENTS } from './constants/allowed-elements.constant';
import { getButtonAriaLabelOverride } from './header.overrides';
import { HeaderWrapper, HeaderSection } from './header.styled';
import { composeDataTestId } from './utils/compose-data-test-id';
import {
  getActionButtonSize,
  getMapSize,
  getPaddingSize,
  getTextVariant,
  getTitleWeight,
} from './utils/size-maps';

import type { HeaderProps } from './header.interfaces';

/**
 * Header component to be used within other components.
 */
const HeaderComponent = ({
  title,
  dataTestId,
  size = 'xsmall',
  borderRadius = 'borderSm',
  enhancer,
  actions,
  isDraggable,
  isDisabled,
  iconButton,
  isExpanded,
  onCollapsibleButtonClick,
  onBackButtonClick,
  onClose,
}: HeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const startEnhancerContent = getAllowedComponent(enhancer, ALLOWED_ENHANCER_ELEMENTS);

  const shouldRenderBackButton = Boolean(onBackButtonClick);
  const shouldRenderDraggableIcon = Boolean(isDraggable) && size !== 'medium';
  const shouldRenderCloseButton = Boolean(onClose);
  const shouldRenderCollapsibleButton = Boolean(onCollapsibleButtonClick);

  const gapSize = getMapSize(size);
  const paddingSize = getPaddingSize(size);
  const actionButtonSize = getActionButtonSize(size);
  const textVariant = getTextVariant(size);
  const titleWeight = getTitleWeight(size);

  const testId = composeDataTestId(dataTestId ?? '');

  const overflowMenuAriaLabelOverrides = useMemo(
    () => getButtonAriaLabelOverride(t('general.menu')),
    [t],
  );

  const draggableAriaLabelOverrides = useMemo(
    () => getButtonAriaLabelOverride(t('general.drag')),
    [t],
  );

  const expandAriaLabelOverrides = useMemo(
    () => getButtonAriaLabelOverride(t(isExpanded ? 'general.collapse' : 'general.expand')),
    [t, isExpanded],
  );

  const backAriaLabelOverrides = useMemo(() => getButtonAriaLabelOverride(t('general.back')), [t]);

  const closeAriaLabelOverrides = useMemo(
    () => getButtonAriaLabelOverride(t('general.close')),
    [t],
  );

  return (
    <header>
      <HeaderWrapper
        data-testid={testId}
        $isDisabled={isDisabled}
        $borderRadius={borderRadius}
        $padding={paddingSize}
        $gap={gapSize}
      >
        <HeaderSection $gap={gapSize}>
          {shouldRenderDraggableIcon && (
            <IconButton
              dataTestId={`${testId}--draggable`}
              size={actionButtonSize}
              kind="ghost-tertiary"
              overrides={draggableAriaLabelOverrides}
              disabled={isDisabled}
            >
              <Draggable />
            </IconButton>
          )}
          {shouldRenderBackButton && (
            <IconButton
              dataTestId={`${testId}--back-button`}
              size={actionButtonSize}
              onClick={onBackButtonClick}
              overrides={backAriaLabelOverrides}
              disabled={isDisabled}
            >
              <ChevronLeft />
            </IconButton>
          )}
          {startEnhancerContent}
          <TruncatedText
            textProps={{
              variant: textVariant,
              color: isDisabled ? 'neutralDepressed' : 'neutralStrong',
              fontWeight: titleWeight,
              margin: 0,
            }}
            tooltipProps={{ content: title }}
          >
            {title}
          </TruncatedText>
        </HeaderSection>
        <HeaderSection $gap={gapSize}>
          {actions}
          {iconButton && (
            <IconButton
              size={actionButtonSize}
              dataTestId={`${testId}--overflow-menu`}
              kind="tertiary"
              overrides={overflowMenuAriaLabelOverrides}
              disabled={isDisabled}
            >
              <OverflowMenuHorizontal />
            </IconButton>
          )}
          {shouldRenderCloseButton && (
            <IconButton
              dataTestId={`${testId}--close-button`}
              size={actionButtonSize}
              disabled={isDisabled}
              onClick={onClose}
              overrides={closeAriaLabelOverrides}
            >
              <Close />
            </IconButton>
          )}
          {shouldRenderCollapsibleButton && (
            <IconButton
              dataTestId={`${testId}--expand`}
              overrides={expandAriaLabelOverrides}
              disabled={isDisabled}
              size={actionButtonSize}
              onClick={onCollapsibleButtonClick}
            >
              {isExpanded ? <ChevronUp /> : <ChevronDown />}
            </IconButton>
          )}
        </HeaderSection>
      </HeaderWrapper>
    </header>
  );
};

export { HeaderComponent };
