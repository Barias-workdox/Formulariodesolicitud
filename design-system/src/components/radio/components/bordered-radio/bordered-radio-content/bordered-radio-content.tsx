import type { ReactElement, ReactNode } from 'react';

import { Text } from '../../../../text';
import { useCss } from '../../../../utils/hooks/use-css';

import { styles } from './bordered-radio-content.styles';

export interface BorderedRadioContentProps {
  /** The title of the content. */
  title?: string;
  /** The description of the content. */
  description?: string;
  /** The icon to be displayed above of the description. */
  icon: ReactNode;
}

/**
 * Displays content for a BorderedRadio component.
 * Contains a description and icon.
 */
export const BorderedRadioContent = ({
  title,
  description,
  icon,
}: BorderedRadioContentProps): ReactElement => {
  const { containerStyles } = useCss(styles);

  return (
    <div className={containerStyles}>
      {icon}
      {title && (
        <Text
          variant="body"
          color="neutralSubdued"
          textAlign="center"
          fontWeight={500}
          margin={0}
        >
          {title}
        </Text>
      )}
      {description && (
        <Text
          variant="body"
          color="neutralSubdued"
          textAlign="center"
          margin={0}
        >
          {description}
        </Text>
      )}
    </div>
  );
};
