import type { ReactNode } from 'react';

import { Download, TrashCan, View } from '@carbon/icons-react';

import { IconButton } from '@components/button';

import type { FeedFileActionProps, FeedFileActionType } from '../feed-file.interfaces';

/**
 * Returns a `FeedFileAction` icon based on action prop (`FeedFileActionType`)
 */
export const getFeedFileActionIcon = (currentAction: FeedFileActionType): ReactNode => {
  const actionOptions: Record<FeedFileActionType, ReactNode> = {
    delete: <TrashCan />,
    download: <Download />,
    view: <View />,
  };

  return actionOptions[currentAction];
};

/**
 * Action button (`view`, `download`, `delete`) for `FeedFile` component.
 */
export const FeedFileAction = ({
  'data-testid': dataTestId,
  action,
  disabled = false,
  buttonKind = 'link-tertiary',
  onClick,
}: FeedFileActionProps): JSX.Element => {
  const actionIcon = getFeedFileActionIcon(action);

  return (
    <IconButton
      data-testid={dataTestId}
      disabled={disabled}
      kind={buttonKind}
      onClick={onClick}
      size="auto"
    >
      {actionIcon}
    </IconButton>
  );
};
