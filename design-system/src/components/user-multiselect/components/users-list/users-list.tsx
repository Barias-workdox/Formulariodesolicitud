import { useCallback, useMemo, useState } from 'react';

import { Search } from '@carbon/icons-react';

import { useTranslation } from '@components/utils/i18n';

import { Avatar } from '../../../avatar';
import { Button } from '../../../button';
import { Checkbox } from '../../../checkbox';
import { Input } from '../../../input';
import { TitleLayout } from '../../../layouts';
import { Text } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';

import { inputStyledOverrides, popoverStyledOverrides, userListStyles } from './users-list.styles';

import type { UserMultiselectProps, UserType } from '../../user-multiselect';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface UsersListProps extends WithTestId {
  users: UserMultiselectProps['users'];
  checkedUsers: UserMultiselectProps['checkedUsers'];
  /** Placeholder to be displayed in the component input */
  placeholder?: string;
  /** New selected users list updated by the user and triggered when the save button is pressed */
  updateCheckedUsers(updatedUsers: UserType[]): void;
}

/** Repetitive logic to find a user by id */
const findUserById = (userList: UserType[], id: number | string): UserType | undefined =>
  userList.find((user) => user.id === id);

/**
 * Returns a list of users, first the selected and then the rest of the unselected
 * ordered lexicographically
 */
export const getSortedUsers = (users: UserType[], checkedUsers: UserType[]): UserType[] => {
  const usersSorted = users.slice().sort((prev, next) => (prev.fullName > next.fullName ? 1 : -1));

  return [
    ...usersSorted.filter(({ id }) => findUserById(checkedUsers, id)),
    ...usersSorted.filter(({ id }) => !findUserById(checkedUsers, id)),
  ];
};

/**
 * Component used on the popover content to display a list of selectable users.
 *
 * The list renders first the selected users and then the rest of the unselected users,
 * when the list is empty return a message `not found`.
 *
 * Has a search input to filter users
 *
 * The save button will be disabled as long as the selected users are equal to the checkedUsers
 *
 * The checkedUsers will only be saved when the button is clicked.
 */
export const UsersList = ({
  dataTestId,
  users,
  checkedUsers,
  placeholder,
  updateCheckedUsers,
}: UsersListProps): JSX.Element => {
  const { wrapper, bodyStyles, inputWrapper, noResultsWrapper, footerStyles, theme } =
    useCss(userListStyles);
  const [checkedUsersList, setCheckedUsersList] = useState(checkedUsers);
  const [usersFiltered, setUsersFiltered] = useState<UserType[]>(users);
  const { t } = useTranslation();

  /** The save button will be disabled as long as the selected users are equal to the checkedUsers */
  const isSaveButtonDisabled = useMemo(() => {
    return (
      checkedUsers.length === checkedUsersList.length &&
      checkedUsers.every(({ id }) => findUserById(checkedUsersList, id))
    );
  }, [checkedUsers, checkedUsersList]);

  const userOptionsSorted = useMemo(
    () => getSortedUsers(usersFiltered, checkedUsers),
    [checkedUsers, usersFiltered],
  );

  /**
   * Callback that updates the checkedUsers list with the new list of selected users
   */
  const handleSaveButtonClick = useCallback(() => {
    updateCheckedUsers(checkedUsersList);
  }, [updateCheckedUsers, checkedUsersList]);

  /**
   * Function to select and deselect when the customer clicks on a user item
   */
  const handleCheckUser = useCallback(
    (selectedUser: UserType) => {
      const foundUser = findUserById(checkedUsersList, selectedUser.id);
      const newCheckedUsersList =
        foundUser !== undefined
          ? checkedUsersList.filter((checkedUser) => checkedUser.id !== foundUser.id)
          : [...checkedUsersList, selectedUser];

      setCheckedUsersList(newCheckedUsersList);
    },
    [checkedUsersList],
  );

  /**
   * Filters users by the input value
   */
  const handleInputChange = useCallback(
    (value: string) => {
      setUsersFiltered(
        users.filter(({ fullName, email }) => {
          const searchKey = `${fullName} ${email}`.toLowerCase();

          return searchKey.includes(value.toLowerCase());
        }),
      );
    },
    [users],
  );

  return (
    <div className={wrapper}>
      <div className={inputWrapper}>
        <Input
          data-testid={`${dataTestId}__search-input`}
          placeholder={placeholder}
          overrides={inputStyledOverrides()}
          onChange={(event): void => handleInputChange(event.target.value)}
          autoFocus
          startEnhancer={
            <Search
              size={16}
              color={theme.colors.neutralSubdued}
              title="SearchIcon"
            />
          }
        />
      </div>
      <div className={bodyStyles}>
        {userOptionsSorted.length > 0 ? (
          userOptionsSorted.map(({ id, fullName, email, disabled }, index) => {
            const checked = findUserById(checkedUsersList, id) !== undefined;
            const isDisabled = disabled || findUserById(checkedUsers, id)?.disabled;

            return (
              <Checkbox
                data-testid={`${dataTestId}__user-${index}`}
                key={id}
                onChange={(): void => handleCheckUser({ id, fullName, email })}
                checked={checked}
                disabled={isDisabled}
              >
                <TitleLayout
                  overrides={popoverStyledOverrides()}
                  startEnhancer={
                    <Avatar
                      disabled={isDisabled}
                      name={fullName}
                      size="24px"
                    />
                  }
                  titleText={
                    <Text
                      variant="bodySmall"
                      margin="0"
                      color={isDisabled ? theme.colors.neutralSubtle : theme.colors.neutralSubdued}
                    >
                      {fullName}
                    </Text>
                  }
                />
              </Checkbox>
            );
          })
        ) : (
          <div className={noResultsWrapper}>
            <Text
              variant="bodySmall"
              color={theme.colors.neutralSubdued}
            >
              {t('userMultiselect.noResults')}
            </Text>
          </div>
        )}
      </div>
      <div className={footerStyles}>
        <Button
          data-testid={`${dataTestId}__save-button`}
          disabled={isSaveButtonDisabled}
          onClick={handleSaveButtonClick}
        >
          {t('userMultiselect.saveButton')}
        </Button>
      </div>
    </div>
  );
};
