import { useCallback, useMemo, useState, type Ref } from 'react';

import { Popover } from 'baseui/popover';

import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { useTranslation } from '@components/utils/i18n';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';
import { noop } from '@utils/noop';

import { Spinner } from '../spinner';
import { Text } from '../text';
import { useContainerWidth } from '../utils/hooks/use-container-width';
import { useCss } from '../utils/hooks/use-css';

import { ArrowIconWrapper, UsersList } from './components';
import { popoverStyledOverrides, userMultiselectStyles } from './user-multiselect.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

export type UserType = { fullName: string; email: string; id: number | string; disabled?: boolean };

export interface UserMultiselectProps extends WithTestId {
  name?: string;
  /** User list to be displayed in the component popover */
  users: UserType[];
  /** Users List items that are rendered selected in the popover component checkbox */
  checkedUsers: UserType[];
  /** Placeholder to be displayed in the component input */
  placeholder?: string;
  /** If true, the component can't be clicked and it appears with more opacity  */
  disabled?: boolean;
  /** If true, a loading spinner will appear on the right side of the select */
  isLoading?: boolean;
  inputRef?: Ref<HTMLDivElement>;
  /** Callback used to update the checkedUsers list when the save button is clicked  */
  onChange(updatedUsers: UserType[]): void;
}

/** Returns the text of the badge to display to the rest of CheckUsers  */
export const getRemainingUsersLabel = (checkedUsersTotal: number): string =>
  `+${checkedUsersTotal - 1}`;

/**
 * This component has the functionality of a Select component,
 * used to select multiple users and display only the first selected user and
 * a badge with a counter of the rest of the selected users in the value.
 *
 * The users appear in the content of a popover ordered lexicographically,
 * first the selected ones and then the rest of the unselected users. Also
 * has a search input to filter the list of users
 *
 * Cannot be extended from Select because it has a very customized behavior.
 *
 * The value displays the full name of the first CheckedUser,
 * in case there is more than one, it displays a badge with the remaining CheckUsers
 */
export const UserMultiselect = ({
  dataTestId = 'user-multiselect',
  name,
  isLoading = false,
  disabled = false,
  users = [],
  checkedUsers = [],
  placeholder,
  inputRef: externalInputRef,
  onChange = noop,
}: UserMultiselectProps): JSX.Element => {
  const internalInputRef = useSyncedRef({ externalRef: externalInputRef });

  const [isOpen, setIsOpen] = useState(false);
  const { containerWidth } = useContainerWidth(internalInputRef);
  const { t } = useTranslation();

  const { containerWrapper, contentStyles, contentWrapper, valueWrapper, textValueWrapper, theme } =
    useCss(userMultiselectStyles, {
      disabled,
    });

  const checkedUsersSorted = useMemo(
    () => checkedUsers.slice().sort((prev, next) => (prev.fullName > next.fullName ? 1 : -1)) ?? [],
    [checkedUsers],
  );

  const [firstCheckedUser] = checkedUsersSorted;

  /**
   * Toggles the popover isOpen value
   */
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  /**
   * New selected users list updated by the user and close the popover
   *
   * Triggered when the save button is pressed
   */
  const updateCheckedUsers = useCallback(
    (checkedUsersUpdated: UserType[]) => {
      onChange(checkedUsersUpdated);
      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <div className={containerWrapper}>
      {name && (
        <input
          type="hidden"
          name={name}
          value={JSON.stringify(checkedUsers ?? [])}
          readOnly
        />
      )}
      <Popover
        isOpen={isOpen}
        placement="bottom"
        onEsc={toggleIsOpen}
        onClickOutside={toggleIsOpen}
        overrides={popoverStyledOverrides(containerWidth)}
        content={(): JSX.Element => (
          <UsersList
            dataTestId={`${dataTestId}__users-list`}
            users={users}
            checkedUsers={checkedUsersSorted}
            updateCheckedUsers={updateCheckedUsers}
            placeholder={placeholder || t('userMultiselect.placeholder')}
          />
        )}
      >
        {/** This div is needed to trigger tab navigation / click events as expected. */}
        <div>
          <div
            ref={internalInputRef}
            data-testid={`${dataTestId}__wrapper`}
            role="button"
            tabIndex={disabled ? -1 : 0}
            className={contentStyles}
            onClick={toggleIsOpen}
            onKeyDown={ariaKeyDownHandler(toggleIsOpen)}
          >
            <div className={contentWrapper}>
              <div className={valueWrapper}>
                <div className={textValueWrapper}>
                  {firstCheckedUser ? (
                    <Text
                      $style={userMultiselectStyles.textValue(theme, { disabled })}
                      variant="bodySmall"
                    >
                      {firstCheckedUser.fullName}
                    </Text>
                  ) : (
                    <Text
                      variant="bodySmall"
                      color={theme.colors.neutralSubdued}
                      margin={0}
                    >
                      {t('userMultiselect.selectUsers')}
                    </Text>
                  )}
                </div>
                {checkedUsersSorted.length > 1 && (
                  <Text
                    variant="bodySmall"
                    color={theme.colors.textBase}
                    $style={userMultiselectStyles.counterBadge(theme, { disabled })}
                  >
                    {getRemainingUsersLabel(checkedUsersSorted.length)}
                  </Text>
                )}
              </div>
            </div>
            {isLoading && <Spinner size="sm" />}
            <ArrowIconWrapper
              data-testid={`${dataTestId}__arrow-icon`}
              isOpen={isOpen}
              disabled={disabled}
              toggleIsOpen={toggleIsOpen}
            />
          </div>
        </div>
      </Popover>
    </div>
  );
};
