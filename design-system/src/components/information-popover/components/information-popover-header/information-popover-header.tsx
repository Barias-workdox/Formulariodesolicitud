import type { ReactNode } from 'react';

import { Close as CloseIcon } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { Text } from '@components/text';
import { getOverride, getOverrideProps } from '@utils/overrides.utils';

import { StyledRoot } from './information-popover-header.styles';

import type { InformationPopoverHeaderOverrides } from './information-popover-header.interfaces';

export interface InformationPopoverHeaderProps {
  'data-testid': string;
  title: string | ReactNode;
  overrides?: InformationPopoverHeaderOverrides;
  onClose(): void;
}

/**
 * Header component for the InformationPopover.
 *
 * @remarks
 * This component is responsible for rendering the header section of the InformationPopover.
 */
export const InformationPopoverHeader = ({
  'data-testid': dataTestId,
  title,
  onClose,
  overrides,
}: InformationPopoverHeaderProps): JSX.Element => {
  const {
    Root: RootOverride,
    Title: TitleOverride,
    CloseButton: CloseButtonOverride,
  } = overrides || {};

  const Root = getOverride(RootOverride) || StyledRoot;
  const Title = getOverride(TitleOverride) || Text;
  const CloseButton = getOverride(CloseButtonOverride) || IconButton;

  return (
    <Root {...getOverrideProps(RootOverride)}>
      <Title
        variant="bodySmall"
        fontWeight="500"
        margin={0}
        as="span"
        overflow="hidden"
        {...getOverrideProps(TitleOverride)}
      >
        {title}
      </Title>

      <CloseButton
        data-testid={`${dataTestId}--close`}
        onClick={onClose}
        size="auto"
        kind="link-tertiary"
        {...getOverrideProps(CloseButtonOverride)}
      >
        <CloseIcon
          height={20}
          width={20}
        />
      </CloseButton>
    </Root>
  );
};
