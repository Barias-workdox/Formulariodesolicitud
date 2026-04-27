import type { ReactNode } from 'react';

import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useThousandSeparatorLocale } from '@hooks/use-thousand-separator-locale';

import {
  StyledFiltersWrapper,
  StyledItemsCounterWrapper,
  StyledMobileFilterWrapper,
  StyledOptionsWrapper,
  StyledToolbar,
} from './page-header-toolbar.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

export interface PageHeaderToolbarProps extends WithTestId {
  /** If the string is set, overrides the default message with the format **5 items**. */
  itemsText?: string;
  /** If `true`, the filters can be rendered in mobile. Defaults to `false` */
  shouldRenderMobileFilters?: boolean;
  itemsCounter?: number;
  filters?: ReactNode;
  actions?: ReactNode;
}

/**
 * `PageHeaderToolbar` is a component that provides a search bar for mobile devices,
 * filters, and an item counter, with additional context-based behavior.
 */
export const PageHeaderToolbar = ({
  'data-testid': dataTestId,
  itemsText,
  shouldRenderMobileFilters = false,
  itemsCounter,
  filters = <></>,
  actions = <></>,
}: PageHeaderToolbarProps): JSX.Element => {
  const { t } = useTranslation();

  const items = useThousandSeparatorLocale(itemsCounter ?? 0);

  const renderItemsCounter = itemsCounter !== undefined || itemsText !== undefined;

  return (
    <StyledToolbar>
      <>
        <StyledFiltersWrapper>{filters}</StyledFiltersWrapper>

        {shouldRenderMobileFilters && (
          <StyledMobileFilterWrapper>{filters}</StyledMobileFilterWrapper>
        )}
      </>

      <StyledOptionsWrapper>
        {renderItemsCounter && (
          <StyledItemsCounterWrapper data-testid={`${dataTestId}__counter-container`}>
            <Text
              variant="bodySmall"
              color="neutralSubdued"
              margin={0}
            >
              {itemsText !== undefined
                ? itemsText
                : t('general.items', {
                    count: itemsCounter,
                    data: items,
                  })}
            </Text>
          </StyledItemsCounterWrapper>
        )}

        {actions}
      </StyledOptionsWrapper>
    </StyledToolbar>
  );
};
