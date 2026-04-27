import { ChevronRight } from '@carbon/icons-react';
import { Link } from 'react-router-dom';

import { Avatar } from '@components/avatar';
import { BackgroundIcon } from '@components/background-icon';
import { useSidebar } from '@components/sidebar/sidebar.provider';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next/stateful-tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_ICON_SIZE_16 } from '@constants/common.constants';
import { sanitizeUrl } from '@utils/url.utils';

import { Sublink } from '../sublink/sublink';

import { useSidebarLinkSublink } from './hooks/use-sidebar-link-sublink.hook';
import { ICON_SIZE_MAPPING, SIZE_MAPPING } from './sidebar-link.constants';
import {
  getAvatarOverrides,
  getBackgroundIconOverrides,
  getTextOverrides,
} from './sidebar-link.overrides';
import { styles } from './sidebar-link.styles';

import type { SidebarLinkProps } from './sidebar-link.interfaces';

/**
 * A sidebar link component that displays an icon and text, with collapsible functionality.
 * When collapsed, only the icon is shown; when expanded, both icon and text are visible.
 * Supports both internal navigation and external links.
 */
export const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  Icon,
  text,
  onClick,
  isActive,
  isAvatar,
  isDisabled,
  isExternal,
  hideTextWhenCollapsed = true,
  subLinks = [],
  variant = 'large',
  ...props
}) => {
  const { isCollapsed } = useSidebar();
  const {
    hasSubLinks,
    isHovered,
    linkRef,
    shouldShowSublink,
    sublinkItems,
    sublinkPosition,
    sublinkRef,
    handleMouseEnter,
    handleMouseOut,
    handleBlur,
  } = useSidebarLinkSublink({ subLinks, isDisabled });

  const { rootStyles, chevronStyles } = useCss(styles, {
    isAvatar,
    isActive,
    isHovered,
    isDisabled,
    isCollapsed,
  });

  const dataTestId = `sidebar-link__${sanitizeUrl(href)}`;
  const shouldRenderText = text && (!hideTextWhenCollapsed || !isCollapsed);
  const shouldRenderChevron = hasSubLinks && (!isCollapsed || !hideTextWhenCollapsed);
  const tooltipContent = isCollapsed && hideTextWhenCollapsed && !hasSubLinks ? text : undefined;

  /** Renders the link content */
  const renderLinkContent = (): React.ReactElement => (
    <>
      {isAvatar ? (
        <Avatar
          size={SIZE_MAPPING[variant]}
          name={text}
          showTooltip={false}
          overrides={getAvatarOverrides({ isActive, isHovered })}
        />
      ) : (
        <BackgroundIcon
          data-testid={`${dataTestId}__icon`}
          shape="square"
          size={SIZE_MAPPING[variant]}
          overrides={getBackgroundIconOverrides({ isActive, isHovered })}
        >
          {Icon && <Icon size={ICON_SIZE_MAPPING[variant]} />}
        </BackgroundIcon>
      )}

      {shouldRenderText && (
        <Text
          variant="bodySmall"
          overrides={getTextOverrides({ isCollapsed, hideTextWhenCollapsed })}
        >
          {text}
        </Text>
      )}

      {shouldRenderChevron && (
        <ChevronRight
          data-testid={`${dataTestId}__chevron`}
          size={COMMON_ICON_SIZE_16}
          className={chevronStyles}
        />
      )}
    </>
  );

  return (
    <StatefulTooltipNext
      showArrow
      ignoreBoundary
      placement="right"
      content={tooltipContent}
    >
      <div
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseOut}
        onFocus={handleMouseEnter}
        onBlur={handleBlur}
        onFocusCapture={handleMouseEnter}
        onBlurCapture={handleBlur}
      >
        {isExternal ? (
          <a
            data-testid={`${dataTestId}__link`}
            href={href}
            onClick={onClick}
            className={rootStyles}
            target="_blank"
            rel="noopener noreferrer"
            ref={linkRef}
            {...props}
          >
            {renderLinkContent()}
          </a>
        ) : (
          <Link
            data-testid={`${dataTestId}__link`}
            to={href}
            onClick={onClick}
            className={rootStyles}
            ref={linkRef}
            {...props}
          >
            {renderLinkContent()}
          </Link>
        )}

        {shouldShowSublink && sublinkPosition && sublinkItems.length > 0 && (
          <Sublink
            ref={sublinkRef}
            title={text ?? ''}
            items={sublinkItems}
            position={sublinkPosition}
          />
        )}
      </div>
    </StatefulTooltipNext>
  );
};
