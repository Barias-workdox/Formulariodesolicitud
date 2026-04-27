export interface TextSelectionPosition {
  left: number;
  top: number;
}

export interface ActionButtonStyleParams {
  $isFirstChild?: boolean;
  $isLastChild?: boolean;
}

export type ActionButtonType = 'close' | 'copy' | 'translate' | 'explain';

export interface ActionButtonConfig {
  action: ActionButtonType;
  isDisabled?: boolean;
  isLoading?: boolean;
  isVisible: boolean;
}
