import type { DesignSystemTheme, StyleOverrideProps } from '../../../themes';
import type { InputOverrides, SharedProps } from 'baseui/input';
import type { PopoverOverrides } from 'baseui/popover';
import type { StyleObject } from 'styletron-standard';

export const searcherStyles = {
  containerStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing.spacingMd}`,
    borderBottom: `1px solid ${theme.colors.divisionLine}`,
  }),
};

export const listStyles = {
  containerStyles: {
    maxHeight: '190px',
    overflowY: 'auto',
  } as StyleObject,
  itemLabelTemplateStyles: (theme: DesignSystemTheme): StyleObject => ({
    display: 'flex',
    gap: theme.spacing.spacingXs,
    alignItems: 'center',
    justifyContent: 'flex-start',
    whiteSpace: 'break-spaces',
  }),
  emptyListStyles: (theme: DesignSystemTheme): StyleObject => ({
    padding: `${theme.spacing.spacingXs} ${theme.spacing.spacingMd}`,
    display: 'flex',
    justifyContent: 'center',
  }),
  userDataStyles: {
    display: 'flex',
    flexDirection: 'column',
  } as StyleObject,
  labelStyles: (theme: DesignSystemTheme): StyleObject => ({
    marginLeft: 'auto',
    color: theme.colors.neutralSubdued,
  }),
};

/**
 * Get the mentions-popover searcher input overrides customized by the Design System theme and kind
 */
export const getSearcherInputOverrides = ({
  dataTestId,
}: {
  dataTestId: string;
}): InputOverrides => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps<SharedProps>): StyleObject => ({
      borderColor: $theme.colors.bgBase,
      background: $theme.colors.bgBase,
      paddingLeft: 0,
      paddingRight: 0,
    }),
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}__input`,
    },
    style: ({ $theme }: StyleOverrideProps<SharedProps>): StyleObject => ({
      background: $theme.colors.bgBase,
      paddingLeft: $theme.spacing.spacingMd,
      paddingRight: 0,
      fontSize: $theme.typography.ParagraphSmall.fontSize,
    }),
  },
});

export const popoverOverrides = {
  Inner: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: $theme.colors.bgBase,
    }),
  },
} as PopoverOverrides;
