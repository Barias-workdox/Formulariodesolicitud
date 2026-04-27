import { useMemo } from 'react';

import { Tag as BaseTag } from 'baseui/tag';

import { mergeOverridesDeep } from '../utils/baseui/helpers';
import { useCss } from '../utils/hooks/use-css';

import { tagOverrides, tagStyles } from './tag.styles';

import type { SupportedKind } from './tag.interface';
import type { TagProps as BaseTagProps } from 'baseui/tag';

export interface TagProps extends Omit<BaseTagProps, 'variant' | 'kind'> {
  'data-testid'?: string;
  kind?: SupportedKind;
  icon?: React.ReactNode;
  variant?: 'solid' | 'overlay';
  textMaxWidth?: string;
}

const DEFAULT_OVERRIDES = {};

/**
 * Styled tag component, supporting variant and kind styles and an optional
 * icon component rendered in the left
 */
export function Tag({
  'data-testid': dataTestId = 'design-system-tag',
  icon,
  children,
  kind = 'neutral',
  overrides = DEFAULT_OVERRIDES,
  variant = 'solid',
  closeable = false,
  ...rest
}: TagProps): React.ReactElement {
  const { iconContainerStyles } = useCss(tagStyles);

  const mergedOverrides = useMemo(
    () =>
      mergeOverridesDeep(tagOverrides({ $variant: variant, $kind: kind, dataTestId }), overrides),
    [overrides, variant, kind, dataTestId],
  );

  return (
    <BaseTag
      closeable={closeable}
      overrides={mergedOverrides}
      {...rest}
      kind="neutral"
    >
      {icon && <span className={iconContainerStyles}>{icon}</span>}
      {children}
    </BaseTag>
  );
}
