import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';

import { getOverrides } from 'baseui';

import { IconButton } from '@components/button';
import { ArrowIcon } from '@components/select/components';

import {
  StyledActionIcons,
  StyledBody,
  StyledHeader,
  StyledRoot,
} from './collapsible-content.styles';

import type { CollapsibleContentProps, SharedProps } from './collapsible-content.interfaces';
import type { StyleObject } from 'styletron-react';

/**
 * A collapsible content component with a header and body.
 * The body will expand and collapse based on the isOpen state.
 * The height of the body is determined by the content inside.
 * The height is animated when the isOpen state changes.
 */
export const CollapsibleContent = ({
  dataTestId = 'collapsible-content',
  title = <span />,
  initialState,
  children,
  overrides = {},
}: CollapsibleContentProps): ReactElement => {
  const innerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState<StyleObject['height']>('auto');
  const [isOpen, setIsOpen] = useState(initialState);

  /** Toggle the open state of the content */
  const toggleIsOpen = (): void => setIsOpen((prev) => !prev);

  const sharedProps: SharedProps = {
    $isOpen: isOpen,
    $height: height,
    $onToggle: toggleIsOpen,
  };

  const [Root, rootProps] = getOverrides<SharedProps>(overrides.Root, StyledRoot);

  const [Header, headerProps] = getOverrides<SharedProps>(overrides.Header, StyledHeader);

  const [Body, bodyProps] = getOverrides<SharedProps>(overrides.Body, StyledBody);

  const [ActionIcons, actionIconsProps] = getOverrides<SharedProps>(
    overrides.ActionIcons,
    StyledActionIcons,
  );

  // When the component mounts, observe the inner content for changes in height
  useEffect(() => {
    if (innerRef.current) {
      const resizeObserver = new ResizeObserver((): void => {
        requestAnimationFrame((): void => {
          if (innerRef.current) {
            const height = `${innerRef.current.scrollHeight}px`;

            setHeight(height);
          }
        });
      });

      resizeObserver.observe(innerRef.current);

      return (): void => resizeObserver.disconnect();
    }
  }, []);

  return (
    <Root
      {...rootProps}
      {...sharedProps}
    >
      <Header
        {...headerProps}
        {...sharedProps}
      >
        {title}

        <ActionIcons
          {...actionIconsProps}
          {...sharedProps}
        >
          <IconButton
            data-testid={`${dataTestId}__toggle-button`}
            aria-expanded={isOpen}
            size="24px"
            onClick={toggleIsOpen}
          >
            <ArrowIcon isOpen={isOpen} />
          </IconButton>
        </ActionIcons>
      </Header>
      <Body
        {...bodyProps}
        {...sharedProps}
      >
        <div ref={innerRef}>{children}</div>
      </Body>
    </Root>
  );
};
