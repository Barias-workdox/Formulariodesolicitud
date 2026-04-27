import {
  FOCUS_INPUT_BORDER_WIDTH,
  getSizeProperties as getSizeInputProperties,
} from '@components/input/next';
import { DEFAULT_FONT } from '@tokens';

import type { Size } from '@components/input/next';
import type { DesignSystemTheme, StyleOverrideProps } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

/** Gets style properties by input size */
export const getSizeProperties = (
  size: Size,
  theme: DesignSystemTheme,
): {
  dropdownListItem: StyleObject;
  valueContainer: StyleObject;
  tagRoot: StyleObject;
  input: StyleObject;
} => {
  const dropdownListItemCompact: StyleObject = {
    ...theme.typography.ParagraphSmall,
    paddingTop: theme.spacing.spacing2xs,
    paddingBottom: theme.spacing.spacing2xs,
    paddingLeft: theme.spacing.spacingXs,
    paddingRight: theme.spacing.spacingXs,
  };

  const dropdownListItemDefault: StyleObject = {
    ...theme.typography.ParagraphMedium,
    padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`,
  };

  const dropdownListItem =
    {
      sm: dropdownListItemCompact,
      md: dropdownListItemDefault,
    }[size] ?? dropdownListItemDefault;

  const tagRootCompact: StyleObject = {
    columnGap: '2px',
    padding: '0 6px',
  };

  const tagRootDefault: StyleObject = {
    columnGap: '4px',
    padding: '2px 8px',
  };

  const tagRoot =
    {
      sm: tagRootCompact,
      md: tagRootDefault,
    }[size] ?? tagRootDefault;

  const inputCompact: StyleObject = {
    ...theme.typography.ParagraphSmall,
  };

  const inputDefault: StyleObject = {
    ...theme.typography.ParagraphMedium,
  };

  const input =
    {
      sm: inputCompact,
      md: inputDefault,
    }[size] ?? inputDefault;

  return {
    dropdownListItem,
    valueContainer: getSizeInputProperties(size, theme).input,
    tagRoot,
    input,
  };
};

export const dropdownStyles: StyleObject = {
  padding: 0,
  boxShadow: 'none',
};

/** Dropdown list item style overrides */
export const dropdownListItemStyles = ({
  $isHighlighted,
  $theme,
  $size,
}: StyleOverrideProps): StyleObject => ({
  ...getSizeProperties($size, $theme).dropdownListItem,
  ...DEFAULT_FONT,
  color: $isHighlighted ? $theme.colors.neutral : $theme.colors.neutralDepressed,
  borderBottomWidth: '1px',
  borderBottomColor: $theme.colors.neutralSubtle,
  borderBottomStyle: 'solid',
  minHeight: 'auto !important',
  ':last-child': {
    borderBottomColor: 'transparent',
  },
});

/**
 * Style override for the option content.
 */
export const optionContentStyle = ({
  $theme,
  $isHighlighted,
}: StyleOverrideProps): StyleObject => ({
  color: $isHighlighted ? $theme.colors.neutralStrong : $theme.colors.neutral,
});

/**
 * Style overrides for the select single value (the selected option)
 */
export const singleValueStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  height: 'auto',
  margin: 0,
  color: $theme.colors.neutralStrong,
});

/** Control container style overrides */
export const controlContainerStyles = ({ $disabled }: StyleOverrideProps): StyleObject => ({
  cursor: $disabled ? 'not-allowed' : 'auto',
});

/** Value container style overrides */
export const valueContainerStyles = ({
  $theme,
  $disabled,
  $size,
  $multi,
}: StyleOverrideProps): StyleObject => ({
  ...getSizeProperties($size, $theme).valueContainer,
  display: 'flex',
  alignItems: 'center',
  gap: $multi ? $theme.spacing.spacingXs : 0,
  color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.neutralSubdued,
  margin: 0,
});

/** Tag root styles overrides */
export const tagRootStyles = ({ $theme, $disabled, $size }: StyleOverrideProps): StyleObject => ({
  ...$theme.typography.ParagraphXSmall,
  ...getSizeProperties($size, $theme).tagRoot,
  backgroundColor: $disabled ? $theme.colors.neutralSubtle : $theme.colors.peaceSubtle,
  color: $disabled ? $theme.colors.neutralDepressed : $theme.colors.brandStrong,
  display: 'flex',
  alignItems: 'center',
  margin: 0,
  border: 0,
});

/** Popover body style overrides */
export const popoverBodyStyles = ({ $theme }: StyleOverrideProps): StyleObject => ({
  top: FOCUS_INPUT_BORDER_WIDTH,
  boxShadow: $theme.lighting.shadowDefault,
});

/** Input text style overrides */
export const inputStyles = ({ $theme, $size }: StyleOverrideProps): StyleObject => ({
  ...getSizeProperties($size, $theme).input,
  ...DEFAULT_FONT,
});

export const placeholderStyles: StyleObject = {
  position: 'absolute',
};

export const styles = {
  creatableOptionStyles: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    wordBreak: 'break-all',
  } as StyleObject,
  creatableIconStyles: {
    display: 'flex',
    alignItems: 'center',
  } as StyleObject,
};
