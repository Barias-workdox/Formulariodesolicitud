import { useRef, useState } from 'react';
import type { FormEvent, ReactElement } from 'react';

import { useMessageComposer } from '@hooks/use-message-composer/use-message-composer.hook';
import { noop } from '@utils/noop';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { useCss } from '../../utils/hooks/use-css';
import { useHtmlSelection } from '../hooks/use-html-selection';
import { MentionsPopover } from '../mentions-popover';

import { DefaultComposerTextareaContainer } from './containers/default-composer-textarea-container';
import { StyledRoot, styles } from './message-composer.styles';
import {
  getUserMentionHtmlString,
  mentionCharacter,
  mentionCharacterWrapper,
  mentionTrigger,
  newMentionCharacterTypedRegex,
} from './user-mention';

import type { MessagesUser } from '../messages.interfaces';
import type { MessageComposerProps } from './message-composer.interfaces';

/**
 * This is the textarea to create and edit a message.
 * The button create a message will be shown if the prop "isEditing" is false.
 * Otherwise, if "isEditing" is true then cancel and save buttons will be rendered.
 */
export const MessageComposer = ({
  'data-testid': dataTestId = 'message-composer',
  $maxHeight,
  isDisabled = false,
  isEditing = false,
  isLoading = false,
  isMentionable = false,
  maxCharacters = 2048,
  overrides = {},
  placeholder,
  startEnhancer,
  users = [],
  value = '',
  onCancel = noop,
  onCreate = noop,
  onUpdate = noop,
  onChange = noop,
}: MessageComposerProps): ReactElement => {
  const {
    MentionsPopover: MentionsPopoverOverride,
    Root: RootOverride,
    Textarea: TextareaOverride,
  } = overrides;

  const Popover = getOverride(MentionsPopoverOverride) || MentionsPopover;
  const Root = getOverride(RootOverride) || StyledRoot;
  const Textarea = getOverride(TextareaOverride) || DefaultComposerTextareaContainer;

  const { userMentionStyles, theme } = useCss(styles);

  const [showUsersPopover, setShowUsersPopover] = useState(false);
  const [mentionCharacterIndex, setMentionCharacterIndex] = useState(0);
  const composerRef = useRef<HTMLDivElement>(null);

  const {
    handleChange,
    handleKeyDown,
    handlePaste,
    handleCreate,
    textareaRef,
    value: localValue,
  } = useMessageComposer({
    defaultValue: value,
    maxLength: maxCharacters,
    onChange,
    onCreate,
  });

  /** This is the cursor selection in the edit field, it can take the start and end of a selection. */
  const { selectionRange, updateSelection, setSelectionOffset, addSelectionListenersByClassName } =
    useHtmlSelection(textareaRef.current);

  /**
   * Listen if "mentionCharacter" is pressed, if the "mentionCharacter" is the first character in editing
   * or is preceded by a space, the UsersPopover will be displayed.
   * First, we check if the last pressed character is the mention character
   * onKeyDown event doesn't works for this case as the textarea doesn't contain yet the last character pressed
   * onKeyUp event is a very late event.
   * This is why we calculate the difference with the messageText content.
   */
  function evaluateMention(e: FormEvent<HTMLDivElement>): void {
    if (textareaRef.current) {
      const previousMentions = localValue.split(mentionCharacter).length;
      const currentMentions = e.currentTarget.innerHTML.split(mentionCharacter).length;
      const isMentionCharacterPressed = currentMentions > previousMentions;

      handleChange(textareaRef.current.innerHTML);

      if (isMentionable && isMentionCharacterPressed) {
        updateSelection(textareaRef.current);

        const isFirstCharacter = textareaRef.current.innerHTML[0] === mentionCharacter;

        if (
          textareaRef.current.innerHTML.match(new RegExp(mentionTrigger(isFirstCharacter), 'i'))
        ) {
          setShowUsersPopover(true);

          // Wrap the "mentionCharacter" with a span as a helper to identify as the latest "mentionCharacter"
          // to add a possible mentioned user.
          const mentionCharacterIndexUpdated = mentionCharacterIndex + 1;

          textareaRef.current.innerHTML = textareaRef.current.innerHTML.replace(
            newMentionCharacterTypedRegex(isFirstCharacter),
            (match, group1, group2) => {
              if (group2) {
                return `${group1 ? group1 : ''}${mentionCharacterWrapper(
                  mentionCharacterIndexUpdated,
                )}`;
              }

              return match;
            },
          );

          setMentionCharacterIndex(mentionCharacterIndexUpdated);
        }
      }
    }
  }

  /**
   * Focuses the text in a selection range, it is useful to return the focus when a user is chosen in the popover
   * or when canceling with escape the users popover.
   */
  function focusTextarea(offset = 0, start: number | null = null, end: number | null = null): void {
    const [cursorStart, cursorEnd] = selectionRange;

    setSelectionOffset((start ?? cursorStart) + offset, (end ?? cursorEnd) + offset + 1);
  }

  /**
   * Add the user's name to the text being edited when clicked, then return the focus within the text
   */
  function onUserSelected(user: MessagesUser): void {
    if (textareaRef.current) {
      const beforeTextLength = textareaRef.current.textContent?.length ?? 0;

      textareaRef.current.innerHTML = textareaRef.current.innerHTML.replace(
        mentionCharacterWrapper(mentionCharacterIndex),
        getUserMentionHtmlString(user, userMentionStyles),
      );

      const afterTextLength = textareaRef.current.textContent?.length ?? 0;

      handleChange(textareaRef.current.innerHTML);

      focusTextarea(afterTextLength - beforeTextLength + 1);

      // Add listeners for mentioned users to be selected with a click
      addSelectionListenersByClassName(userMentionStyles);
    }
  }

  return (
    <Root
      $isEditing={isEditing}
      ref={composerRef}
      {...getOverrideProps(RootOverride)}
    >
      {isMentionable && (
        <Popover
          dataTestId={`${dataTestId}__mentions-popover`}
          users={users}
          onUserSelected={onUserSelected}
          isOpen={showUsersPopover}
          setIsOpen={setShowUsersPopover}
          width={`calc(${composerRef.current?.clientWidth}px - ${theme.spacing.spacing2xs8})`}
          onEsc={(): void => focusTextarea(1)}
          {...getOverrideProps(MentionsPopoverOverride)}
        />
      )}
      <Textarea
        data-testid={dataTestId}
        messageRef={textareaRef}
        localValue={localValue}
        placeholder={placeholder}
        isLoading={isLoading}
        isEditing={isEditing}
        isDisabled={isDisabled}
        $maxHeight={$maxHeight}
        startEnhancer={startEnhancer}
        evaluateMention={evaluateMention}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onCreate={handleCreate}
        onUpdate={onUpdate}
        onCancel={onCancel}
        {...getOverrideProps(TextareaOverride)}
      />
    </Root>
  );
};
