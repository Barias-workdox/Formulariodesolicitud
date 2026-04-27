import { ReactComponent as BrainIcon } from '@assets/icons/webdox-ai/brain-icon.svg';
import { Tag } from '@components/tag/next/tag';

import type { TagProps } from '@components/tag/next/tag.interfaces';

export type AITagProps = Omit<TagProps, 'kind' | 'icon'>;

/**
 * Component that renders a tag with an AI icon.
 */
export const AITag = ({ children, ...rest }: AITagProps): JSX.Element => {
  return (
    <Tag
      {...rest}
      kind="ai"
      icon={BrainIcon}
    >
      {children}
    </Tag>
  );
};
