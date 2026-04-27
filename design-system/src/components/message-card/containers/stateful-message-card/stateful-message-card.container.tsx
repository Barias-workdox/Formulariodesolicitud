import { type FocusEvent, useState } from 'react';

import { noop } from '@utils/noop';

import { MessageCardBase } from '../../components/message-card-base';

import type { MessageCardBaseProps } from '../../components/message-card-base';

export type StatefulMessageCardProps = Omit<MessageCardBaseProps, 'isActive'>;

/** Stateful Message Card Component with internal isActive management */
export const StatefulMessageCard = ({
  'data-testid': dataTestId = 'message-card',
  onFocus = noop,
  onBlur = noop,
  ...props
}: StatefulMessageCardProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  /** Handles the onFocus event and sets the isActive value of the component */
  const handleFocus = (event: FocusEvent<HTMLButtonElement>): void => {
    onFocus(event);
    setIsActive(true);
  };

  /** Handles the onBlur event and sets the isActive value of the component */
  const handleBlur = (event: MouseEvent | FocusEvent<Element, Element>): void => {
    onBlur(event);
    setIsActive(false);
  };

  return (
    <MessageCardBase
      data-testid={dataTestId}
      isActive={isActive}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};
