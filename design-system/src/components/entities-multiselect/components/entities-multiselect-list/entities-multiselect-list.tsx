import { useCallback, useEffect, useRef } from 'react';

import { WarningAltFilled } from '@carbon/icons-react';

import {
  entitiesMultiSelectListStyles,
  titleLayoutStyledOverrides,
} from '@components/entities-multiselect/entities-multiselect.styles';
import { Spinner } from '@components/spinner';
import { Tag } from '@components/tag/next';
import { useTranslation } from '@components/utils/i18n';

import { Avatar } from '../../../avatar';
import { Checkbox } from '../../../checkbox';
import { TitleLayout } from '../../../layouts';
import { Text } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';

import type { EntityOption } from '@components/entities-multiselect/entities-multiselect.types';

interface EntitiesMultiSelectListProps {
  type: 'people' | 'company';
  dataTestId: string | undefined;
  options: EntityOption[];
  values: EntityOption[];
  isLoading: boolean;
  isDisabled?: boolean;
  totalElements?: number;
  handleCheck(entity: EntityOption): void;
  handleLoadMore(type: 'people' | 'company'): void;
}

/** Returns the first letter of a company label. Empty string if the label is missing */
const getCompanyFirstLetter = (label: string): string => label?.[0] ?? '';

/**
 * Component rendering a scrollable list of selectable entities (people or companies).
 *
 * Features:
 * - Displays a header with entity type and total count.
 * - Renders each entity with a checkbox, optional avatar, and validation tag.
 * - Supports infinite scroll by calling `handleLoadMore` when the user scrolls near the bottom.
 * - Disabled state for all checkboxes if `isDisabled` is true.
 *
 */
export const EntitiesMultiSelectList = ({
  dataTestId,
  type,
  options,
  values,
  handleCheck,
  handleLoadMore,
  isLoading,
  totalElements,
  isDisabled = false,
}: EntitiesMultiSelectListProps): JSX.Element => {
  const {
    bodyStyles,
    optionsListHeaderStyle,
    optionsListHeaderLabelStyle,
    listOptionStyle,
    theme,
  } = useCss(entitiesMultiSelectListStyles);

  const { t } = useTranslation();

  const listRef = useRef<HTMLDivElement>(null);

  /** Triggered when scroll reaches the threshold */
  const handleScroll = useCallback((): void => {
    const el = listRef.current;
    if (!el) return;

    const threshold = 50; // px from bottom to trigger
    if (el.scrollHeight - el.scrollTop - el.clientHeight < threshold) {
      handleLoadMore(type);
    }
  }, [handleLoadMore, type]);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);

    return (): void => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {options.length > 0 && (
        <>
          <div className={optionsListHeaderStyle}>
            <div className={optionsListHeaderLabelStyle}>
              <Text
                variant="upperDetails"
                color="neutralStrong"
                fontWeight={400}
              >
                {t(`entitiesMultiselect.${type}`)}
              </Text>
            </div>
            <Text
              data-testid={`${dataTestId}__entity-${type}-count`}
              variant="upperDetails"
              color="brand"
              fontWeight={400}
            >
              {`(${totalElements})`}
            </Text>
          </div>
          <div
            ref={listRef}
            data-testid={`${dataTestId}__entity-${type}-list`}
            className={bodyStyles}
          >
            <>
              {options.map((option, index) => {
                const { id, label, isValidated } = option;

                const checked = values.some((value) => value.id === id);

                return (
                  <div
                    key={id}
                    className={listOptionStyle}
                  >
                    <Checkbox
                      data-testid={`${dataTestId}__entity-people-${index}`}
                      onChange={(): void => handleCheck(option)}
                      checked={checked}
                      disabled={isDisabled}
                    >
                      <TitleLayout
                        overrides={titleLayoutStyledOverrides()}
                        startEnhancer={
                          <Avatar
                            disabled={isDisabled}
                            name={type === 'people' ? label : getCompanyFirstLetter(label)}
                            size="24px"
                          />
                        }
                        titleText={
                          <Text
                            variant="bodySmall"
                            margin="0"
                            color={
                              isDisabled ? theme.colors.neutralSubtle : theme.colors.neutralSubdued
                            }
                          >
                            {label}
                          </Text>
                        }
                      />
                    </Checkbox>
                    {!isValidated && (
                      <Tag
                        icon={WarningAltFilled}
                        kind="warning"
                        variant="light"
                      >
                        {t('entitiesMultiselect.validationPending')}
                      </Tag>
                    )}
                  </div>
                );
              })}
              {isLoading && (
                <div>
                  <Spinner size="sm" />
                </div>
              )}
            </>
          </div>
        </>
      )}
    </>
  );
};
