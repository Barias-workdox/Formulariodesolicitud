import type { ReactElement, ReactNode } from 'react';

import { themedStyled } from '@themes/utilities';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledInnerContainer } from './components/styled-inner-container';
import { StyledRoot } from './components/styled-root';

import type {
  DesignSystemColorType,
  DesignSystemTheme,
  OverrideObject,
} from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-react';

export interface FullScreenLayoutProps {
  children: ReactNode;
}

export interface FullScreenHeaderOverrides {
  Root?: OverrideObject<object>;
  InnerContainer?: OverrideObject<object>;
}

export interface FullScreenHeaderProps {
  startEnhancer?: ReactElement;
  endEnhancer?: ReactElement;
  /** Indicates if element will render a bottom shadow as a wider border. */
  hasElevation?: boolean;
  $padding?: StyleObject['padding'];
  children: ReactNode;
  overrides?: FullScreenHeaderOverrides;
}

export type AsideOrientation = 'right' | 'left';

/** Styled component for the header of the full-screen-layout component */
export const FullScreenHeader = ({
  startEnhancer,
  endEnhancer,
  children,
  hasElevation = false,
  $padding,
  overrides,
}: FullScreenHeaderProps): ReactElement => {
  const { InnerContainer: InnerContainerOverride, Root: RootOverride } = overrides || {};

  const InnerContainer = getOverride(InnerContainerOverride) || StyledInnerContainer;
  const Root = getOverride(RootOverride) || StyledRoot;

  return (
    <Root
      $hasElevation={hasElevation}
      $padding={$padding}
      {...getOverrideProps(RootOverride)}
    >
      {startEnhancer}
      <InnerContainer {...getOverrideProps(InnerContainerOverride)}>{children}</InnerContainer>
      {endEnhancer}
    </Root>
  );
};

/** Styled component for the body of the full-screen-layout component */
export const FullScreenBody = themedStyled<
  'div',
  {
    $theme?: DesignSystemTheme;
    $hasAside?: boolean;
    $padding?: StyleObject['padding'];
    $backgroundColor?: StyleObject['backgroundColor'] & DesignSystemColorType;
  }
>('div', ({ $theme, $padding, $backgroundColor, $hasAside = false }) => ({
  flex: 1,
  margin: 0,
  overflow: $hasAside ? 'hidden' : 'auto',
  display: $hasAside ? 'flex' : 'block',
  padding: $padding ?? $theme.spacing.spacing3xl,
  backgroundColor: $backgroundColor
    ? ($theme.colors[$backgroundColor] ?? $backgroundColor)
    : $theme.colors.neutralBase,
}));

/** Styled component for the footer of the full-screen-layout component */
export const FullScreenAside = themedStyled<
  'div',
  {
    $theme?: DesignSystemTheme;
    $width?: StyleObject['width'];
    orientation?: AsideOrientation;
  }
>('div', ({ $theme, orientation, $width }) => ({
  overflowY: 'auto',
  backgroundColor: $theme.colors.bgBase,
  border: `1px solid ${$theme.colors.neutralSubtle}`,
  borderTop: 0,
  borderBottom: 0,
  borderRight: orientation !== 'left' ? 0 : undefined,
  borderLeft: orientation !== 'right' ? 0 : undefined,
  width: $width,
}));

/** Styled component for the footer of the full-screen-layout component */
export const FullScreenFooter = themedStyled<
  'div',
  { $theme?: DesignSystemTheme; $padding?: StyleObject['padding'] }
>('div', ({ $theme, $padding }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: $theme.colors.bgBase,
  gap: $theme.spacing.spacingMd,
  borderTop: `1px solid ${$theme.colors.neutralSubtle}`,
  padding: $padding ?? `${$theme.spacing.spacingMd} ${$theme.spacing.spacingXl}`,
}));

/** Layout with header, body and optional footer */
export const FullScreenLayout = themedStyled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});
