import { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import { CloseOutline } from '@carbon/icons-react';

import { StaggeredAnimation } from '@components/staggered-animation';
import { useCss } from '@components/utils/hooks/use-css';

import { ReactComponent as BrainIcon } from '../../../../assets/icons/webdox-ai/brain-icon.svg';

import {
  StyledButton,
  StyledButtonsGroupContainer,
  StyledCollapsibleContainer,
  StyledContainer,
} from './styled-components';
import { styles } from './webdox-ai-button.styles';

import type { DirectionType } from './webdox-ai-collapsible-button.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface WebdoxAICollapsibleButtonProps extends WithTestId {
  options: ReactNode[];
  direction?: DirectionType;
  isToggled?: boolean;
  isLoading?: boolean;

  onToggle?(): void;
}

/** Component that displays an animated button to use it in WebdoxAI pages. */
export const WebdoxAICollapsibleButton = forwardRef<
  HTMLButtonElement,
  WebdoxAICollapsibleButtonProps
>(function WebdoxAICollapsibleButtonInner(
  {
    dataTestId,
    options = [],
    direction = 'column',
    isToggled = false,
    isLoading = false,
    onToggle,
  },
  ref,
): JSX.Element {
  const [hasAnimationEnded, setHasAnimationEnded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const { css, theme } = useCss(styles, { $isHovered: isHovered });

  /**
   * Calculates the height and width of its content to perform an animation.
   * The `hasAnimationEnded` state is used to prevent further height calculations
   * once the content is fully expanded.
   */
  useLayoutEffect(() => {
    if (isToggled && contentRef.current && !hasAnimationEnded) {
      setContentHeight(contentRef.current.scrollHeight);
      setContentWidth(contentRef.current.scrollWidth);
      setHasAnimationEnded(true);
    }

    if (!isToggled && hasAnimationEnded) {
      setHasAnimationEnded(false);
    }
  }, [hasAnimationEnded, isToggled, setHasAnimationEnded]);

  return (
    <StyledContainer $direction={direction}>
      <StyledCollapsibleContainer
        ref={contentRef}
        $contentHeight={contentHeight}
        $contentWidth={contentWidth}
        $isToggled={isToggled}
        $direction={direction}
      >
        {isToggled && (
          <StyledButtonsGroupContainer $direction={direction}>
            <StaggeredAnimation order={direction === 'column' ? 'desc' : 'asc'}>
              {options}
            </StaggeredAnimation>
          </StyledButtonsGroupContainer>
        )}
      </StyledCollapsibleContainer>

      <StyledButton
        $isLoading={isLoading}
        $isToggled={isToggled}
        data-testid={dataTestId}
        ref={ref}
        type="button"
        onClick={onToggle}
        onMouseEnter={(): void => setIsHovered(true)}
        onMouseLeave={(): void => setIsHovered(false)}
      >
        <BrainIcon
          data-testid={`${dataTestId}--brain-icon`}
          className={css(styles.iconStyles({ isHovered, isActive: !isToggled }))}
        />
        <CloseOutline
          data-testid={`${dataTestId}--close-icon`}
          className={css(styles.iconStyles({ isHovered, isActive: isToggled }))}
          color={theme.colors.neutral}
        />
      </StyledButton>
    </StyledContainer>
  );
});

WebdoxAICollapsibleButton.displayName = 'WebdoxAICollapsibleButton';
