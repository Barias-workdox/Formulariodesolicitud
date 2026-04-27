import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, ReactElement } from 'react';

import { Search } from '@carbon/icons-react';
import { Input } from 'baseui/input';
import { Popover } from 'baseui/popover';

import { VirtualizedMenu } from '@components/menu/virtualized-menu';
import { useTranslation } from '@components/utils/i18n';

import { Avatar } from '../../avatar';
import { Spinner } from '../../spinner';
import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import { MENTIONS_POPOVER_MAX_HEIGHT, USER_MENTION_HEIGHT } from './mentions-popover.constants';
import {
  listStyles,
  popoverOverrides,
  getSearcherInputOverrides,
  searcherStyles,
} from './mentions-popover.styles';

import type { MessagesUser } from '../messages.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface UsersPopoverControlledProps extends WithTestId {
  users: MessagesUser[];
  /** The key on User model used to apply local search and show in options */
  isLoading?: boolean;
  isOpen: boolean;
  width: string;
  onUserSelected(user: MessagesUser): void;
  setIsOpen(isOpen: boolean): void;
  /** On escape button pressed */
  onEsc(): void;
}

interface SearcherProps extends WithTestId {
  value: string;
  isOpen: boolean;
  onChange(value: string): void;
}

/** Search box, used to filter users array */
const Searcher = ({
  dataTestId = 'mentions-popover__searcher',
  value,
  isOpen,
  onChange,
}: SearcherProps): ReactElement => {
  const { containerStyles } = useCss(searcherStyles);
  const ref = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  /**
   * Places the focus on the searcher within the popover when displayed.
   */
  useEffect(() => {
    if (isOpen) {
      ref.current?.focus();
    }
  }, [isOpen]);

  return (
    <div
      data-testid={dataTestId}
      className={containerStyles}
    >
      <Search
        size={16}
        aria-hidden="true"
      />
      <Input
        inputRef={ref}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value)}
        placeholder={t('general.search')}
        aria-label={t('general.search')}
        role="searchbox"
        overrides={getSearcherInputOverrides({ dataTestId })}
      />
    </div>
  );
};

/**
 * Popover that unfolds when an arroba `@` is written in the message-composer, is used to create mentions within the comment.
 */
export const MentionsPopover = ({
  dataTestId = 'mentions-popover',
  users,
  isLoading = false,
  isOpen: externalIsOpen,
  width,
  onEsc,
  onUserSelected,
  setIsOpen: externalSetIsOpen,
}: UsersPopoverControlledProps): ReactElement => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(externalIsOpen);
  const { containerStyles, itemLabelTemplateStyles, emptyListStyles, userDataStyles, theme } =
    useCss(listStyles);
  const { t } = useTranslation();

  /**
   * Shows the popover controlled from the externalIsOpen property
   */
  useEffect(() => {
    // Reset the search value when the popover is opened
    if (externalIsOpen) {
      setSearchValue('');
    }

    setIsOpen(externalIsOpen);
  }, [externalIsOpen]);

  /**
   * Closes the popover
   */
  function close(): void {
    if (externalIsOpen === undefined) {
      setIsOpen(false);
    } else {
      externalSetIsOpen(false);
    }
  }

  /**
   * Event called when pressing escape button
   */
  function onEscapePressed(): void {
    close();
    onEsc();
  }

  /**
   * Users filtered by the search input string
   */
  const filteredUsers = users.length
    ? users.filter(
        (user) =>
          user.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
          user.email?.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
      )
    : [];

  /**
   * When the user selects an item from the dropdown, the function closes the dropdown and calls the
   * onUserSelected function with the selected item.
   */
  function onItemSelect(user: MessagesUser): void {
    close();
    onUserSelected(user);
  }

  /**
   * List of filtered users as react component
   */
  const filteredUsersJsx = filteredUsers?.length ? (
    <div
      data-testid={`${dataTestId}__list`}
      role="listbox"
      aria-label="Mention suggestions"
      className={containerStyles}
    >
      <VirtualizedMenu
        dataTestId={`${dataTestId}__list`}
        items={filteredUsers}
        itemSize={USER_MENTION_HEIGHT}
        maxHeight={MENTIONS_POPOVER_MAX_HEIGHT}
        onItemSelect={({ item }): void => onItemSelect(item)}
        itemLabelTemplate={(user: MessagesUser): ReactElement => (
          <div className={itemLabelTemplateStyles}>
            <Avatar
              name={user.name}
              size="32px"
            />
            <div className={userDataStyles}>
              <Text
                variant="bodySmall"
                $style={{
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: theme.colors.neutral,
                }}
              >
                {user.name}
              </Text>
              {user.email && (
                <Text
                  variant="bodySmall"
                  $style={{
                    margin: 0,
                    color: theme.colors.neutralSubdued,
                  }}
                >
                  {user.email}
                </Text>
              )}
            </div>
            {user.label && (
              <Text
                variant="upperDetails"
                $style={listStyles.labelStyles(theme)}
              >
                {user.label}
              </Text>
            )}
          </div>
        )}
      />
    </div>
  ) : (
    <div
      data-testid={`${dataTestId}__empty`}
      role="status"
      aria-live="polite"
      className={emptyListStyles}
    >
      <Text
        variant="bodySmall"
        alignSelf="center"
        color="neutralDepressed"
      >
        {t('general.empty')}
      </Text>
    </div>
  );

  return (
    <Popover
      autoFocus
      returnFocus
      placement="top"
      isOpen={isOpen}
      onClickOutside={close}
      onEsc={onEscapePressed}
      ignoreBoundary
      popoverMargin={8}
      content={
        <div style={{ width }}>
          <Searcher
            dataTestId={`${dataTestId}__searcher`}
            value={searchValue}
            onChange={setSearchValue}
            isOpen={isOpen}
          />
          {isLoading ? (
            <div
              data-testid={`${dataTestId}__loading`}
              className={emptyListStyles}
              role="status"
              aria-live="polite"
              aria-busy="true"
            >
              <Spinner />
            </div>
          ) : (
            filteredUsersJsx
          )}
        </div>
      }
      overrides={popoverOverrides}
    >
      {/** this div is required to show the popover correctly as it is controlled */}
      <div />
    </Popover>
  );
};
