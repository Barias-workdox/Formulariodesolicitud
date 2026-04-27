import type { StyleOverrideProps } from '@themes/theme.interfaces';
import type { SkeletonOverrides } from 'baseui/skeleton/types';
import type { StyleObject } from 'styletron-standard';

/**
 * An object that provides style overrides for the Skeleton component.
 */
export const getSkeletonOverrides = ({
  dataTestId,
}: {
  dataTestId: string;
}): SkeletonOverrides => ({
  Root: {
    props: {
      'data-testid': dataTestId,
    },
  },
  Row: {
    style: ({ $theme }: StyleOverrideProps): StyleObject => ({
      backgroundImage: `linear-gradient(135deg,
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralSubtle},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed},
        ${$theme.colors.neutralWashed})`,
    }),
  },
});
