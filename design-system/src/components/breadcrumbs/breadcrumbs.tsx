import { Breadcrumbs as BaseBreadcrumbs } from 'baseui/breadcrumbs';

import { themedUseStyletron } from '../../themes';

import type { BreadcrumbsProps } from 'baseui/breadcrumbs';

/** Styled breadcrumbs component */
export const Breadcrumbs = ({
  children,
  overrides = {},
  ...rest
}: BreadcrumbsProps): JSX.Element => {
  const [, theme] = themedUseStyletron();

  const { ListItem, Icon, Separator, ...restOverrides } = overrides;

  return (
    <BaseBreadcrumbs
      overrides={{
        ListItem: ListItem ?? {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        Icon: Icon ?? {
          style: {
            color: theme.colors.neutralSubdued,
          },
        },
        Separator: Separator ?? {
          style: {
            margin: 0,
          },
        },
        ...restOverrides,
      }}
      {...rest}
    >
      {children}
    </BaseBreadcrumbs>
  );
};
