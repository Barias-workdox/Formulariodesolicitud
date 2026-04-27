import { Children, cloneElement, isValidElement } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Breadcrumbs as BaseBreadcrumbs } from 'baseui/breadcrumbs';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { getOverrides } from './breadcrumbs.styles';
import { BreadcrumbsItem, BreadcrumbsMenu } from './components';

import type { BreadcrumbsItemProps } from './components/breadcrumbs-item';
import type { BreadcrumbsProps as BaseBreadcrumbsProps } from 'baseui/breadcrumbs';

export interface BreadcrumbsProps extends BaseBreadcrumbsProps {
  dataTestId?: string;
  children?: ReactNode;
}

/**
 * Renders the breadcrumb item.
 */
const renderBreadcrumbItem = (
  dataTestId: string,
  item: ReactElement<BreadcrumbsItemProps>,
  index: number,
  totalItems: number,
): JSX.Element => {
  const isLast = index === totalItems - 1;
  const isFirst = index === 0;

  return cloneElement(item, { dataTestId: `${dataTestId}__item-${index}`, isLast, isFirst });
};

/**
 * A component to display a breadcrumb trail for navigation.
 */
const Breadcrumbs = ({
  dataTestId = 'breadcrumbs',
  children,
  overrides = {},
  ...rest
}: BreadcrumbsProps): JSX.Element => {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  const childrenArray = Children.toArray(children).filter(
    (child): child is ReactElement<BreadcrumbsItemProps> =>
      isValidElement(child) && child.type === BreadcrumbsItem,
  );

  const totalItems = childrenArray.length;

  if (totalItems === 0) {
    return null;
  }

  const surpassLimit = totalItems > 3;
  const lastBreadcrumbsItems = childrenArray.slice(totalItems > 2 ? -2 : -1);

  const breadcrumbsOverrides = mergeOverridesDeep(getOverrides(), overrides);

  return (
    <BaseBreadcrumbs
      overrides={breadcrumbsOverrides}
      {...rest}
    >
      {totalItems > 0 && renderBreadcrumbItem(dataTestId, childrenArray[0], 0, totalItems)}
      {surpassLimit && (
        <BreadcrumbsMenu
          dataTestId={`${dataTestId}__menu`}
          breadcrumbs={childrenArray.slice(1, -2).map((child) => ({
            label: child.props.label,
            onClick: child.props?.onClick,
          }))}
        />
      )}
      {totalItems > 1 &&
        lastBreadcrumbsItems.map((breadcrumb, index) =>
          renderBreadcrumbItem(
            dataTestId,
            breadcrumb,
            index + totalItems - lastBreadcrumbsItems.length,
            totalItems,
          ),
        )}
    </BaseBreadcrumbs>
  );
};

Breadcrumbs.Item = BreadcrumbsItem;

export { Breadcrumbs };
