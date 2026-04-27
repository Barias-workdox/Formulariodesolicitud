import { useEffect, useState } from 'react';

import { ProgressBar } from '@components/progress';

import {
  COMPLETED_BAR_VALUE,
  INTERVAL,
  PERCENTAGE_PROGRESS_PER_INTERVAL,
} from '../delete-modal.constants';

import type { DeleteModalCountdownProps } from '../delete-modal.interfaces';

/**  Countdown for delete modal, if is not canceled, will execute the onComplete callback*/
export const DeleteModalCountdown = ({ onComplete }: DeleteModalCountdownProps): JSX.Element => {
  const [value, setValue] = useState(0);

  const isProgressCompleted = value >= COMPLETED_BAR_VALUE;

  /** Creates an interval until the progressbar fills completely */
  useEffect(() => {
    // Update progressbar until it fully fills, takes 3 seconds
    const interval = setInterval(() => {
      if (!isProgressCompleted) {
        setValue((oldValue) => oldValue + PERCENTAGE_PROGRESS_PER_INTERVAL);
      }
    }, INTERVAL);

    if (isProgressCompleted) {
      onComplete();
      clearInterval(interval);
    }

    // Clear interval on component unmount
    return (): void => {
      clearInterval(interval);
    };
    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <ProgressBar
      value={value}
      completed={isProgressCompleted}
    />
  );
};
