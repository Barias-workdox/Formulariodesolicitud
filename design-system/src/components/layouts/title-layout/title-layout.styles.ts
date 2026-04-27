import { COMMON_ICON_SIZE_20 } from '@constants/common.constants';
import { DEFAULT_FONT } from '@tokens';

import { themedStyled } from '../../../themes';

import type { TitleLayoutProps } from './title-layout';
import type { DesignSystemTheme } from '../../../themes';
import type { StyleObject } from 'styletron-standard';

type IconContainerOptions = {
  hasIcon: boolean;
  overrides?: TitleLayoutProps['overrides'];
};

/** Styled component for the grid layout of an icon on the left and a title and subtitle on the right */
export const TitleLayoutContainer = themedStyled<
  'div',
  { $hasIcon: boolean; $style?: StyleObject }
>('div', ({ $hasIcon, $theme, $style = {} }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  alignItems: 'center',
  columnGap: $hasIcon ? $theme.spacing.spacingXs : 0,
  ...$style,
}));

export const titleLayoutStyles = {
  iconContainer: (
    _: DesignSystemTheme,
    { hasIcon, overrides }: IconContainerOptions,
  ): StyleObject => {
    const {
      width = COMMON_ICON_SIZE_20,
      height = COMMON_ICON_SIZE_20,
      ...restStyles
    } = overrides?.StartEnhancer ?? {};

    return {
      display: 'flex',
      alignItems: 'center',
      gridRow: '1 / 3',
      ...(hasIcon && {
        width,
        height,
      }),
      ...restStyles,
    };
  },
};

/** Styled component for title container, having conditional if the layout has subtitle or not */
export const TitleLayoutTitleContainer = themedStyled<
  'div',
  { $hasSubtitle: boolean; $style?: StyleObject }
>('div', ({ $hasSubtitle, $style = {} }) => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  ...(!$hasSubtitle && { gridRow: '1 / 3' }),
  ...$style,
}));

/** Styled component for subtitle container, it will be located bellow the title by default */
export const TitleLayoutSubtitleContainer = themedStyled<'div', { $style: StyleObject }>(
  'div',
  ({ $style = {} }) => ({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    gridColumn: '2',
    ...$style,
  }),
);

/** Styles with ellipsis used mainly by tables */
export const commonTitleLayoutTextStyles = (
  theme: DesignSystemTheme,
  $style?: StyleObject,
): StyleObject => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: theme.colors.neutralSubdued,
  margin: 0,
  ...DEFAULT_FONT,
  ...$style,
});
