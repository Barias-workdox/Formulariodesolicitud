import type { ReactNode } from 'react';

import { TruncatedText } from '@components/truncated-text';

import { StyledLeftColumn, StyledRoot, StyledTitleWrapper } from './page-header-layout.styles';

export interface PageHeaderLayoutProps {
  /** The title text displayed in the page header. */
  title: string;
  /** Optional divisor border (defaults to `true`) */
  showBorder?: boolean;
  /** Optional element to display at the start of the header. */
  startEnhancer?: ReactNode;
  /** Optional element to display at the end of the header. */
  endEnhancer?: ReactNode;
  /** Optional element to display a toolbar with filters and contextual options under the title. */
  toolbar?: ReactNode;
}

/**
 * `PageHeaderLayout` is a layout component that displays a page header with a title,
 * optional elements at the start and end of the header, and an optional toolbar underneath the title.
 */
export const PageHeaderLayout = ({
  title,
  endEnhancer,
  startEnhancer,
  toolbar,
  showBorder = true,
}: PageHeaderLayoutProps): JSX.Element => {
  return (
    <StyledRoot $showBorder={showBorder}>
      <StyledTitleWrapper>
        <StyledLeftColumn>
          {startEnhancer}
          <TruncatedText
            tooltipProps={{
              content: title,
            }}
            textProps={{
              variant: 'h2',
              fontWeight: '500',
              margin: 0,
            }}
          >
            {title}
          </TruncatedText>
        </StyledLeftColumn>
        {endEnhancer}
      </StyledTitleWrapper>
      {toolbar}
    </StyledRoot>
  );
};
