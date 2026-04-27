import { useCallback, useState } from 'react';

import { Search } from '@carbon/icons-react';
import { Popover } from 'baseui/popover';

import { IconButton } from '@components/button';
import { Tag } from '@components/tag/next';
import { Text } from '@components/text';
import { ariaKeyDownHandler } from '@components/utils/accessibility.utils';
import { useTranslation } from '@components/utils/i18n';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';
import { noop } from '@utils/noop';

import { ArrowIcon as ArrowIconSelect } from '../select/components';
import { Spinner } from '../spinner';
import { useContainerWidth } from '../utils/hooks/use-container-width';
import { useCss } from '../utils/hooks/use-css';

import { EntitiesMultiSelectDropdown } from './components';
import { popoverStyledOverrides, entitiesMultiselectStyles } from './entities-multiselect.styles';

import type { EntitiesMultiSelectProps, EntityOption } from './entities-multiselect.types';

/**
 * This component behaves like a multi-select dropdown specifically for entities (people and companies),
 * displaying the selected entities as tags inside the main input area.
 *
 * The popover contains searchable lists of people and companies. Selected entities are displayed
 * at the top of their respective lists, followed by the unselected entities.
 *
 * The lists support infinite scrolling via the `onLoadMore` callback, allowing for dynamic
 * fetching of additional options.
 *
 * Users can remove selected entities directly by clicking the tags, and all changes propagate
 * through the `onChange` callback.
 *
 * Unlike a standard Select component, this component cannot be extended from Select due to its
 * highly customized behavior and rendering logic.
 */
export const EntitiesMultiSelect = ({
  dataTestId = 'entities-multiselect',
  name,
  options = [],
  values = [],
  placeholder,
  searchPlaceholder,
  isLoading,
  disabled = false,
  peopleTotalElements,
  companyTotalElements,
  containerRef,
  error,
  onChange = noop,
  onSearch = noop,
  onLoadMore = noop,
  zIndex = 1,
  leading,
}: EntitiesMultiSelectProps): JSX.Element => {
  const internalContainerRef = useSyncedRef<HTMLDivElement>({ externalRef: containerRef });

  const [isOpen, setIsOpen] = useState(false);
  const { containerWidth } = useContainerWidth(internalContainerRef);
  const { t } = useTranslation();

  const {
    containerWrapper,
    contentStyles,
    contentWrapper,
    placeholderWrapper,
    endIconWrapper,
    leadingWrapper,
  } = useCss(entitiesMultiselectStyles, {
    disabled,
    $hasError: !!error,
  });

  /**
   * Toggles the popover isOpen value
   */
  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  /**
   * Updated Entities triggered list when a value is toggled
   */
  const updateValues = useCallback(
    (updatedEntityValues: EntityOption[]) => {
      onChange(updatedEntityValues);
    },
    [onChange],
  );

  const handleRemoveEntityById = useCallback(
    (entityId: string): void => {
      /* Remove the clickedEntity from the current values list*/
      const updatedEntityValues = values.filter((value) => value.id !== entityId);

      onChange(updatedEntityValues);
    },
    [onChange, values],
  );

  return (
    <div className={containerWrapper}>
      {name && (
        <input
          type="hidden"
          name={name}
          value={JSON.stringify(values ?? [])}
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
          <EntitiesMultiSelectDropdown
            dataTestId={`${dataTestId}-entities-list`}
            options={options}
            values={values}
            isLoading={isLoading}
            updateValues={updateValues}
            onSearch={onSearch}
            peopleTotalElements={peopleTotalElements}
            companyTotalElements={companyTotalElements}
            onLoadMore={onLoadMore}
            placeholder={searchPlaceholder || t('entitiesMultiselect.searchPlaceholder')}
          />
        )}
      >
        {/** This div is needed to trigger tab navigation / click events as expected. */}
        <div>
          <div
            data-testid={`${dataTestId}__wrapper`}
            role="button"
            tabIndex={disabled ? -1 : 0}
            className={contentStyles}
            ref={internalContainerRef}
            onClick={toggleIsOpen}
            onKeyDown={ariaKeyDownHandler(toggleIsOpen)}
          >
            {leading && <div className={leadingWrapper}>{leading}</div>}
            <div className={contentWrapper}>
              {values.length > 0 &&
                values.map(({ id, label }) => {
                  return (
                    <Tag
                      key={`entity-value-${id}`}
                      kind="peace"
                      variant="light"
                      shape="rounded"
                      showAction={true}
                      disabled={disabled}
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                        event.preventDefault();
                        event.stopPropagation();
                        handleRemoveEntityById(id);
                      }}
                      zIndex={zIndex}
                      $style={{
                        minWidth: 'max-content',
                      }}
                    >
                      {label}
                    </Tag>
                  );
                })}
              {values.length === 0 && (
                <div className={placeholderWrapper}>
                  <Search />
                  <Text
                    variant="body"
                    color="neutralSubdued"
                    fontWeight={400}
                    margin="0"
                  >
                    {placeholder || t('entitiesMultiselect.placeholder')}
                  </Text>
                </div>
              )}
            </div>

            <div className={endIconWrapper}>
              {isLoading ? (
                <Spinner size="sm" />
              ) : (
                <IconButton
                  onClick={toggleIsOpen}
                  kind="ghost-tertiary"
                  size="mini"
                >
                  <ArrowIconSelect
                    isOpen={isOpen}
                    color={disabled ? 'neutralDepressed' : 'neutral'}
                  />
                </IconButton>
              )}
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
};
