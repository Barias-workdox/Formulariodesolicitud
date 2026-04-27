import { useMemo } from 'react';

import { Modal as BaseModal } from 'baseui/modal';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { modalOverrides } from './modal.styles';

import type { ModalProps as BaseModalProps } from 'baseui/modal';

export interface ModalProps extends Omit<BaseModalProps, 'onClose'> {
  /**
   * If false, will not render the close icon button. Defaults to true
   *
   * @deprecated - use the new `closeable` native property. Will be removed in the near future
   */
  showCloseButton?: boolean;
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
  onClose?(): void;
}

/**
 * Custom styled base ui component
 *
 * Has two predefined styles 'RegularModal' and 'SectionedModal' with custom headers, body, and footers
 */
export const Modal = ({
  showCloseButton,
  closeable = true,
  zIndex,
  autoFocus = false,
  ...restProps
}: ModalProps): React.ReactElement => {
  const { overrides } = restProps;
  // Only for legacy support. When showCloseButton is deleted, just use `closeable`
  const canClose = showCloseButton !== undefined ? showCloseButton : closeable;

  const mergedOverrides = useMemo(
    () =>
      mergeOverridesDeep(
        modalOverrides({
          zIndex,
          canClose,
        }),
        overrides,
      ),
    [canClose, overrides, zIndex],
  );

  return (
    <BaseModal
      {...restProps}
      autoFocus={autoFocus}
      closeable={canClose}
      overrides={mergedOverrides}
    />
  );
};
