import type { ReactElement, ReactNode } from 'react';

import { ParagraphSmall } from 'baseui/typography';

import { useCss } from '../../utils/hooks/use-css';

import type { DesignSystemTheme } from '../../../themes';
import type { DesignSystemColorType } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

interface StyleProps {
  barColor: DesignSystemColorType;
  labelColor: DesignSystemColorType;
}

const styles = {
  barStyles: (theme: DesignSystemTheme, { barColor }: StyleProps): StyleObject => ({
    width: theme.spacing.spacing2xs,
    height: theme.spacing.spacingXl,
    marginRight: theme.spacing.spacingXs,
    backgroundColor: theme.colors[barColor] || theme.colors.brandSubdued,
  }),
  authorContainerStyles: {
    flex: 1,
    overflow: 'hidden',
  } as StyleObject,
  labelStyles: (theme: DesignSystemTheme, { labelColor }: StyleProps): StyleObject => ({
    color: theme.colors[labelColor] || theme.colors.brand,
  }),
};

/**
 * Generates the styles for the message author.
 */
const authorStyles = (theme: DesignSystemTheme): StyleObject => ({
  fontWeight: 500,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  margin: 0,
  color: theme.colors.neutral,
});

export interface MessageAuthorProps {
  children: ReactNode;
  barColor: DesignSystemColorType;
  labelColor: DesignSystemColorType;
  label?: string;
}

/**
 * Styled author of the message
 */
export const MessageAuthor = ({
  children,
  label,
  barColor,
  labelColor,
}: MessageAuthorProps): ReactElement => {
  const { authorContainerStyles, barStyles, labelStyles, theme } = useCss(styles, {
    barColor,
    labelColor,
  });

  return (
    <>
      <span className={barStyles} />
      <div className={authorContainerStyles}>
        <ParagraphSmall $style={authorStyles(theme)}>
          {children}
          {label && (
            <>
              {' '}
              - <span className={labelStyles}>{label}</span>
            </>
          )}
        </ParagraphSmall>
      </div>
    </>
  );
};
