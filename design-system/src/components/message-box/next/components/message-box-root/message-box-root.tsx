import { Fragment, useMemo, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import { useClickAway } from 'react-use';

import { useMessageBoxContext } from '../../hooks';
import { StyledRoot } from '../../styled-components';

import type { MessageBoxPlugin } from '../../message-box.interfaces';
import type { StyleObject } from 'styletron-react';

export type MessageBoxRootProps = PropsWithChildren<{
  margin?: StyleObject['margin'];
  maxHeight?: StyleObject['maxHeight'];
  width?: StyleObject['width'];
  plugins?: MessageBoxPlugin[];
}>;

/**
 * MessageBoxRoot component
 * This component is used to wrap the message box container
 * and add the custom styles
 */
export const MessageBoxRoot = ({
  children,
  margin,
  maxHeight,
  width,
  plugins,
}: MessageBoxRootProps): JSX.Element => {
  const { textValue, setIsFocused } = useMessageBoxContext();

  const textEditorRef = useRef<HTMLDivElement>(null);

  useClickAway(textEditorRef, () => {
    setIsFocused(false);
  });

  const pluginsNode = useMemo(
    () =>
      plugins?.map((plugin) => (
        <Fragment key={plugin.name}>{plugin.render?.({ textValue })}</Fragment>
      )),
    [plugins, textValue],
  );

  return (
    <StyledRoot
      $maxHeight={maxHeight}
      $width={width}
      $margin={margin}
      ref={textEditorRef}
    >
      {pluginsNode}
      {children}
    </StyledRoot>
  );
};
