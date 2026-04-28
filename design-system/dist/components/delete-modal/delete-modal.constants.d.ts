import { DeleteModalStatus } from './delete-modal.interfaces';
/** Interval time for countdown expressed in ms*/
export declare const INTERVAL = 60;
/** Percentage incremented in every interval */
export declare const PERCENTAGE_PROGRESS_PER_INTERVAL = 3;
/** Full progress bar value (represents 100%) */
export declare const COMPLETED_BAR_VALUE = 100;
/** Delay between progress bar fully completed and transition to next step  */
export declare const BEGIN_DELETION_FADE_TIME = 1000;
/** Object used to avoid strings for modal statuses */
export declare const ALL_DELETE_MODAL_STATUSES: Record<DeleteModalStatus, DeleteModalStatus>;
