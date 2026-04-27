import { DesktopBasicMessageBoxActions, MobileBasicMessageBoxActions } from './components';

import type { MessageBoxActionsProps } from '../../message-box.interfaces';

export type BasicMessageBoxActionsProps = Pick<
  MessageBoxActionsProps,
  | 'secondaryButtonText'
  | 'primaryButtonText'
  | 'primaryButtonIcon'
  | 'secondaryButtonIcon'
  | 'primaryButtonProps'
  | 'secondaryButtonProps'
  | 'onSecondaryButtonClick'
>;

/**
 * Component that renders the basic actions of the message box.
 * It is used to render the primary button and secondary button.
 */
export const BasicMessageBoxActions = (props: BasicMessageBoxActionsProps): JSX.Element => {
  return (
    <>
      <DesktopBasicMessageBoxActions {...props} />
      <MobileBasicMessageBoxActions {...props} />
    </>
  );
};
