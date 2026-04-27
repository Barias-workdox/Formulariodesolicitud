import type { ComponentType, ReactElement } from 'react';
import React, { useState, forwardRef } from 'react';

import { BackgroundIcon } from '@components/background-icon';
import { Text } from '@components/text';

import { ICON_SIZE_MAPPING, SIZE_MAPPING } from './account-menu-button.constants';
import { getBackgroundIconOverrides, textOverrides } from './account-menu-button.overrides';
import { StyledAccountMenuButton, StyledEndEnhancer } from './account-menu-button.styles';

import type { AccountMenuButtonProps, EnhancerType } from './account-menu-button.interfaces';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';

/**
 * Helper function to render an icon (Carbon icon or React element)
 */
const renderIcon = (Icon: EnhancerType, size: string | number): ReactElement => {
  if (React.isValidElement(Icon)) {
    return Icon;
  }

  const IconComponent = Icon as CarbonIconType | ComponentType<{ size?: string | number }>;

  return <IconComponent size={size} />;
};

/**
 * An account menu button component that displays an icon and text.
 * Designed specifically for use within the AccountMenu component.
 * Implements WCAG 2.1 AA accessibility guidelines.
 */
export const AccountMenuButton = forwardRef<HTMLButtonElement, AccountMenuButtonProps>(
  (
    {
      startEnhancer,
      text,
      endEnhancer,
      onClick,
      isActive = false,
      isDisabled = false,
      isTriggerButton = false,
      variant = 'large',
      ariaLabel,
      role = 'button',
      dataRole,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      tabIndex = 0,
      ariaSelected,
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    /** Handles mouse enter event to set hover state */
    const handleMouseEnter = (): void => {
      setIsHovered(true);
    };

    /** Handles mouse leave event to clear hover state */
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };

    /** Handles keydown events for accessibility */
    const handleKeyDown = (event: React.KeyboardEvent): void => {
      if (isDisabled) return;

      const { key } = event;

      // Handle Enter and Space keys
      if (key === 'Enter' || key === ' ') {
        event.preventDefault();
        onClick?.();
      }
    };

    /** Renders the button content */
    const renderButtonContent = (): ReactElement => (
      <>
        <BackgroundIcon
          shape="square"
          size={SIZE_MAPPING[variant]}
          overrides={getBackgroundIconOverrides({ isActive, isHovered })}
        >
          {renderIcon(startEnhancer, ICON_SIZE_MAPPING[variant])}
        </BackgroundIcon>
        {typeof text === 'string' ? (
          <Text
            variant="bodySmall"
            overrides={textOverrides}
          >
            {text}
          </Text>
        ) : (
          text
        )}
        {endEnhancer && (
          <StyledEndEnhancer>
            {renderIcon(endEnhancer, ICON_SIZE_MAPPING[variant])}
          </StyledEndEnhancer>
        )}
      </>
    );

    return (
      <StyledAccountMenuButton
        ref={ref}
        type="button"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        disabled={isDisabled}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        $isActive={isActive}
        $isHovered={isHovered}
        $isDisabled={isDisabled}
        $isTriggerButton={isTriggerButton}
        // Accessibility attributes
        role={role}
        aria-label={ariaLabel}
        aria-haspopup={ariaHasPopup}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-selected={ariaSelected}
        tabIndex={isDisabled ? -1 : tabIndex}
        data-role={dataRole}
        // Additional accessibility attributes
        aria-disabled={isDisabled}
        aria-pressed={isActive}
      >
        {renderButtonContent()}
      </StyledAccountMenuButton>
    );
  },
);

AccountMenuButton.displayName = 'AccountMenuButton';
