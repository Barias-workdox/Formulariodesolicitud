import { useEffect, useRef, useState } from 'react';

import { MessageBox } from '@components/message-box/message-box';

import { StyledAddons, StyledAddonsContainer } from './styled-components';

import type { MessageBoxProps } from '@components/message-box/message-box';

export type MessageBoxWithAddonsProps = MessageBoxProps & {
  addons: JSX.Element;
};

/**
 * This component renders a message box with additional elements (addons). It includes functionality
 * for expanding and collapsing the textarea, and handles input, paste, and key down events.
 * The height of the addons is calculated to use for animation when hiding them.
 */
export const MessageBoxWithAddons = ({
  addons,
  isExpanded,
  isOpen,
  ...rest
}: MessageBoxWithAddonsProps): JSX.Element => {
  const [addonsHeight, setAddonsHeight] = useState(0);

  const addonsRef = useRef<HTMLDivElement>(null);

  /**
   * This function updates the state with the current height of the addons container.
   */
  const calculateHeight = (): void => {
    if (addonsRef.current) {
      setAddonsHeight(addonsRef.current.clientHeight);
    }
  };

  /** Calculate the height of the addons to use for animation when hiding them. */
  useEffect(() => {
    calculateHeight();

    const observer = new MutationObserver(calculateHeight);
    if (addonsRef.current) {
      observer.observe(addonsRef.current, { childList: true, subtree: true });
    }

    return (): void => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <StyledAddonsContainer
        $height={addonsHeight}
        $isExpanded={isExpanded}
        $isOpen={isOpen}
      >
        <StyledAddons ref={addonsRef}>{addons}</StyledAddons>
      </StyledAddonsContainer>
      <MessageBox
        {...rest}
        isExpanded={isExpanded}
        isOpen={isOpen}
        addonsRef={addonsRef}
      />
    </>
  );
};
