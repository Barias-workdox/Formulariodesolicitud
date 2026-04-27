import { useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';

import { AddFilled } from '@carbon/icons-react';

import { AvatarListItem } from '@components/list/components/avatar-list-item';
import { SelectWithPagination } from '@components/select-with-pagination';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DEPRECATED_HEIGHT_MAP } from '@constants/common.constants';

import {
  ThemedCreatableIconOption,
  ThemedCreatableOption,
  getUserSelectOverrides,
} from './user-select.style';

import type { UserOption, UserSelectProps } from './user-select.interface';
import type { SelectOverrides, SelectProps } from 'baseui/select';

/** Component extending SelectWithPagination with custom label options to list users */
export const UserSelect = ({
  'data-testid': dataTestId = 'user-select',
  disabled = false,
  creatable = false,
  avatarBackGroundColor = 'peaceSubtle',
  isLoadingMore,
  onLoadMore,
  onChange,
  placeholder,
  kind = 'borderless',
  overrides,
  size = '44px',
  options,
  ...rest
}: UserSelectProps): JSX.Element => {
  const { theme } = useCss();
  const { t } = useTranslation();

  /** Transform the received size to a Select size available */
  const selectSize = useMemo((): SelectProps['size'] => DEPRECATED_HEIGHT_MAP[size], [size]);

  const mergedOverrides = useMemo((): SelectOverrides => {
    const baseOverrides: SelectOverrides = getUserSelectOverrides({
      theme,
      placeholder,
      dataTestId,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [dataTestId, placeholder, theme, overrides]);

  /** Render a custom Label and option for a select */
  const renderSelectContent = useCallback(
    (option: UserOption) => {
      const { label, isCreatable = false } = option;

      if (isCreatable) {
        return (
          <ThemedCreatableOption>
            {`${t('select.create')} “${label}”`}
            <ThemedCreatableIconOption>
              <AddFilled
                color={theme.colors.brand}
                size={16}
              />
            </ThemedCreatableIconOption>
          </ThemedCreatableOption>
        );
      }

      const index = options.findIndex((option) => option.id === option.id);

      return (
        <AvatarListItem
          data-testid={`${dataTestId}__item--${index}`}
          avatarProps={{
            name: option.label as string,
            backgroundColor: avatarBackGroundColor,
          }}
          label={
            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
              color={disabled ? 'neutralDepressed' : 'neutralSubdued'}
            >
              {option.label} {option.email && `(${option.email})`}
            </Text>
          }
          overrides={{
            Root: {
              style: {
                padding: 0,
              },
            },
          }}
        />
      );
    },
    [t, dataTestId, disabled, avatarBackGroundColor, options, theme.colors.brand],
  );

  return (
    <SelectWithPagination
      {...rest}
      data-testid={dataTestId}
      disabled={disabled}
      creatable={creatable}
      isLoadingMore={isLoadingMore}
      kind={kind}
      size={selectSize}
      overrides={mergedOverrides}
      options={options}
      onLoadMore={onLoadMore}
      onChange={onChange}
      getOptionLabel={({ option }): ReactNode => renderSelectContent(option as UserOption)}
      getValueLabel={({ option }): ReactNode => renderSelectContent(option as UserOption)}
    />
  );
};
