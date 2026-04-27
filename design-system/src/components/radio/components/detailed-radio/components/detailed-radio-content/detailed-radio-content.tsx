import type { ReactElement } from 'react';

import { Text } from '../../../../../text';
import { useCss } from '../../../../../utils/hooks/use-css';

import { styles } from './detailed-radio-content.styles';

import type { DetailedRadioProps } from '../../detailed-radio';

export type DetailedRadioContentProps = DetailedRadioProps;

/**
 * DetailedRadioContent component displays content with a description and an icon.
 */
export const DetailedRadioContent = ({
  children,
  description,
  icon,
  'data-testid': dataTestId,
}: DetailedRadioContentProps): ReactElement => {
  const { contentContainerStyles, textContainerStyles, iconContainerStyles } = useCss(styles);

  return (
    <div className={contentContainerStyles}>
      <div className={textContainerStyles}>
        <Text
          variant="body"
          fontWeight="500"
          color="neutral"
          margin={0}
        >
          {children}
        </Text>
        {description}
      </div>
      {icon && (
        <div
          data-testid={`${dataTestId}--icon`}
          className={iconContainerStyles}
        >
          {icon}
        </div>
      )}
    </div>
  );
};
