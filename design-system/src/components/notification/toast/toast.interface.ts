import type React from 'react';

import { PLACEMENT } from 'baseui/toast';

import type { ToasterContainerContextProps } from './toaster-container-context/toaster-container-context.interface';
import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { DesignSystemColorType } from '@themes';
import type {
  ToastProps as BaseToastProps,
  KindType,
  NotificationType,
  PlacementType,
  ToasterOverrides,
  ToasterSharedStylePropsArg,
} from 'baseui/toast';

export type {
  KindType,
  NotificationType,
  ToasterOverrides,
  ToasterSharedStylePropsArg,
  PlacementType,
};

/** Not a type but a readonly const object */
export { PLACEMENT };

export type ToastBodyProps = {
  /**
   * Title of the toast
   */
  title?: string;

  /**
   * Kind of the prop. Changes its color
   */
  kind?: KindType;

  /**
   * @deprecated This prop is deprecated and will be removed in a future version.
   * The toast now uses a consistent layout regardless of type.
   * Type of the toast notification
   */
  type: NotificationType;

  /**
   * Body or subheader of the toast. It is displayed after title
   */
  body?: string;

  /**
   * A React node that will be rendered after the body. It accepts anything
   * but ideally it has an action the toast can do. It is wrapped in a block
   * that handles the spacing between the body/title and the action.
   */
  action?: React.ReactNode;

  /**
   * Optional link that will be rendered below the body
   */
  link?: { url: string; text: string };

  dataTestId?: string;
};

export type ToastProps = Omit<ToastBodyProps, 'type'> &
  Omit<BaseToastProps, 'children' | 'notificationType'> & {
    type?: BaseToastProps['notificationType'];
    /**
     * Time in milliseconds before the toast disappears automatically.
     * Set to 0 to disable auto-hide behavior (toast will remain visible until manually closed).
     */
    duration?: number;
  };

export type ToasterKindParams = Omit<ToastProps, 'kind'> & ToasterContainerContextProps;

export type ToasterType = {
  show({ title, body, kind, action, type, ...toastProps }: ToastProps): Promise<React.Key | null>;
  positive({
    placement,
    zIndex,
    marginX,
    marginY,
    duration,
    ...rest
  }: ToasterKindParams): Promise<React.Key | null>;
  negative({
    placement,
    zIndex,
    marginX,
    marginY,
    duration,
    ...rest
  }: ToasterKindParams): Promise<React.Key | null>;
  warning({
    placement,
    zIndex,
    marginX,
    marginY,
    duration,
    ...rest
  }: ToasterKindParams): Promise<React.Key | null>;
  info({
    placement,
    zIndex,
    marginX,
    marginY,
    duration,
    ...rest
  }: ToasterKindParams): Promise<React.Key | null>;
  update(key: React.Key, toastProps: ToastProps): void;
};

export type ColorForKind = {
  title: DesignSystemColorType;
  body: DesignSystemColorType;
};

export type KindValues = {
  icon: CarbonIconType;
  iconColor: DesignSystemColorType;
  iconBackgroundColor: DesignSystemColorType;
  leftBorderColor: DesignSystemColorType;
};
