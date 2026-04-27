import type { ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { InformationPopoverHeader } from '../information-popover-header';

import type { InformationPopoverContentOverrides } from '../../information-popover.interfaces';

export interface InformationPopoverContentProps {
  'data-testid': string;
  title: string | ReactNode;
  content: string | ReactNode;
  overrides?: InformationPopoverContentOverrides;
  close(): void;
}

/**
 * Component to use as a popover content.
 */
export const InformationPopoverContent = ({
  'data-testid': dataTestId,
  content,
  title,
  overrides,
  close,
}: InformationPopoverContentProps): JSX.Element => {
  const { theme } = useCss();

  const { Header: HeaderOverride, Content: ContentOverride } = overrides || {};

  const Header = getOverride(HeaderOverride) || InformationPopoverHeader;
  const Content = getOverride(ContentOverride) || Text;

  return (
    <>
      <Header
        data-testid={`${dataTestId}__header`}
        title={title}
        onClose={close}
        {...getOverrideProps(HeaderOverride)}
      />
      <Content
        variant="bodySmall"
        margin={0}
        color={theme.colors.neutralSubdued}
        as="span"
        {...getOverrideProps(ContentOverride)}
      >
        {content}
      </Content>
    </>
  );
};
