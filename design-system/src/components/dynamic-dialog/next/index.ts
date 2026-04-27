// Main component
export { DynamicDialog } from './dynamic-dialog';

// Compound components
export { DynamicDialogHeader } from './components/dialog-header';

export { DynamicDialogBody } from './components/dialog-body';

export { DynamicDialogFooter } from './components/dialog-footer';

// Context hook
export { useDynamicDialog } from './context/dynamic-dialog.context';

// Types
export type {
  DynamicDialogProps,
  DynamicDialogHeaderProps,
  DynamicDialogBodyProps,
  DynamicDialogFooterProps,
  DynamicDialogContextValue,
} from './dynamic-dialog.interfaces';

// Constants
export {
  DEFAULT_DIALOG_WIDTH,
  DEFAULT_DIALOG_HEIGHT,
  MIN_DIALOG_WIDTH,
  MIN_DIALOG_HEIGHT,
  MOBILE_BREAKPOINT,
  DEFAULT_PLACEMENT,
} from './dynamic-dialog.constants';
