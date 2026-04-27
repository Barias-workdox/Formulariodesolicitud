import { addPrefixToStringClosure } from '@utils/string.util';

/**
 * Composes the test id for the message box.
 */
export const composeMessageBoxTestId = addPrefixToStringClosure('message-box');

/**
 * Composes the test id for the text editor toolbar of the message box.
 */
export const composeTextEditorToolbarTestId = addPrefixToStringClosure(
  composeMessageBoxTestId('text-editor-toolbar'),
);

/**
 * Composes the test id for the actions of the message box.
 */
export const composeMessageBoxActionsTestId = addPrefixToStringClosure(
  composeMessageBoxTestId('actions'),
);
