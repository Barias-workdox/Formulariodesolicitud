import { forwardRef } from 'react';

import { StyledDropdownContainer } from 'baseui/select';

import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { Optgroups } from 'baseui/select';
import type { StyleObject } from 'styletron-react';

/**
 * Partial property definitions for customizing the appearance and behavior of `StyledDropdownContainer`.
 *
 * These properties are intended for overriding styles and behavior in the 'baseui/select' component.
 */
export type DropdownContainerProps = {
  /**
   * The properties and items to be displayed in the dropdown container.
   */
  children: {
    props: {
      /**
       * An object containing dropdown items organized in optgroups.
       */
      items: Optgroups;
    };
  };
};

const styles = {
  rootStyles: (theme: DesignSystemTheme): StyleObject => ({
    backgroundColor: theme.colors.bgBase,
  }),
};

/**
 * Custom dropdown container for a select component.
 *
 * This component is used as a container for rendering dropdown items in a select component.
 */
export const SelectDropdownContainer = forwardRef<HTMLDivElement>(function DropdownContainer(
  props: DropdownContainerProps,
  ref,
) {
  const { t } = useTranslation();
  const { theme, rootStyles } = useCss(styles);

  const { children: { props: { items: { __ungrouped: filteredOptions = [] } = {} } = {} } = {} } =
    props;

  // The list will be considered empty if the only option in the list is `creatable`.
  const isEmpty = filteredOptions.length === 1 && filteredOptions[0].isCreatable;

  return (
    <div ref={ref}>
      {isEmpty && (
        <div className={rootStyles}>
          <Text
            variant="bodySmall"
            margin={0}
            padding={`${theme.spacing.spacingSm} ${theme.spacing.spacingMd}`}
            color="neutralSubdued"
          >
            {t('general.empty2')}
          </Text>
        </div>
      )}
      <StyledDropdownContainer {...props} />
    </div>
  );
});
