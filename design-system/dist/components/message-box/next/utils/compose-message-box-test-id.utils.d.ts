/**
 * Composes the test id for the message box.
 */
export declare const composeMessageBoxTestId: <StringT extends string | number>(str: StringT) => `message-box${StringT}`;
/**
 * Composes the test id for the text editor toolbar of the message box.
 */
export declare const composeTextEditorToolbarTestId: <StringT extends string | number>(str: StringT) => `message-boxtext-editor-toolbar${StringT}`;
/**
 * Composes the test id for the actions of the message box.
 */
export declare const composeMessageBoxActionsTestId: <StringT extends string | number>(str: StringT) => `message-boxactions${StringT}`;
