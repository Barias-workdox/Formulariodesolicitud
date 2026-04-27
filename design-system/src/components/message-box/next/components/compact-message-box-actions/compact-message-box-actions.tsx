import { BasicMessageBoxActions } from '..';

import { StyledContainer } from './styled-components';

import type { MessageBoxActionsProps } from '../../message-box.interfaces';

/**
 * Component that renders the actions of the compact message box.
 * It is used to render the primary button and secondary button.
 */
export const CompactMessageBoxActions = (props: MessageBoxActionsProps): JSX.Element => {
  return (
    <StyledContainer>
      <BasicMessageBoxActions {...props} />
    </StyledContainer>
  );
};
