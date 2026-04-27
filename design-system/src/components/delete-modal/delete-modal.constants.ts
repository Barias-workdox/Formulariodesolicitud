import type { DeleteModalStatus } from './delete-modal.interfaces';

/** Interval time for countdown expressed in ms*/
export const INTERVAL = 60;

/** Percentage incremented in every interval */
export const PERCENTAGE_PROGRESS_PER_INTERVAL = 3;

/** Full progress bar value (represents 100%) */
export const COMPLETED_BAR_VALUE = 100;

/** Delay between progress bar fully completed and transition to next step  */
export const BEGIN_DELETION_FADE_TIME = 1000;

/** Object used to avoid strings for modal statuses */
export const ALL_DELETE_MODAL_STATUSES: Record<DeleteModalStatus, DeleteModalStatus> = {
  confirm: 'confirm',
  starting: 'starting',
  in_progress: 'in_progress',
} as const;
