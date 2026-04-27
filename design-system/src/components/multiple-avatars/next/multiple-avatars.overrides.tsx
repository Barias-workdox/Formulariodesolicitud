import type { ComponentProps } from 'react';

import { StyledInitials } from 'baseui/avatar';

import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { AvatarOverrides } from 'baseui/avatar';
import type { StyleObject } from 'styletron-react';

/** Avatar overrides for the +N counter. */
export const getAvatarCounterOverrides = ({
  disabled,
  dataTestId,
  counterText,
}: {
  disabled: boolean;
  dataTestId: string;
  counterText: string;
}): AvatarOverrides => ({
  Root: {
    props: { 'data-testid': `${dataTestId}--counter-root` },
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundColor: disabled ? $theme.colors.neutralSubtle : $theme.colors.neutralWashed,
      border: `1px solid ${$theme.colors.neutralSubtle}`,
    }),
  },
  Initials: {
    props: { 'data-testid': `${dataTestId}--counter-initials` },
    component: (props: ComponentProps<typeof StyledInitials>): JSX.Element => {
      return <StyledInitials {...props}>{counterText}</StyledInitials>;
    },
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      color: disabled ? $theme.colors.neutralDepressed : $theme.colors.neutral,
      fontWeight: 700,
      lineHeight: 'unset',
    }),
  },
});

/** Avatar overrides for the avatars in MultipleAvatars (adds 1px borderBase border). */
export const getMultipleAvatarsAvatarOverrides = (): AvatarOverrides => ({
  Root: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      border: `1px solid ${$theme.colors.borderBase}`,
    }),
  },
});
