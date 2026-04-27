import type { PropsWithChildren } from 'react';

import { themedUseStyletron } from '../../themes';

import { containerStyles, getColors } from './alert.styles';

import type { StyleObject } from 'styletron-react';

export type AlertKind = 'error' | 'info' | 'infoLight' | 'success' | 'warning';

export interface AlertOverrides {
  Root?: StyleObject;
}

export type AlertProps = PropsWithChildren<{
  kind: AlertKind;
  /** An Icon to put on the left side */
  icon?: React.ReactNode;
  overrides?: AlertOverrides;
}>;

/**
 * A Styled Alert component. It will render in different colors based on its kind,
 * with an icon and children
 *
 * @deprecated - use `Notification` in newer development
 */
export const Alert = ({ icon, kind, children, overrides = {} }: AlertProps): JSX.Element => {
  const [css, theme] = themedUseStyletron();

  const alertColors = getColors(theme, kind);

  return (
    <div
      className={css({
        ...containerStyles(alertColors),
        ...overrides.Root,
      })}
    >
      {icon}
      {children}
    </div>
  );
};
