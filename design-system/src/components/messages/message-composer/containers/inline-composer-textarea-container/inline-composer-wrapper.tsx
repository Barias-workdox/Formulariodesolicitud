import type { PropsWithChildren, ReactElement } from 'react';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useStyleOverrides } from '@components/utils/hooks/use-css';

import { stylesOverrides } from '../../common/composer-textarea-container/composer-textarea-container.styles';

import type { ComposerTextareaContainerProps } from '../../common/composer-textarea-container/composer-textarea-container.interfaces';
import type { OverrideObject } from '@themes/theme.interfaces';

export type InlineComposerWraper = PropsWithChildren<
  Pick<ComposerTextareaContainerProps, 'isEditing' | 'isDisabled' | '$maxHeight'>
> & {
  overrides?: {
    ComposerWrapper?: OverrideObject<unknown>;
  };
};

/**
 * wrapper to inline composer text area
 */
export const InlineComposerWrapper = ({
  isEditing,
  isDisabled,
  $maxHeight,
  overrides: { ComposerWrapper } = {},
  children,
}: InlineComposerWraper): ReactElement => {
  const { ComposerWrapper: ComposerWrapperOverrides } = mergeOverridesDeep(stylesOverrides, {
    ComposerWrapper,
  });

  const { composerWrapperStyles } = useStyleOverrides({
    $styles: {
      composerWrapperStyles: ComposerWrapperOverrides.style,
    },
    isEditing,
    isDisabled,
    $minHeight: '38px',
    $maxHeight,
  });

  return <div className={composerWrapperStyles}>{children}</div>;
};
