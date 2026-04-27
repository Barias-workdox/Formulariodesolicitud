import { Fragment, useCallback, useState } from 'react';
import type { ReactNode } from 'react';

import { BrainViewerModal } from '@components/webdox-ai/components/brain-viewer-modal';
import { noop } from '@utils/noop';
import { getOverride } from '@utils/overrides.utils';

import { ActionMenu } from './components/action-menu';
import { StyledContainer } from './components/styled-container';
import { StyledFixedMenuContainer, StyledMenuContainer } from './components/styled-menu-container';
import { StyledMarkdownWrapper, StyledMarkdownWrapperViewer } from './components/styled-wrapper';

import type { CopyButtonTexts } from '../../../../../../brain-viewer-modal/interfaces';
import type { ChatBotChatMessageType } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

export interface MarkdownCustomTableProps extends WithTestId {
  children?: ReactNode;
  isMenuVisible?: boolean;
  questionValue: ChatBotChatMessageType['question']['value'];
  isFixed?: boolean;
  isViewerFullwidth?: boolean;
  copyText?: boolean;
  zIndex?: number;
  copyButtonTexts?: CopyButtonTexts;
  overrides?: {
    MarkdownElement?: OverrideObject<{ children: ReactNode }>;
    MarkdownElementViewer?: OverrideObject<{ children: ReactNode }>;
  };
  setIsMenuHovered?(isHovered: boolean): void;
}

/** A custom table to use within the brain companion markdown. */
export const MarkdownModal = ({
  'data-testid': dataTestId,
  children,
  isMenuVisible = true,
  questionValue,
  zIndex,
  isFixed = false,
  isViewerFullwidth = false,
  copyText = false,
  overrides = {},
  copyButtonTexts = {},
  setIsMenuHovered = noop,
}: MarkdownCustomTableProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [clipboardItem, setClipboardItem] = useState<ClipboardItem | string>('');

  const {
    MarkdownElement: MarkdownElementOverride,
    MarkdownElementViewer: MarkdownElementViewerOverride,
  } = overrides;

  const MarkdownElement = getOverride(MarkdownElementOverride) || Fragment;
  const MarkdownElementViewer = getOverride(MarkdownElementViewerOverride) || Fragment;

  const MenuActionContainer = isFixed ? StyledFixedMenuContainer : StyledMenuContainer;

  /**
   * Update the text in the clipboard item
   */
  const updateTextFromRef = useCallback(
    (node: HTMLElement): void => {
      if (!node) {
        return null;
      }

      const newClipboardItem = copyText
        ? node.textContent || ''
        : new ClipboardItem({
            'text/html': new Blob([node.outerHTML || ''], {
              type: 'text/html',
            }),
          });

      setClipboardItem(newClipboardItem);
    },
    [copyText],
  );

  return (
    <StyledContainer>
      <BrainViewerModal
        data-testid={`${dataTestId}__markdown-viewer`}
        title={questionValue}
        isOpen={isOpen}
        clipboardItem={clipboardItem}
        onClose={() => setIsOpen(false)}
        copyButtonTexts={copyButtonTexts}
        zIndex={zIndex}
      >
        <StyledMarkdownWrapperViewer $isFullWidth={isViewerFullwidth}>
          <MarkdownElementViewer ref={updateTextFromRef}>{children}</MarkdownElementViewer>
        </StyledMarkdownWrapperViewer>
      </BrainViewerModal>
      <MenuActionContainer
        $isVisible={isMenuVisible}
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
      >
        <ActionMenu
          data-testid={`${dataTestId}__markdown-menu`}
          clipboardItem={clipboardItem}
          onOpenTableViewer={() => setIsOpen(true)}
          copyButtonTexts={copyButtonTexts}
          zIndex={zIndex}
        />
      </MenuActionContainer>
      <StyledMarkdownWrapper>
        <MarkdownElement ref={updateTextFromRef}>{children}</MarkdownElement>
      </StyledMarkdownWrapper>
    </StyledContainer>
  );
};
